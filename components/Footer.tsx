import React from "react";

export default function Footer() {
  return (
    <footer className="flex min-h-80 bg-sky-50 justify-between items-start gap-20 p-10 text-black">
      <div className="footer-section">
        <h1 className="text-3xl pb-4 font-bold">
          Core Courses
        </h1>
        <ul className="ml-2">
          <li className="pb-2">Programming Fundamentals</li>
          <li className="pb-2">Web2 Using NextJS</li>
          <li className="pb-2">Earn as You Learn</li>
        </ul>
      </div>
      <div className="footer-section">
        <h1 className="text-3xl pb-4 font-bold">
          Advanced Courses
        </h1>
        <ul className=" ml-2">
          <li className="pb-2">Web 3 and Metaverse</li>
          <li className="pb-2">Cloud-Native Computing</li>
          <li className="pb-2">Artificial Intelligence (AI) and Deep Learning</li>
          <li className="pb-2">Ambient Computing and IoT</li>
          <li className="pb-2">Genomics and Bioinformatics</li>
          <li className="pb-2">Network Programmability and Automation</li>
        </ul>
      </div>
      <div className="footer-section">
        <h1 className="text-3xl pb-4 font-bold">
          Social Links
        </h1>
        <ul className="ml-2">
          <li className="pb-2">Instagram</li>
          <li className="pb-2">Twitter</li>
          <li className="pb-2">LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
}