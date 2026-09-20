"use client";

import { FlashingText } from "@/components/ui/light-streaks";
import Image from "next/image";
import starBlue from "@/assets/ornaments/starBlue.svg";
import blueStarOutline from "@/assets/ornaments/blueStarOutline.svg";
import yellowStarOutline from "@/assets/ornaments/yellowStarOutline.svg";
import yellowStar from "@/assets/ornaments/yellowStar.svg";
import cityScape from "@/assets/ornaments/cityScape.svg";
import cityScape2 from "@/assets/ornaments/cityScape2.svg";
import sword from "@/assets/ornaments/blueSword.svg";
import blueChain from "@/assets/ornaments/blueChain.svg";
// import { motion as Motion } from "motion/react";
import Link from "next/link";
import { BlurFade } from "../ui/blur-fade";

export function HeroSection() {
  return (
    <section className="text-start flex min-h-[850px]  h-screen w-full flex-col items-center justify-center  relative overflow-hidden px-4 pt-8">
      <BlurFade delay={0.25} inView className="mb-[18px] z-[5] w-full max-w-[343px] md:max-w-[680px] lg:max-w-[900px]">
        {/* Mobile Headline */}
        <div className="    flex gap-2  items-start relative w-full  justify-between">
          <div className="flex flex-col ">
            <h1 className="font-akira text-white text-[52px]/[48px] md:text-[64px]/[60px] [text-shadow:6px_6px_0_#082B5C] ">
              MABIM
              <FlashingText text="RPL" flashesCount={10} flashLength={100} className=" text-[#FAFF22]  [text-shadow:6px_6px_0_#082B5C]" />
            </h1>
          </div>
          <div className="rounded-full bg-[#0C7CFE] border-4 border-[#FAFF22] flex flex-col items-center justify-center aspect-square w-[100px] h-[100px] relative">
            <p className="font-akira text-white text-2xl">20</p>
            <p className="font-akira text-white text-2xl">26</p>
            <Image src={yellowStar} alt="star" className="absolute -bottom-4 -left-2 w-auto h-[56px] object-cover z-[-1]" />
            <Image src={blueStarOutline} alt="star" className="absolute -top-10 right-20 w-auto h-[38px] object-cover z-[-1]" />
          </div>

          <Image src={starBlue} alt="star" className="absolute -bottom-8 -left-28 w-[300px] h-[300px] object-cover z-[-1]" />
        </div>
      </BlurFade>

      {/* Description */}
      <div className="w-full max-w-[343px] md:max-w-[680px] lg:max-w-[900px]  z-[6]">
        <BlurFade delay={0.25 * 2} inView className="flex flex-col gap-3">
          <div className="w-full h-[75px] border-3 border-l-[6px]  border-[#faff22] [clip-path:polygon(0_0,100%_0,100%_0,97%_100%,0_100%)] flex items-start justify-center px-[18px] py-3 flex-col mb-[18px]">
            <h4 className="font-trueno-black text-[#faff22] text-base">Wingbyte Generations:</h4>
            <h4 className="font-trueno-bold text-white text-[10px]">Mengepakkan Sayap Inovasi, tuk gapai titik kemenangan</h4>
          </div>
          <p className="font-montserrat text-[14px]/[18px] md:text-[16px]/[22px] text-white/55 text-justify">
            MABIM RPL adalah kegiatan orientasi dan pembekalan mahasiswa baru Program Studi Rekayasa Perangkat Lunak bergabunglah dan mulai perjalananmu bersama keluarga HIMARPL.
          </p>
        </BlurFade>
      </div>
      <div className="w-full max-w-[343px] md:max-w-[680px] lg:max-w-[900px] mt-8 hidden">
        <BlurFade delay={0.25 * 3} inView className="z-[5]">
          <div className="flex flex-col w-full max-w-[343px] md:max-w-[680px] relative items-start justify-center gap-4  z-[5] ">
            <Link href="" target="_blank">
              <div className="bg-[#faff22] px-7 py-3 [clip-path:polygon(0_0,100%_0,100%_100%,10%_100%,0_70%)] hover:scale-105 transition-all duration-300 ease-in-out relative">
                <p className="font-trueno-regular text-[#001735] tracking-widest">Twibbon</p>
              </div>
              <Image src={yellowStar} alt="star" className="absolute top-6 left-10 w-[40px] h-[40px] object-cover z-[-1]" />
            </Link>
            <Link href="" target="_blank">
              <div className="border-[#0C7CFE] border-[3px] px-7 py-3 [clip-path:polygon(0_0,100%_0,100%_100%,10%_100%,0_70%)] hover:scale-105 transition-all duration-300 ease-in-out">
                <p className="font-trueno-regular text-white tracking-widest">Booklet</p>
              </div>
            </Link>
            <Image src={sword} alt="ornaments" className=" absolute -top-8 right-28 rotate-[-25deg] w-auto h-fit object-fill" />
            <Image src={yellowStarOutline} alt="ornaments" className=" absolute bottom-0 right-0 w-[70px] h-[70px] object-fill" />
          </div>
        </BlurFade>
      </div>

      <Image src={cityScape2} alt="ornaments" className="sm:hidden absolute top-0 right-0 w-screen h-auto object-fill" />
      <Image src={cityScape} alt="ornaments" className="hidden sm:block absolute -top-20 right-0 w-screen h-auto object-fill" />
      <Image src={blueChain} alt="ornaments" className="absolute bottom-0 -left-0 rotate-[76deg] w-[32px] h-auto" />
    </section>
  );
}
