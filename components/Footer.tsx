import Logo from "../public/logo.svg";
import Image from "next/image";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <div>
      {/* Adjust padding for smaller screens */}
      <div className="grid grid-cols-1 md:grid-cols-12 p-5 md:p-10">
        {/* Logo Section: Full width on small screens, 6 columns on medium+ */}
        <div className="mx-5 md:mx-10 w-full md:w-[45%] col-span-1 md:col-span-6">
          <Image src={Logo} alt="Logo" />
          <p className="my-5 md:my-7 text-slate-500 font-light text-base md:text-lg">
            Significantly enhance your screening and recruitment procedures
          </p>
          <div className="flex space-x-4 md:space-x-0 md:justify-between">
            <a
              href="https://twitter.com/ayush_5588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 hover:underline"
            >
              <Twitter className="text-gray-500" size={20} />
            </a>
            <a
              href="https://github.com/Ayushmadhur5588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 hover:underline"
            >
              <Github className="text-gray-500" size={20} />
            </a>
            <a
              href="https://twitter.com/ayush_5588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 hover:underline"
            >
              <Instagram className="text-gray-500" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-bhardwaj-799573166/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 hover:underline"
            >
              <Linkedin className="text-gray-500" size={20} />
            </a>
          </div>
        </div>

        {/* Resources Section: Full width on small screens, 3 columns on medium+ */}
        <div className="px-2 pt-8 md:pt-20 col-span-1 md:col-span-3">
          <div className="cursor-pointer p-1 font-normal text-base md:text-lg">
            Resources
          </div>
          <div className="cursor-pointer p-1 text-slate-500 hover:text-blue-600 text-sm md:text-base">
            Blog
          </div>
          <div className="cursor-pointer p-1 text-slate-500 hover:text-blue-600 text-sm md:text-base">
            Apps
          </div>
          <div className="cursor-pointer p-1 text-slate-500 hover:text-blue-600 text-sm md:text-base">
            Learn
          </div>
          <div className="cursor-pointer p-1 text-slate-500 hover:text-blue-600 text-sm md:text-base">
            Integration
          </div>
          <div className="cursor-pointer p-1 text-slate-500 hover:text-blue-600 text-sm md:text-base">
            Careers
          </div>
        </div>

        {/* Company Section: Full width on small screens, 3 columns on medium+ */}
        <div className="px-2 pt-8 md:pt-20 col-span-1 md:col-span-3">
          <div className="p-1 font-normal text-base md:text-lg">Company</div>
          <div className="p-1 cursor-pointer text-slate-500 hover:text-blue-500 text-sm md:text-base">
            Our Story
          </div>
          <div className="p-1 cursor-pointer text-slate-500 hover:text-blue-500 text-sm md:text-base">
            Our Team
          </div>
          <div className="p-1 cursor-pointer text-slate-500 hover:text-blue-500 text-sm md:text-base">
            Press
          </div>
          <div className="p-1 cursor-pointer text-slate-500 hover:text-blue-500 text-sm md:text-base">
            Contact
          </div>
        </div>
      </div>

      {/* Bottom Section: Adjust margin and padding for small screens */}
      <div className="mt-6 border-t border-gray-300 mx-5 md:mx-10 py-6 md:py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">
          <p className="text-xs md:text-sm text-gray-500 text-center md:text-left">
            Copyright © 2025 Hirespark All rights reserved.
          </p>
          <p className="text-xs md:text-sm text-gray-500 text-center md:text-right">
            Designed with ❤️ by Ayush
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;