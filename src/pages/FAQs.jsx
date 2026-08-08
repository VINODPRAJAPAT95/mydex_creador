import FAQAccordion from "../components/FAQAccordion";
import PageHero from "../components/ui/PageHero";
import { faqs } from "../data/siteData";

const FAQs = () => (
  <>
    <PageHero title="Frequently Asked Questions" subtitle="Answers for importers, distributors and private-label partners." />
    <section className="section-pad">
      <div className="container-lux max-w-4xl">
        <FAQAccordion items={faqs} />
      </div>
    </section>
  </>
);

export default FAQs;
