import PageHero from "../components/ui/PageHero";

export const PrivacyPolicy = () => (
  <>
    <PageHero title="Privacy Policy" subtitle="How Mydex International handles your information." />
    <section className="section-pad">
      <div className="container-lux prose max-w-3xl space-y-4 text-gray-700">
        <p>We collect inquiry details solely to respond to business requests and improve our services.</p>
        <p>Contact data is never sold. Shared only with internal teams or logistics partners as needed to fulfill trade requests.</p>
        <p>Cookies may be used for analytics and experience improvements. You can accept or decline via the cookie banner.</p>
      </div>
    </section>
  </>
);

export const Terms = () => (
  <>
    <PageHero title="Terms & Conditions" subtitle="General terms for website use and business inquiries." />
    <section className="section-pad">
      <div className="container-lux max-w-3xl space-y-4 text-gray-700">
        <p>Content on this website is for informational purposes and does not constitute a binding offer.</p>
        <p>Quotations, MOQs and shipping terms are confirmed only through official commercial communication.</p>
        <p>By using this website you agree to use it for legitimate business inquiries only.</p>
      </div>
    </section>
  </>
);
