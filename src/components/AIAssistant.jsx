import { useEffect, useRef, useState } from "react";
import { FaPaperPlane, FaRobot, FaTimes } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";
import { company, productCategories } from "../data/siteData";

/* ------------------------------------------------------------------
   Knowledge base — real Mydex International facts, pulled partly from
   siteData (company + productCategories) so it stays in sync with the
   rest of the site, and partly from static company history that isn't
   modeled elsewhere. Each entry is matched against the user's message
   by simple keyword scanning — no external API calls, fully local. */
const productList = productCategories.map((c) => c.name).join(", ");

const knowledgeBase = [
  {
    keywords: ["hi", "hello", "hey", "namaste"],
    reply:
      "Hello! Welcome to Mydex International. I can help with our products, certifications, MOQ, export markets or contact details — what would you like to know?",
  },
  {
    keywords: ["product", "products", "dry fruit", "dryfruit", "spice", "herb", "seed", "pulse", "commodit"],
    reply: `We export a premium range across these categories: ${productList}. Every batch is graded for export quality before packing. Want details on a specific category or its MOQ?`,
  },
  {
    keywords: ["moq", "minimum order", "quote", "price", "pricing", "quotation", "rfq"],
    reply:
      "Pricing and minimum order quantities depend on the product, grade and destination port. The quickest way to get an accurate quote is through our Get Quote page — share the product, quantity and destination and our team will respond within one business day.",
  },
  {
    keywords: ["cert", "certification", "iso", "fssai", "apeda", "fieo", "fda", "spices board", "make in india", "quality standard"],
    reply:
      "We're certified under FSSAI, ISO, APEDA, Spices Board India, FIEO, FDA and Make in India — you'll find all our certification logos in the Certifications section of the homepage. These back every shipment with verified quality and compliance.",
  },
  {
    keywords: ["histor", "founded", "since", "old", "year", "legacy", "heritage", "family", "1956"],
    reply:
      "Mydex International was founded in 1956 in Unjha, Gujarat, and is now a 70-year-old, family-run business in its third generation. Our Hyderabad office, established in 1990, handles export coordination and buyer communication.",
  },
  {
    keywords: ["country", "countries", "export to", "global", "worldwide", "market", "international"],
    reply:
      "We currently export to 30+ countries across the Middle East, Europe, North America, Africa and Asia, with sourcing, grading and packing done in-house at our Unjha, Gujarat facility for full quality control.",
  },
  {
    keywords: ["contact", "phone", "call", "email", "address", "office", "reach", "whatsapp", "hour"],
    reply: `You can reach us at ${company.phone} or ${company.email}. Our office: ${company.address}. Hours: ${company.hours}. You can also use the Contact page for a direct form.`,
  },
  {
    keywords: ["service", "services", "packaging", "documentation", "compliance", "shipping", "logistics"],
    reply:
      "Beyond sourcing and trading, we handle export-grade packaging, documentation and compliance support, and custom RFQ handling — so buyers get a single point of contact from raw material to freight-ready shipment.",
  },
  {
    keywords: ["sample", "trial order"],
    reply:
      "Sample requests can be arranged for serious buyers before a bulk order — mention the product and destination on our Get Quote page and our team will guide you through the sample process.",
  },
  {
    keywords: ["thank", "thanks", "great", "awesome"],
    reply: "You're very welcome! Happy to help with anything else — products, quotes, or export documentation.",
  },
];

const fallbackReplies = [
  "That's a good question — for specifics like this, our team can help directly. Could you tell me a bit more, or reach out via our Contact page?",
  "I want to get you an accurate answer on that. Could you rephrase, or ask about our products, MOQ, certifications, or export markets?",
  "I don't have that detail on hand, but our export team can. Feel free to share your query on the Get Quote or Contact page.",
];

const quickReplies = ["Our Products", "MOQ & Quote", "Certifications", "Contact Us"];

const getReply = (raw) => {
  const text = raw.toLowerCase();
  for (const entry of knowledgeBase) {
    if (entry.keywords.some((k) => text.includes(k))) {
      return entry.reply;
    }
  }
  return fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
};

/* Three-dot "assistant is typing" indicator */
const TypingIndicator = () => (
  <div className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-sm bg-mydex-cream px-4 py-3">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="h-1.5 w-1.5 rounded-full bg-mydex-green/50"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
      />
    ))}
  </div>
);

/* Small round avatar badge shown next to each message */
const Avatar = ({ from }) =>
  from === "bot" ? (
    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-mydex-green text-mydex-gold">
      <FaRobot size={13} />
    </div>
  ) : (
    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-mydex-gold/20 text-xs font-semibold text-mydex-green">
      You
    </div>
  );

const messageVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: "easeOut" } },
};

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I'm the Mydex AI trade assistant. Ask me about our products, MOQ, certifications, export markets or how to reach our team.",
    },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  const pushBotReply = (userText) => {
    setTyping(true);
    const delay = 650 + Math.random() * 700;
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: getReply(userText) }]);
      setTyping(false);
    }, delay);
  };

  const sendText = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { from: "user", text: trimmed }]);
    setInput("");
    pushBotReply(trimmed);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendText(input);
  };

  return (
    <>
      {/* Toggle button — AI-styled with sparkle badge + online pulse */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-mydex-green text-mydex-gold shadow-premium"
        aria-label="Mydex AI Assistant"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes size={20} />
            </motion.span>
          ) : (
            <motion.span
              key="bot"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <FaRobot size={22} />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Sparkle "AI" badge */}
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-mydex-gold text-mydex-green shadow">
          <HiSparkles size={11} />
        </span>

        {/* Online pulse dot */}
        {!open && (
          <span className="absolute bottom-0 right-0 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400" />
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 left-6 z-50 flex h-[480px] w-[340px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-mydex-gold/30 bg-white shadow-premium"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-mydex-green px-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-mydex-gold/15 text-mydex-gold">
                <FaRobot size={16} />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-mydex-gold">Mydex AI Assistant</p>
                <p className="flex items-center gap-1.5 text-[11px] text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Online — usually replies instantly
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-mydex-beige/40 p-4 text-sm">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  variants={messageVariants}
                  initial="hidden"
                  animate="show"
                  className={`flex items-end gap-2 ${m.from === "user" ? "flex-row-reverse" : ""}`}
                >
                  <Avatar from={m.from} />
                  <div
                    className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                      m.from === "bot"
                        ? "rounded-bl-sm bg-white text-mydex-ink shadow-sm"
                        : "rounded-br-sm bg-mydex-green text-white"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <div className="flex items-end gap-2">
                  <Avatar from="bot" />
                  <TypingIndicator />
                </div>
              )}

              {/* Quick-reply chips — shown only before the user has asked anything */}
              {messages.length === 1 && !typing && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {quickReplies.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendText(q)}
                      className="rounded-full border border-mydex-gold/40 bg-white px-3 py-1.5 text-xs font-medium text-mydex-green transition hover:border-mydex-gold hover:bg-mydex-gold/10"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex gap-2 border-t border-mydex-beige bg-white p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about products, MOQ, export…"
                className="flex-1 rounded-full border border-mydex-beige px-4 py-2 text-sm outline-none transition focus:border-mydex-gold"
              />
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                type="submit"
                disabled={!input.trim()}
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-mydex-gold text-mydex-green transition disabled:opacity-40"
                aria-label="Send message"
              >
                <FaPaperPlane size={13} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;