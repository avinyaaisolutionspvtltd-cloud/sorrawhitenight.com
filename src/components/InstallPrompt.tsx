"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const DISMISS_KEY = "swn-install-dismissed";

function isMobile(): boolean {
  if (typeof navigator === "undefined") return false;
  return /android|iphone|ipad|ipod|windows phone/i.test(navigator.userAgent);
}

function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    ("standalone" in window.navigator &&
      (window.navigator as { standalone?: boolean }).standalone === true)
  );
}

export default function InstallPrompt() {
  const [deferred, setDeferred] = useState<Event | null>(null);
  const [showIOS, setShowIOS] = useState(false);
  const [visible, setVisible] = useState(false);
  const [installing, setInstalling] = useState(false);

  useEffect(() => {
    if (isStandalone() || !isMobile()) return;
    const dismissed = localStorage.getItem(DISMISS_KEY);
    if (dismissed) return;

    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferred(e);
      setVisible(true);
    };

    const onEnd = () => {
      // A2HS dismissed by browser (iOS doesn't fire this)
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onEnd);

    const timer = window.setTimeout(() => {
      if (!localStorage.getItem(DISMISS_KEY)) {
        const isIOS =
          typeof navigator !== "undefined" &&
          /ipad|iphone|ipod/i.test(navigator.userAgent);
        if (isIOS && !isStandalone()) setShowIOS(true);
      }
    }, 4000);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onEnd);
      clearTimeout(timer);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferred) return;
    setInstalling(true);
    const ev = deferred as { prompt?: () => Promise<{ outcome: string }> };
    await ev.prompt?.();
    setVisible(false);
    setInstalling(false);
    localStorage.setItem(DISMISS_KEY, "1");
  };

  const handleDismiss = () => {
    localStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
    setShowIOS(false);
  };

  if (!visible && !showIOS) return null;

  return (
    <>
      {visible && deferred && (
        <div
          className="fixed bottom-0 left-0 right-0 z-[60] px-5 pb-5 sm:px-8 sm:pb-8 pointer-events-none"
          role="dialog"
          aria-label="Add to Home Screen"
        >
          <div className="pointer-events-auto glass rounded-xl p-6 mx-auto max-w-md">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-border-gold bg-background-deep">
                <Image
                  src="/icons/icon-192.png"
                  alt="Sorra White Night"
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="serif-display text-lg text-ivory font-medium">
                  Sorra White Night
                </p>
                <p className="text-muted text-xs leading-relaxed mt-1">
                  Add to your home screen for faster access and a richer
                  experience.
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button
                type="button"
                onClick={handleInstall}
                disabled={installing}
                className="flex-1 bg-primary hover:bg-primary-light text-background-deep text-xs uppercase tracking-[0.2em] px-5 py-3 transition-colors disabled:opacity-60"
              >
                {installing ? "Installing…" : "Install App"}
              </button>
              <button
                type="button"
                onClick={handleDismiss}
                className="px-5 py-3 border border-border-gold text-muted text-xs uppercase tracking-[0.2em] hover:text-ivory transition-colors"
              >
                Not Now
              </button>
            </div>
          </div>
        </div>
      )}

      {showIOS && (
        <div
          className="fixed bottom-0 left-0 right-0 z-[60] px-5 pb-5 sm:px-8 sm:pb-8 pointer-events-none"
          role="dialog"
          aria-label="Add to Home Screen"
        >
          <div className="pointer-events-auto glass rounded-xl p-6 mx-auto max-w-md">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-border-gold bg-background-deep">
                <Image
                  src="/icons/icon-192.png"
                  alt="Sorra White Night"
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="serif-display text-lg text-ivory font-medium">
                  Sorra White Night
                </p>
                <p className="text-muted text-xs leading-relaxed mt-1">
                  Tap the Share button below, then &ldquo;Add to Home
                  Screen&rdquo; to install.
                </p>
                <div className="flex items-center gap-2 mt-3 text-primary-light text-xs">
                  <svg
                    className="w-4 h-4 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16l4 4m0 0l4-4m-4 4V12"
                    />
                  </svg>
                  <span className="uppercase tracking-[0.16em]">
                    Share → Add to Home Screen
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button
                type="button"
                onClick={handleDismiss}
                className="w-full px-5 py-3 border border-border-gold text-muted text-xs uppercase tracking-[0.2em] hover:text-ivory transition-colors text-center"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}