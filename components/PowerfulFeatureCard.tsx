import React from "react";
import Image from "next/image";
interface inputType {
  data: {
    title: string;
    description: string;
    icon: string;
  };
}

const PowerfulFeatureCard = ({ data }: inputType) => {
  return (

      <div className="w-[100%] mx-auto py-10">
        <div className="flex justify-center w-[50%] mx-auto rounded-full p-2">
          <Image src={data.icon} alt="icon" className="size-12 p-1 bg-blue-700 rounded-full" />
        </div>
        <div className="py-5">
          <div className="text-center font-medium text-xl">{data.title}</div>
          <div className="text-center text-gray-700 font-light px-5">{data.description}</div>
        </div>
      </div>

  );
};

export default PowerfulFeatureCard;
