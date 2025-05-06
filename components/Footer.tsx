import Logo from "../public/logo.svg";
import Image from "next/image";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-12 p-10">
        <div className="mx-10 w-[45%] col-span-6">
          <Image src={Logo} alt="Logo"/>
          <p className="my-7 text-slate-500 font-light text-lg">
            Significantly enhance your screening and recruitment procedures
          </p>
          <div className="flex justify-between">
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

        <div className="px-2 pt-20 col-span-3">
          <div className="cursor-pointer p-1 font-normal text-lg">
            Resources
          </div>
          <div className="cursor-pointer p-1 text-slate-500 hover:text-blue-600">
            Blog
          </div>
          <div className="cursor-pointer p-1 text-slate-500 hover:text-blue-600">
            Apps
          </div>
          <div className="cursor-pointer p-1 text-slate-500 hover:text-blue-600">
            Learn
          </div>
          <div className="cursor-pointer p-1 text-slate-500 hover:text-blue-600">
            Integration
          </div>
          <div className="cursor-pointer p-1 text-slate-500 hover:text-blue-600">
            Carrers
          </div>
        </div>

        <div className="px-2 pt-20 col-span-3">
          <div className="p-1 flex-start font-normal text-lg">Company</div>
          <div className="p-1 cursor-pointer flex-start text-slate-500 hover:text-blue-500">
            Our Story
          </div>
          <div className="p-1 cursor-pointer flex-start text-slate-500 hover:text-blue-500">
            Our Team
          </div>
          <div className="p-1 cursor-pointer flex-start text-slate-500 hover:text-blue-500">
            Press
          </div>
          <div className="p-1 cursor-pointer flex-start text-slate-500 hover:text-blue-500">
            Contact
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-300 mx-10 py-10">
        <div className="sm:flex sm:justify-between">
          <p className="text-sm text-gray-500">
            Copyright &copy; 2025 Hirespark All rights reserved.
          </p>

          <p className="text-sm text-gray-500">Designed with ❤️ by Ayush</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
