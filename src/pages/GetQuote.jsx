import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import { productCategories } from "../data/siteData";

/* =========================================================
   WATERMARK
========================================================= */

const FlowerWatermark = ({ tone, motif = "flower", className = "" }) => {
  if (motif === "kaju") {
    const resolvedTone = tone || "black";
    const stroke =
      resolvedTone === "light" ? "%23F5E6C8" : "%23231F1F";

    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-0 opacity-[0.045] ${className}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='170' height='170' viewBox='0 0 170 170'%3E%3Cg fill='none' stroke='${stroke}' stroke-width='1.4'%3E%3Cpath d='M40 55 C20 58 16 80 28 96 C40 112 62 108 65 90 C68 74 62 58 48 54 C45 53 42 54 40 55Z'/%3E%3Cpath d='M46 58 C55 62 60 70 60 80'/%3E%3Cg transform='translate(110,115)'%3E%3Ccircle cx='0' cy='0' r='4'/%3E%3Cpath d='M0 0 C0 -14 -12 -20 0 -32 C12 -20 0 -14 0 0Z'/%3E%3Cpath d='M0 0 C14 0 20 -12 32 0 C20 12 14 0 0 0Z'/%3E%3Cpath d='M0 0 C0 14 12 20 0 32 C-12 20 0 14 0 0Z'/%3E%3Cpath d='M0 0 C-14 0 -20 12 -32 0 C-20 -12 -14 0 0 0Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "170px 170px",
        }}
      />
    );
  }

  const resolvedTone = tone || "gold";
  const stroke =
    resolvedTone === "light" ? "%23F5E6C8" : "%23C9A227";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 ${
        resolvedTone === "light"
          ? "opacity-[0.08]"
          : "opacity-[0.05]"
      } ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg fill='none' stroke='${stroke}' stroke-width='1.3'%3E%3Ccircle cx='70' cy='70' r='5'/%3E%3Cpath d='M70 70 C70 48 54 38 70 20 C86 38 70 48 70 70Z'/%3E%3Cpath d='M70 70 C92 70 102 54 120 70 C102 86 92 70 70 70Z'/%3E%3Cpath d='M70 70 C70 92 86 102 70 120 C54 102 70 92 70 70Z'/%3E%3Cpath d='M70 70 C48 70 38 86 20 70 C38 54 48 70 70 70Z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "140px 140px",
      }}
    />
  );
};

/* =========================================================
   GET QUOTE PAGE
========================================================= */

const GetQuote = () => {
  const [status, setStatus] = useState("idle");

  /* =======================================================
     HANDLE FORM SUBMIT
  ======================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    // Important:
    // currentTarget ko await ke baad directly use nahi karna.
    // Isliye form reference pehle save kar rahe hain.
    const form = e.currentTarget;

    const templateParams = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
      phone: form.phone.value,
      category: form.category.value,
      quantity: form.quantity.value,
      destination: form.destination.value,
      message: form.message.value,
    };

    console.log("Quote Form Data:", templateParams);

    try {
      const response = await emailjs.send(
        "service_fjuvpiv",
        "template_niutt3n",
        templateParams,
        "5gEv7BVsDTnN3b8Uy"
      );

      console.log("Email sent:", response.status, response.text);

      setStatus("sent");

      // Form reset
      form.reset();

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <>
      {/* ===================================================
          PAGE HERO
      =================================================== */}

      <PageHero
        title="Request a Custom Quote"
        subtitle="Share product, quantity and destination — our trade team will respond promptly."
      />

      {/* ===================================================
          QUOTE FORM SECTION
      =================================================== */}

      <section className="section-pad relative overflow-hidden bg-mydex-beige">

        {/* Soft Gold Blur */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-mydex-gold/10 blur-3xl" />

        {/* Soft Green Blur */}
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-mydex-green/10 blur-3xl" />

        {/* Watermark */}
        <FlowerWatermark motif="kaju" />

        {/* =================================================
            FORM
        ================================================= */}

        <form
          onSubmit={handleSubmit}
          className="container-lux relative z-10 max-w-3xl card-lux space-y-4"
        >

          {/* =========================
              NAME + EMAIL
          ========================= */}

          <div className="grid gap-4 sm:grid-cols-2">

            <input
              required
              name="name"
              placeholder="Full Name"
              className="rounded border border-mydex-beige px-3 py-3 text-sm outline-none focus:border-mydex-gold"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="Business Email"
              className="rounded border border-mydex-beige px-3 py-3 text-sm outline-none focus:border-mydex-gold"
            />

          </div>

          {/* =========================
              COMPANY + PHONE
          ========================= */}

          <div className="grid gap-4 sm:grid-cols-2">

            <input
              name="company"
              placeholder="Company"
              className="rounded border border-mydex-beige px-3 py-3 text-sm outline-none focus:border-mydex-gold"
            />

            <input
              name="phone"
              placeholder="Phone / WhatsApp"
              className="rounded border border-mydex-beige px-3 py-3 text-sm outline-none focus:border-mydex-gold"
            />

          </div>

          {/* =========================
              PRODUCT CATEGORY
          ========================= */}

          <select
            required
            name="category"
            defaultValue=""
            className="w-full rounded border border-mydex-beige px-3 py-3 text-sm outline-none focus:border-mydex-gold"
          >
            <option value="" disabled>
              Select Product Category
            </option>

            {productCategories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>

          {/* =========================
              QUANTITY + DESTINATION
          ========================= */}

          <div className="grid gap-4 sm:grid-cols-2">

            <input
              name="quantity"
              placeholder="Quantity / MOQ interest"
              className="rounded border border-mydex-beige px-3 py-3 text-sm outline-none focus:border-mydex-gold"
            />

            <input
              name="destination"
              placeholder="Destination Country"
              className="rounded border border-mydex-beige px-3 py-3 text-sm outline-none focus:border-mydex-gold"
            />

          </div>

          {/* =========================
              MESSAGE
          ========================= */}

          <textarea
            required
            name="message"
            rows={5}
            placeholder="Product specs / packaging / additional notes"
            className="w-full resize-none rounded border border-mydex-beige px-3 py-3 text-sm outline-none focus:border-mydex-gold"
          />

          {/* =========================
              SUBMIT BUTTON
          ========================= */}

          <Button
            type="submit"
            variant="gold"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Quote Request Sent ✓"
              : status === "error"
              ? "Try Again"
              : "Submit Quote Request"}
          </Button>

          {/* =========================
              SUCCESS MESSAGE
          ========================= */}

          {status === "sent" && (
            <p className="mt-3 text-sm font-medium text-mydex-green">
              Thank you! Your quote request has been sent successfully.
              Our team will get back to you shortly.
            </p>
          )}

          {/* =========================
              ERROR MESSAGE
          ========================= */}

          {status === "error" && (
            <p className="mt-3 text-sm font-medium text-red-600">
              Something went wrong. Please try again or contact us directly.
            </p>
          )}

        </form>
      </section>
    </>
  );
};

export default GetQuote;