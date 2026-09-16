# Deployment & Infrastructure

## Architecture overview

```
Browser → Cloudflare (CDN + HTTPS, free plan)
          └── origin: AWS S3 static website hosting
               └── bucket: www.sorrawhitenight.com (the live site)
```

- **Domain:** `sorrawhitenight.com` (apex) + `www.sorrawhitenight.com`
- **Registrar (DNS):** GoDaddy
- **DNS provider:** Cloudflare nameservers (GoDaddy domain points to Cloudflare NS)
- **Origin:** AWS S3 "static website hosting" endpoint (HTTP; Cloudflare upgrades to HTTPS and terminates TLS)
- **No CloudFront in use** (CloudFront requires an AWS support enablement that blocks `CreateDistribution` on this account; Cloudflare was chosen as the CDN instead).

## Deployment pipeline (the whole flow)

1. Edit code in `src/`.
2. `npm run build` → static files in `out/`.
3. Upload: `aws s3 sync ./out s3://www.sorrawhitenight.com --delete --region ap-south-1`
4. Cloudflare picks up the change (edge TTL) — usually seconds; hard-refresh your browser.

The script `deploy/deploy.sh` wraps steps 2–3 (run it from the repo root):

```bash
cd sorrawhitenight-website
./deploy/deploy.sh
```

### Manual fast path (used for the current deploys)

```bash
cd /data/avinya-projects/sorrawhitenight-website
npm run build
aws s3 sync ./out s3://www.sorrawhitenight.com --delete --region ap-south-1 --exact-timestamps
```

Then verify (see below).

## AWS

- **Account ID:** `323477258751` (root user)
- **Default region:** `ap-south-1` (Mumbai)
- **CLI:** `aws` configured on this machine (`~/.local/bin/aws`). Check identity: `aws sts get-caller-identity`.
- **IAM:** using root credentials (acceptable for this single-site setup; document any change).

### S3 buckets (all in `ap-south-1`)

| Bucket | Role |
|--------|------|
| `www.sorrawhitenight.com` | **Live site.** Static website hosting: index `index.html`, error `404.html`; public-read bucket policy. Serves the actual content. |
| `sorrawhitenight.com` | Apex redirect: `RedirectAllRequestsTo → http://www.sorrawhitenight.com`. No content. |
| `sorrawhitenight-website` | Legacy/staging bucket from the first deploy. Not referenced. Can be deleted. |

> **Why the bucket name must equal the domain:** S3 static website hosting routes by HTTP `Host` header → bucket name. So the live bucket is named `www.sorrawhitenight.com`, and the apex has its own redirect bucket `sorrawhitenight.com`. If you ever rename, re-create the bucket with the matching name.

Safety notes:
- Both website buckets had the account-level **Block Public Access** default overridden to allow the public-read policy (policy-based access, not ACLs; `BucketOwnerEnforced` ownership).
- Content-type is inferred by extension on upload (HTML/JS/manifest all deploy correctly today — verified).

## Cloudflare

- **Plan:** Free
- **Zone:** `sorrawhitenight.com`
- **Nameservers (as returned by 8.8.8.8):**
  - `asa.ns.cloudflare.com`
  - `brett.ns.cloudflare.com`
- Cloudflare DNS resolves both apex and `www` to Cloudflare IPs (`104.21.79.166` / `172.67.146.154`).
- Live SSL: Let's Encrypt cert (auto, ~90-day, renewed by Cloudflare automatically).

### Key DNS records (in Cloudflare)

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| CNAME | `@`   | `www.sorrawhitenight.com.s3-website.ap-south-1.amazonaws.com` | Proxied (orange) |
| CNAME | `www` | `www.sorrawhitenight.com.s3-website.ap-south-1.amazonaws.com` | Proxied (orange) |

Settings:
- **SSL mode:** Flexible (Cloudflare↔visitor HTTPS; Cloudflare→origin HTTP to S3 endpoint)
- **Always Use HTTPS:** ON
- (Both records proxy to the same S3 website endpoint; the apex additionally 301s origin-side because the `sorrawhitenight.com` redirect bucket is its origin.)

## GoDaddy

- Domain `sorrawhitenight.com` registered at GoDaddy.
- Nameservers = the two Cloudflare nameservers above (that's all GoDaddy needs — DNS lives in Cloudflare).
- **Do not put DNS records in GoDaddy.** Remove old A/CNAME parked records there; forwarding rules there caused 404s/conflicts (historical: `www` → GoDaddy forwarding IP `15.197.225.128` broke the site; fixed by removing forwarding and pointing DNS at Cloudflare).

## Live URLs & expected behavior

| URL | Result |
|-----|--------|
| `https://www.sorrawhitenight.com` | 200, full page |
| `https://sorrawhitenight.com` | 301 → `www.sorrawhitenight.com` |
| `http://...` (any) | auto-redirect to HTTPS (force-https) |
| Unknown path | S3 `404.html` |

## Verification commands

```bash
# Live site
curl -sk https://www.sorrawhitenight.com -o /dev/null -w "%{http_code}\n"
curl -sk https://sorrawhitenight.com -o /dev/null -w "%{http_code} → %{redirect_url}\n"

# DNS
dig +short @8.8.8.8 www.sorrawhitenight.com   # expect Cloudflare IPs
dig +short @8.8.8.8 sorrawhitenight.com        # expect Cloudflare IPs

# S3 origin
curl -s http://www.sorrawhitenight.com.s3-website.ap-south-1.amazonaws.com -o /dev/null -w "%{http_code}\n"
```

## Gotchas / incidents history

1. **404 via www.sorrawhitenight.com** — S3 Host-header routing; fixed by bucket named exactly `www.sorrawhitenight.com`.
2. **"This page isn't working"** — GoDaddy Domain Forwarding fought the CNAME (redirect loop). Removed.
3. **HTTPS 404** — S3 website endpoints have **no HTTPS**; required Cloudflare (Flexible SSL) in front.
4. **CloudFront blocked** — `CreateDistribution` requires AWS support enablement ("account must be verified"). Cloudflare chosen instead. CloudFront is unnecessary now.
5. Deploy uses `--delete`; the `sorrawhitenight-website` legacy bucket isn't touched by deploys.