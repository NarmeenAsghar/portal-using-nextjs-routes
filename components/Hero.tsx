import React from "react";
import Image from "next/image";
import gImage from "@/public/gImage.png";
import bg_house from "@/public/bg_house.jpg";

export default function Hero() {
  return (
    <div>
      <div
        className="absolute inset-0 bg-cover bg-center object-center"
        style={{
          backgroundImage: `url(${bg_house.src})`,
          filter: "blur(10px)",
          zIndex: -1,
          opacity: 0.7,
        }}
      />

      <div className="flex flex-col md:flex-row justify-between items-start  pb-10 pt-10">
        <div className="w-2/4 text-start pl-10 pt-20">
          <h1 className="text-6xl font-black text-sky-800">Governor Sindh</h1>
          <h2 className="text-5xl text-sky-800">Kamran Khan Tessori</h2>
          <h2 className="text-4xl font-black text-sky-500">Certified Cloud</h2>
          <h2 className="text-4xl font-black text-sky-500">
            Applied Generative AI
          </h2>
          <h2 className="text-4xl font-black text-sky-500">
            Engineer (GenEng)
          </h2>

          <br />
          <p className="font-black text-2xl text-sky-800">
            Earn up to $5,000 / month
          </p>
          <p className="font-black text-2xl text-sky-800">
            Now admissions are open in Hyderabad
          </p>

          <div className="flex">
            <button className="font-black text-xl text-white p-4 mt-8 bg-sky-800 rounded">
              Apply Now
            </button>
          </div>
        </div>

        <div className="w-3/5 flex justify-center items-end p-0 mt-0">
          <Image src={gImage} alt="cover" width={1000} className="self-end" />
        </div>
      </div>
    </div>
  );
};
