"use client";
import Image from "next/image";
import { useScroll, motion as Motion } from "motion/react";
import { useRef } from "react";
import { BlurFade } from "../ui/blur-fade";
import yellowStar from "@/assets/ornaments/yellowStar.svg";
import blueStarOutline from "@/assets/ornaments/blueStarOutline.svg";

const timeline = [
  {
    date: "2026-09-10",
    title: "Technical Meeting",
    desc: "",
  },
  {
    date: "2026-10-03",
    title: "Day - I",
    desc: "",
  },
  {
    date: "2026-10-04",
    title: "Day - II",
    desc: "",
  },
  {
    date: "2026-10-17",
    title: "Day - III",
    desc: "",
  },
  {
    date: "2026-10-25",
    title: "Day - IV",
    desc: "",
  },
];

export function TimelineSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <section id="timeline" className="flex  min-h-[812px] w-full flex-col relative overflow-clip items-center h-screen bg-[#0A1C38] pt-12">
      <div className="w-full max-w-[343px] md:max-w-[680px]">
        <BlurFade inView delay={0.25 * 2} className="z-[6]">
          <div className="flex flex-col gap-3">
            <h3 className="font-akira text-white  z-[6] text-[28px] md:text-[40px]  ">Timeline</h3>

            <div className="flex gap-2 h-1 ">
              <div className="w-12 h-full bg-[#faff22]"></div>
              <div className="w-4 h-full bg-[#0c7cfe]"></div>
              <div className="w-2 h-full bg-[#FF3B30]"></div>
            </div>
          </div>
        </BlurFade>

        <div ref={ref} className="relative w-full">
          <Motion.div style={{ scaleY: scrollYProgress }} className="absolute left-0 top-0 w-[4px] h-full bg-[#faff22]/30 origin-top " />

          <ul className="z-[7] mt-10 w-full  flex flex-col gap-14">
            {timeline.map((item, index) => {
              return (
                <div key={index} className="relative">
                  <div className="absolute -left-2.5 top-0 h-6 w-6 rotate-45">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="absolute inset-0">
                      <Motion.rect
                        x="1"
                        y="1"
                        width="22"
                        height="22"
                        fill="none"
                        stroke={index % 2 === 0 ? "#faff22" : "#0C7CFE"}
                        strokeWidth="1"
                        style={{
                          pathLength: scrollYProgress,
                        }}
                      />
                    </svg>

                    <div
                      className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 border-[3px] border-[#001735]"
                      style={{
                        backgroundColor: index % 2 === 0 ? "#faff22" : "#0C7CFE",
                      }}
                    />
                  </div>
                  <TimelineItem item={item} index={index} />
                </div>
              );
            })}
          </ul>
          <Image src={blueStarOutline} alt="star" className="absolute top-0 right-8 w-auto h-[24px] object-cover " />
        </div>
      </div>

      <Image src={yellowStar} alt="ornament" className="absolute top-4 right-4  w-[80px] h-auto " />
    </section>
  );
}
interface TimelineItemProps {
  date: string;
  title: string;
  desc: string;
}

interface TimelineItemComponentProps {
  item: TimelineItemProps;
  index: number;
}

function TimelineItem({ item, index }: TimelineItemComponentProps) {
  return (
    <Motion.div key={index} initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }} className="flex flex-col items-start  w-full flex-wrap  text-left ml-5">
      <div className="relative w-[126px] h-[31px] text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="126" height="31" className="absolute  z-0" viewBox="0 0 126 31" fill="">
          <path d="M8 0H125.56L117.56 30.5H0L8 0Z" fill="#faff22" />
        </svg>
        <span className=" text-[#001735] font-akira relative text-[8px]/[16.5px] z-[10] tracking-[2px]">
          {new Date(item.date).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
      <li className="text-[22px]/[33px] text-white [text-shadow:0_0_8px_#082B5C] font-akira relative ">{item.title}</li>
    </Motion.div>
  );
}
