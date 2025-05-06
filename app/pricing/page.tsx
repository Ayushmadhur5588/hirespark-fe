import  Faq  from "@/components/Faq";
import  {Pricing}  from "@/components/pricing/pricing";
import  {PricingHero}  from "@/components/pricing/pricing-hero";

export default function PricingPage() {
  return (
    <div className="px-5 md:px-10 xl:px-44 space-y-10">
      <PricingHero />
      <Pricing />
      <Faq />
    </div>
  );
}
