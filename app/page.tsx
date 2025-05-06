import Companies  from "@/components/Companies";
import { CTA } from "@/components/cta";
import  Faq  from "@/components/Faq";
import EasyToImplement from "@/components/EasyImplementation";
import  {Features}  from "@/components/Features";
import Hero from "@/components/Hero";
import  {Metrics}  from "@/components/Metrics";
import  PowerfulFeature  from "@/components/PowerfulFeature";

export default function Home() {
  return (
    <div className="px-5 md:px-10 xl:px-44">
      <Hero />
      <Companies />
      <EasyToImplement />
      <Features />
      <PowerfulFeature />
      <CTA
        title="Make a lasting impression with HireSpark"
        description="Discover why hiring managers prefer HireSpark over the competition
          and what makes it the easiest, most powerful video interviewing
          platform on the marke"
      />
      <Metrics />

      <Faq />
      <CTA
        title="Make a lasting impression with HireSpark"
        description="Discover why hiring managers prefer HireSpark over the competition
          and what makes it the easiest, most powerful video interviewing
          platform on the marke"
      />
    </div>
  );
}
