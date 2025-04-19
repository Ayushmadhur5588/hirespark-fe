import Feature1 from "@/public/asset 16.jpeg";
import Feature2 from "@/public/asset 17.jpeg";
import Image from "next/image";

const Features = () => {
  return (
    <div className="px-24">
      <div className="text-center text-6xl font-medium py-10 w-[60%] mx-auto">
        Easy implementation in three easy steps
      </div>
      <div className="text-center text-xl font-extralight text-gray-500 py-5 w-[50%] mx-auto">
        Cutting-edge, user-friendly AI tool and growth analytics designed to
        boost user conversion, engagement, and retention
      </div>

      <div className="grid grid-cols-2 mx-auto mt-24">
        <div className="cols-span-1 p-5 my-5">
          <div className="text-center text-5xl">
            Automated Candidate Ranking
          </div>
          <div className="py-10  text-center text-xl text-slate-500 font-light">
            Let AI analyze and rank applicants based on qualifications,
            experience, and skills, ensuring you focus on the most promising
            candidates first
          </div>
          <div className="flex justify-center">
            <button className="p-4 border-2 border-blue-700 rounded-lg text-blue-700">
              Request Demo
            </button>
          </div>
        </div>
        <div className="cols-span-1">
          <Image src={Feature1} alt="Img_1" className="p-5" />
        </div>
      </div>
      <div className="grid grid-cols-2 mx-auto mt-24">
        <div className="cols-span-1">
          <Image src={Feature2} alt="Img_1" className="p-5" />
        </div>
        <div className="cols-span-1 p-5 my-5">
          <div className="text-center text-5xl">
            Real-Time Applicant Analytics
          </div>
          <div className="py-10  text-center text-xl text-slate-500 font-light">
            Let AI analyze and rank applicants based on qualifications,
            experience, and skills, ensuring you focus on the most promising
            candidates first.
          </div>
          <div className="flex justify-center">
            <button className="p-4 border-2 border-blue-700 rounded-lg text-blue-700">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
