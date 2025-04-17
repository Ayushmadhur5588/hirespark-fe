"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FaqProps = {
  data: {
    id: number;
    question: string;
    answer: string;
  };
  isOpen: number | null;
  setIsOpenItem: () => void;
};

const FaqSection = ({ data, isOpen, setIsOpenItem }: FaqProps) => {
  return (
    <div className="py-3">
      <div
        className="cursor-pointer font-normal p-3 border border-gray-300 rounded-lg w-1/2 mx-auto"
        onClick={setIsOpenItem}
      >
        <div className="flex justify-between">
          <div>{data.question}</div>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm font-light py-5">{data.answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FaqSection;
