"use client";
import Image from "next/image";
import CountdownTimerTabs from "./countdown-timer";
import yellowChain from "@/assets/ornaments/yellowChain.svg";
import blueChain from "@/assets/ornaments/blueChain.svg";
import yellowStarOutline from "@/assets/ornaments/yellowStarOutline.svg";
import yellowStar from "@/assets/ornaments/yellowStar.svg";
// import { motion as Motion } from "motion/react";
import { BlurFade } from "../ui/blur-fade";
export function CountdownSection() {
  return (
    <section id="countdown" className=" h-fit  w-full flex flex-col items-center  py-[80px] md:py-[120px] relative overflow-clip px-2 md:px-6">
      <div className="w-full max-w-[343px] md:max-w-[680px] flex flex-col">
        <BlurFade inView delay={0.25 * 2} className="mb-5">
          <div className="flex flex-col gap-3">
            <h3 className="font-akira text-white  z-[6] text-[28px] md:text-[40px]  ">COUNTDOWN</h3>

            <div className="flex gap-2 h-1 ">
              <div className="w-12 h-full bg-[#0c7cfe]"></div>
              <div className="w-4 h-full bg-[#0c7cfe]"></div>
              <div className="w-2 h-full bg-[#FF3B30]"></div>
            </div>
          </div>
        </BlurFade>

        <BlurFade className="w-full max-w-[343px] md:max-w-[680px] z-10" inView delay={0.25 * 3}>
          <div className="relative z-[10] w-full flex justify-center mt-9 ">
            <CountdownTimerTabs />
          </div>
        </BlurFade>
      </div>

      <Image src={yellowChain} alt="ornament" className="absolute -top-56 -left-16 z-[-1] w-[45px] h-auto rotate-[120deg]" />
      <Image src={blueChain} alt="ornament" className="absolute -bottom-10 right-16 z-[-1] w-auto h-[200px] rotate-[100deg]" />
      <Image src={yellowStarOutline} alt="ornament" className="absolute top-2 right-2 z-[-1] w-[60px] h-auto " />
      <Image src={yellowStar} alt="ornament" className="absolute bottom-2 left-16 z-[-1] w-[36px] h-auto " />
    </section>
  );
}
