import logo from "@/app/coinlayer_logo_white.svg";
import youtubelogo from "@/app/youtube.png";
import instagramlogo from "@/app/instagram.png";
import twitterlogo from "@/app/twitter-original.svg";
import facebooklogo from "@/app/facebook-original.svg";
import githublogo from "@/app/github-original.svg";
import linkdinlogo from "@/app/linkedin-original.svg";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#334662] text-neutral-50 p-8 mt-9 w-full">
      <div className=" flex justify-between md:flex-row flex-col  gap-6">
        <div className="">
          <Image
            alt="this is logo"
            src={logo}
            width={250}
            height={100}
            className="mt-14"
          />
          <div className="flex justify-around mt-5 w-48">
            <Image alt="this is logo" src={youtubelogo} width={30} height={30} />
            <Image alt="this is logo" src={instagramlogo} width={30} height={30} />
            <Image alt="this is logo" src={twitterlogo} width={30} height={30} />
            <Image alt="this is logo" src={facebooklogo} width={30} height={30} />
            <Image alt="this is logo" src={githublogo} width={30} height={30} className="bg-black" />
            <Image alt="this is logo" src={linkdinlogo} width={30} height={30} />
          </div>
        </div>

        <div className="mt-12 font-mono">
          <h1 className="font-bold text-2xl">PRODUCT</h1>
          <ul className="space-y-3 mt-4">
            <li>Pricing</li>
            <li>List Your API</li>
            <li>Why choose us?</li>
            <li>Marketplace</li>
            <li>Affiliates</li>
          </ul>
        </div>

        <div className="mt-12 font-mono">
          <h1 className="font-bold text-2xl">DOCS & HELP</h1>
          <ul className="space-y-3 mt-4">
            <li>Documentation</li>
            <li>Blog</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="mt-12 font-mono">
          <h1 className="font-bold text-2xl">GET IN TOUCH</h1>
          <ul className="space-y-3 mt-4">
            <li>Contact</li>
            <li>Get a quote</li>
          </ul>
        </div>

        <div className="mt-12 font-mono">
          <h1 className="font-bold text-2xl">ACCOUNT</h1>
          <ul className="space-y-3 mt-4">
            <li>Log In</li>
            <li>Forgot Password</li>
            <li>FREE Signup</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-neutral-300">© 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}
