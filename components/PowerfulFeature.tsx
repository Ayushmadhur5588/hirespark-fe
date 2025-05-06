import { powerfulFeatures } from "@/constants/constants";
import PowerfulFeatureCard from "./PowerfulFeatureCard";

const PowerfulFeature = () => {
  return (
    <div>
      <div className="font-normal py-5 text-6xl text-center w-[50%] mx-auto">
        Powerful features tailored to your needs
      </div>
      <div className="py-5 text-gray-500 font-light text-xl text-center">
        Gain valuable data-driven insights into talent markets worldwide
      </div>

      {/* 🟢 Grid on parent */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-36">
        {powerfulFeatures.map((p) => (
          <PowerfulFeatureCard key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
};

export default PowerfulFeature;
