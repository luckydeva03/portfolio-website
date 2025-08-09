import Link from "next/link";
import React from "react";
import { footer } from "@/data/global";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-12 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="w-full max-w-6xl m-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="uppercase text-fun-gray text-sm font-bold mb-4">
              Social Links
            </h4>
            <div className="flex flex-wrap gap-3">
              {footer.columns.find(col => col.title === "Social")?.links.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="inline-flex items-center px-4 py-3 border border-fun-pink rounded-lg text-fun-pink hover:bg-fun-pink hover:text-bg transition-all duration-200 w-[140px] h-[48px]"
                >
                  {item.icon && (
                    <span className="flex items-center justify-center mr-2 w-5 h-5">
                      <Image 
                        src={item.icon} 
                        width={20} 
                        height={20} 
                        alt={`${item.name} icon`}
                        className="brightness-0 invert transition-all duration-200"
                      />
                    </span>
                  )}
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            {/* <h4 className="uppercase text-fun-gray text-sm font-bold mb-4">
              Quick Links
            </h4> */}
            <div className="space-y-3">
              {footer.columns.find(col => col.title === "Pages")?.links.map((item, index) => (
                <div key={index}>
                  <Link 
                    href={item.link}
                    className="text-fun-gray hover:text-fun-pink transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Fun Fact */}
          <div>
            {/* <h4 className="uppercase text-fun-gray text-sm font-bold mb-4">
              Quotes
            </h4> */}
            <div className="text-sm text-fun-gray leading-relaxed">
              <p className="font-bold mb-2">
                "Education is the most powerful weapon which you can use to change the world."
              </p>
              <p className="mt-3 text-xs text-fun-pink italic">
                — Nelson Mandela
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
      </div>
      {/* <div className="max-w-6xl w-full m-auto pt-8 text-center text-fun-gray border-t border-fun-pink-dark">
        <p className="flex flex-col items-center justify-center ">
          <div className="mt-2 text-xs ">
            Made by{" "}
            <a
              href="mailto:luckydeva2003@gmail.com"
              className="text-fun-gray-light font-medium"
            >
              Lucky Deva
            </a>
            . All rights reserved.
          </div>
        </p>
      </div> */}
    </footer>
  );
}

export default Footer;