import { useState } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(() => !localStorage.getItem("mydex_cookies"));

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-[90] w-full border-t border-mydex-gold/30 bg-mydex-green px-4 py-4 text-white shadow-premium">
      <div className="container-lux flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="max-w-3xl text-sm text-white/80">
          We use cookies to improve your browsing experience and analyze site traffic. By continuing, you agree to our cookie policy.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => {
              localStorage.setItem("mydex_cookies", "accepted");
              setVisible(false);
            }}
            className="rounded bg-mydex-gold px-4 py-2 text-xs font-semibold uppercase tracking-wider text-mydex-green"
          >
            Accept
          </button>
          <button
            onClick={() => setVisible(false)}
            className="rounded border border-white/30 px-4 py-2 text-xs uppercase tracking-wider"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
