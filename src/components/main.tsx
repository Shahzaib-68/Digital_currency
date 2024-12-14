"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import dgcurrencypic from "@/app/1443063-digital-currency.jpg";

const Main: React.FC = () => {
  const [coinrate, setCoinrate] = useState<{ [Key: string]: number } | null>(null);
  const url = "https://api.coinlayer.com/api/live";
  const key = "4ef74001b20c004ca0eaf615fb3b79f4";

  useEffect(() => {
    fetch(`${url}?access_key=${key}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((finalres) => {
        console.log(finalres); // Log the entire response
        const allrates = finalres.rates;
        setCoinrate(allrates);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  if (!coinrate) {
    return <div className="text-neutral-50 mt-8">Loading...</div>;
  }

  return (
    <div className="text-neutral-50 md:w-[1320px] w-[340px] m-auto mt-16 min-h-screen bgColor ">
      <h1 className="text-center md:w-[900px] m-auto text-teal-400 bg-slate-50 text-5xl font-bold font-mono rounded-2xl mb-9">
        COIN RATES
      </h1>
      <div className="mt-4 flex flex-wrap justify-center items-start gap-4">
        {Object.keys(coinrate).map((item, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg w-full md:w-[45%] lg:w-[30%] cursor-pointer">
            <h2 className="text-3xl font-mono font-bold">{item}</h2>
            <p className="text-2xl">{coinrate[item]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
