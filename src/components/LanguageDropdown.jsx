import { useEffect, useRef, useState } from "react";
import { FaGlobe, FaChevronDown, FaSearch } from "react-icons/fa";

/*
  CUSTOM LANGUAGE DROPDOWN — full control over the UI, powered by
  Google Translate underneath. Google's own dropdown/banner stays
  completely hidden — the customer only ever sees YOUR dropdown.

  How it works:
  1. Google's translate script is loaded silently in the background.
  2. It creates a hidden <select> element (Google always does this).
  3. When the customer picks a language from OUR dropdown, we find
     that hidden <select> and trigger it programmatically — Google
     then translates the whole page for us. Picking Chinese, for
     example, translates every page of the site to Chinese instantly.
  4. The choice is saved to localStorage so it persists across page
     navigations (this is an SPA, so without this it would reset on
     every route change).

  This list covers all languages Google Translate supports. Since
  it's a long list, the dropdown includes a search box so customers
  don't have to scroll through 100+ options.
*/
const LANGUAGES = [
  { code: "af", label: "Afrikaans" },
  { code: "sq", label: "Albanian" },
  { code: "am", label: "Amharic" },
  { code: "ar", label: "Arabic" },
  { code: "hy", label: "Armenian" },
  { code: "az", label: "Azerbaijani" },
  { code: "eu", label: "Basque" },
  { code: "be", label: "Belarusian" },
  { code: "bn", label: "Bengali" },
  { code: "bs", label: "Bosnian" },
  { code: "bg", label: "Bulgarian" },
  { code: "ca", label: "Catalan" },
  { code: "ceb", label: "Cebuano" },
  { code: "zh-CN", label: "Chinese (Simplified)" },
  { code: "zh-TW", label: "Chinese (Traditional)" },
  { code: "co", label: "Corsican" },
  { code: "hr", label: "Croatian" },
  { code: "cs", label: "Czech" },
  { code: "da", label: "Danish" },
  { code: "nl", label: "Dutch" },
  { code: "en", label: "English" },
  { code: "eo", label: "Esperanto" },
  { code: "et", label: "Estonian" },
  { code: "fi", label: "Finnish" },
  { code: "fr", label: "French" },
  { code: "fy", label: "Frisian" },
  { code: "gl", label: "Galician" },
  { code: "ka", label: "Georgian" },
  { code: "de", label: "German" },
  { code: "el", label: "Greek" },
  { code: "gu", label: "Gujarati" },
  { code: "ht", label: "Haitian Creole" },
  { code: "ha", label: "Hausa" },
  { code: "haw", label: "Hawaiian" },
  { code: "he", label: "Hebrew" },
  { code: "hi", label: "Hindi" },
  { code: "hmn", label: "Hmong" },
  { code: "hu", label: "Hungarian" },
  { code: "is", label: "Icelandic" },
  { code: "ig", label: "Igbo" },
  { code: "id", label: "Indonesian" },
  { code: "ga", label: "Irish" },
  { code: "it", label: "Italian" },
  { code: "ja", label: "Japanese" },
  { code: "jw", label: "Javanese" },
  { code: "kn", label: "Kannada" },
  { code: "kk", label: "Kazakh" },
  { code: "km", label: "Khmer" },
  { code: "rw", label: "Kinyarwanda" },
  { code: "ko", label: "Korean" },
  { code: "ku", label: "Kurdish" },
  { code: "ky", label: "Kyrgyz" },
  { code: "lo", label: "Lao" },
  { code: "la", label: "Latin" },
  { code: "lv", label: "Latvian" },
  { code: "lt", label: "Lithuanian" },
  { code: "lb", label: "Luxembourgish" },
  { code: "mk", label: "Macedonian" },
  { code: "mg", label: "Malagasy" },
  { code: "ms", label: "Malay" },
  { code: "ml", label: "Malayalam" },
  { code: "mt", label: "Maltese" },
  { code: "mi", label: "Maori" },
  { code: "mr", label: "Marathi" },
  { code: "mn", label: "Mongolian" },
  { code: "my", label: "Myanmar (Burmese)" },
  { code: "ne", label: "Nepali" },
  { code: "no", label: "Norwegian" },
  { code: "ny", label: "Nyanja (Chichewa)" },
  { code: "or", label: "Odia (Oriya)" },
  { code: "ps", label: "Pashto" },
  { code: "fa", label: "Persian" },
  { code: "pl", label: "Polish" },
  { code: "pt", label: "Portuguese" },
  { code: "pa", label: "Punjabi" },
  { code: "ro", label: "Romanian" },
  { code: "ru", label: "Russian" },
  { code: "sm", label: "Samoan" },
  { code: "gd", label: "Scots Gaelic" },
  { code: "sr", label: "Serbian" },
  { code: "st", label: "Sesotho" },
  { code: "sn", label: "Shona" },
  { code: "sd", label: "Sindhi" },
  { code: "si", label: "Sinhala" },
  { code: "sk", label: "Slovak" },
  { code: "sl", label: "Slovenian" },
  { code: "so", label: "Somali" },
  { code: "es", label: "Spanish" },
  { code: "su", label: "Sundanese" },
  { code: "sw", label: "Swahili" },
  { code: "sv", label: "Swedish" },
  { code: "tl", label: "Tagalog (Filipino)" },
  { code: "tg", label: "Tajik" },
  { code: "ta", label: "Tamil" },
  { code: "tt", label: "Tatar" },
  { code: "te", label: "Telugu" },
  { code: "th", label: "Thai" },
  { code: "tr", label: "Turkish" },
  { code: "tk", label: "Turkmen" },
  { code: "uk", label: "Ukrainian" },
  { code: "ur", label: "Urdu" },
  { code: "ug", label: "Uyghur" },
  { code: "uz", label: "Uzbek" },
  { code: "vi", label: "Vietnamese" },
  { code: "cy", label: "Welsh" },
  { code: "xh", label: "Xhosa" },
  { code: "yi", label: "Yiddish" },
  { code: "yo", label: "Yoruba" },
  { code: "zu", label: "Zulu" },
];

const STORAGE_KEY = "mydex_selected_lang";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeLang, setActiveLang] = useState(
    () => localStorage.getItem(STORAGE_KEY) || "en"
  );
  const wrapRef = useRef(null);
  const searchRef = useRef(null);

  // ── Load Google Translate silently in the background ──
  useEffect(() => {
    if (document.getElementById("google-translate-script")) {
      applyStoredLanguage();
      return;
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: LANGUAGES.map((l) => l.code).join(","),
          autoDisplay: false,
        },
        "google_translate_element"
      );
      // give Google a moment to build its hidden <select>, then
      // re-apply whatever language the user had picked before
      setTimeout(applyStoredLanguage, 600);
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // ── Close dropdown when clicking outside ──
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setIsOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // focus search box the moment dropdown opens
  useEffect(() => {
    if (isOpen && searchRef.current) searchRef.current.focus();
  }, [isOpen]);

  const applyStoredLanguage = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved !== "en") {
      triggerGoogleTranslate(saved);
    }
  };

  // finds Google's hidden select and fires it — this is what
  // actually performs the translation
  const triggerGoogleTranslate = (langCode, attempt = 0) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    } else if (attempt < 10) {
      // Google's select isn't ready yet — retry briefly
      setTimeout(() => triggerGoogleTranslate(langCode, attempt + 1), 300);
    }
  };

  const handleSelect = (langCode) => {
    setActiveLang(langCode);
    localStorage.setItem(STORAGE_KEY, langCode);
    setIsOpen(false);
    setQuery("");
    triggerGoogleTranslate(langCode);
  };

  const active = LANGUAGES.find((l) => l.code === activeLang) || LANGUAGES[0];

  const filteredLanguages = LANGUAGES.filter((lang) =>
    lang.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div ref={wrapRef} className="relative">
      {/* Google's real widget — kept completely hidden, we never show this */}
      <div id="google_translate_element" style={{ display: "none" }} />

      <button
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-mydex-gold/40 px-2.5 py-2.5 text-xs font-medium text-mydex-gold transition hover:bg-mydex-gold/10"
      >
        <FaGlobe />
        <span className="hidden text-[11px] uppercase tracking-wider sm:inline">{active.label}</span>
        <FaChevronDown className={`text-[9px] transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-60 overflow-hidden border border-mydex-gold/30 bg-white text-mydex-ink shadow-premium">
          <div className="flex items-center gap-2 border-b border-gray-100 px-3 py-2">
            <FaSearch className="text-xs text-gray-400" />
            <input
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search language..."
              className="w-full text-sm text-gray-600 outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="max-h-64 overflow-y-auto py-1">
            {filteredLanguages.length === 0 && (
              <p className="px-4 py-3 text-sm text-gray-400">No matches</p>
            )}
            {filteredLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm transition-colors ${
                  lang.code === activeLang
                    ? "bg-mydex-green/10 font-semibold text-mydex-green"
                    : "text-gray-600 hover:bg-mydex-beige"
                }`}
              >
                {lang.label}
                <span className="text-[10px] uppercase text-gray-400">{lang.code}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;

/*
  Also add this to your global CSS (index.css) — Google injects a
  couple of stray elements even when the main widget is hidden;
  this makes sure none of them ever show up or shift your layout:

  body { top: 0 !important; }
  .goog-te-banner-frame,
  .skiptranslate iframe { display: none !important; }
  #google_translate_element { display: none !important; }
*/