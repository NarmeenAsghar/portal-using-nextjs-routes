import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex justify-evenly bg-sky-800 h-20 text-center items-center">
          <Image src={logo} alt="logo" width={100} className="mt-20" />

          <h1 className="text-2xl font-bold text-sky-200 ">
            Tuition Free Education Program on Latest Technologies
          </h1>
          <li>
            <Link href="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/apply" className="text-white">
              Apply
            </Link>
          </li>
          <li>
            <Link href="/jobs" className="text-white">
              Jobs
            </Link>
          </li>
          <li>
            <Link href="/result" className="text-white">
              Result
            </Link>
          </li>
          <li>
            <Link href="/courses" className="text-white">
              Courses
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
