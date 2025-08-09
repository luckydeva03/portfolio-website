import React from "react";
import SectionTitle from "../global/SectionTitle";
import { testimonials } from "@/data/content/home";

function Testimonials() {
  return (
    <section id="aboutme" className="w-full">
      <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <SectionTitle title="About Me" />
      <div className="max-w-4xl m-auto flex justify-center">
        {testimonials.map((item, index) => {
          return (
            <div
              key={index}
              className="relative bg-fun-pink-darker border border-fun-pink-light p-8 rounded-lg w-full max-w-3xl flex flex-col justify-between"
            >
              <img
                className="sqD top-[-50px] left-0 bottom-auto right-auto md:bottom-[-50px] md:top-auto md:right-[-25px] md:left-auto w-20 z-[-100]"
                src="/static/doodles/testimonials/yay.svg"
                alt=""
              />
              <p className="text-lg italic relative testimonialQuote text-center">
                "{item.quote}"
              </p>
              {/* <p className="mt-6 text-sm text-fun-gray text-center">
                <b className="text-fun-pink font-monospace">{item.name}</b> {" "}
                {item.job}
              </p> */}
            </div>
          );
        })}
      </div>
    </div>
    </section>
  );
}

export default Testimonials;
