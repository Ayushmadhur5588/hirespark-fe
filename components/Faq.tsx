"use client";
import { useState } from "react";

import { faq } from "@/constants/constants";
import FaqSection from "./FaqSection";
const Faq = () => {
  const [isOpen, setIsOpen] = useState<number | null>(0);

  const handleToggle = (id: number) => {
    if (isOpen === id) {
      setIsOpen(null);
    } else {
      setIsOpen(id);
    }
  };

  return (
    <div className="my-20 py-10">
      <h2 className="font-semibold text-6xl flex justify-center py-5">
        Everything you need to know.
      </h2>
      <p className="font-light pb-16 pt-3 flex justify-center text-lg md:text-lg tracking-tight text-primary-text">
        Got questions? We’ve got answers. Here’s everything you need to know
        before getting started.
      </p>
      {faq.map((data) => (
        <FaqSection
          key={data.id}
          data={data}
          isOpen={isOpen === data.id ? isOpen : null}
          setIsOpenItem={() => handleToggle(data.id)}
        />
      ))}
    </div>
  );
};
export default Faq;
