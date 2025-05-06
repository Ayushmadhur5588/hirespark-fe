import { CTA } from "@/components/cta";
import FeatureHero from "@/components/features/feature-hero";
import  {Features}  from "@/components/Features";
import  PowerfulFeature  from "@/components/PowerfulFeature";

export default function FeaturePage() {
  return (
    <div className="px-5 md:px-10 xl:px-44">
      <FeatureHero />
      <Features />
      <PowerfulFeature />
      <CTA
        title="Stand out with Hirespark"
        description="Learn why hiring managers choose Hirespark over competitors and see what makes it the simplest, most effective video interviewing platform available"
      />
    </div>
  );
}
