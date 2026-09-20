"use client";
import Image from "next/image";
import { useScroll, motion as Motion } from "motion/react";
import { useRef } from "react";
import { BlurFade } from "../ui/blur-fade";
import yellowStar from "@/assets/ornaments/yellowStar.svg";
import blueStarOutline from "@/assets/ornaments/blueStarOutline.svg";
import { GlitchText } from "../ui/glitch-effects";

const timeline = [
  {
    date: "2026-09-27",
    title: "Technical Meeting",
    location: "Gedung Auditorium Bumi Siliwangi",
    place: "UPI Kampus Cibiru",
    showLocation: true,
  },
  {
    date: "2026-10-03",
    title: "Day - I",
    location: "Gedung Auditorium Bumi Siliwangi",
    place: "UPI Kampus Cibiru",
    showLocation: true,
  },
  {
    date: "2026-10-04",
    title: "Day - II",
    location: "Gedung Auditorium Bumi Siliwangi",
    place: "UPI Kampus Cibiru",
    showLocation: true,
  },
  {
    date: "2026-10-17",
    title: "Day - III",
    location: "Gedung Baru Lt. 1",
    place: "UPI Kampus Cibiru",
    showLocation: true,
  },
  {
    date: "2026-10-25",
    title: "Day - IV",
    location: "??",
    place: "??",
    showLocation: false,
  },
];

export function TimelineSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <section id="timeline" className="flex  min-h-[812px] w-full flex-col relative overflow-clip items-center h-fit bg-[#0A1C38] py-12">
      <div className="w-full max-w-[343px] md:max-w-[680px] lg:max-w-[900px] flex flex-col md:items-center">
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

        <div ref={ref} className="relative  mt-10 ">
          <Motion.div style={{ scaleY: scrollYProgress }} className="absolute left-0 top-0 w-[4px] h-full bg-[#faff22]/30 origin-top " />
          {/* <Motion.div style={{ scaleX: scrollXProgress }} className="absolute left-0 top-0 h-[4px] w-full bg-[#faff22]/30 origin-left md:block hidden" /> */}

          <ul className="z-[7] w-full  flex flex-col  gap-14">
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
  location: string;
  place: string;
  showLocation: boolean;
}

interface TimelineItemComponentProps {
  item: TimelineItemProps;
  index: number;
}

function TimelineItem({ item, index }: TimelineItemComponentProps) {
  return (
    <Motion.div key={index} initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }} className="flex flex-col items-start  w-full flex-wrap  text-left ml-8 gap-2">
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

      {item.showLocation ? (
        <div className="w-full max-sm:max-w-[300px] h-14 border-[3px] border-[#faff22] [clip-path:polygon(0_0,95%_0,100%_30%,100%_100%,0_100%)] flex items-center justify-between px-3">
          <div className="flex justify-center items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M5.56878 1.5L1.5 5.2558V21.5309L5.56878 25.9127H21.2179L25.9127 21.2179V5.2558L21.2179 1.5H5.56878Z" fill="#00377A" stroke="#FAFF22" strokeWidth="3" />

              <g transform="translate(11.5 9.5)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.8779 8.76352H3.12983V7.51159L3.7558 6.88563L4.38176 5.63369L5.00773 4.38176V3.12983V1.8779L4.38176 0.625966L3.7558 0H1.25193L0.625966 0.625966L0 1.8779V3.12983V4.38176L0.625966 5.63369L1.25193 6.88563L1.8779 7.51159V8.76352ZM1.8779 3.7558V1.8779H3.12983V3.7558H1.8779Z"
                  fill="#FAFF22"
                />
              </g>
            </svg>
            <div className="flex flex-col justify-between gap-1">
              <p className="font-trueno-regular text-[8px] sm:text-[10px]/[10px] text-[#FAFF22]">-- Lokasi</p>
              <h3 className="font-trueno-bold text-[8px] sm:text-[10px]/[10px] text-white">{item.location}</h3>
              <p className="font-trueno-regular text-[8px] sm:text-[10px]/[10px] text-white">{item.place}</p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="17" viewBox="0 0 27 17" fill="none">
            <path d="M0 1.5H26.5M26.5 8.5H6M11.5 15.5H26.5" stroke="#FAFF22" strokeWidth="3" />
          </svg>
        </div>
      ) : (
        <div className="w-full  max-sm:max-w-[300px] h-14 border-[3px] border-[#FF0000] bg-black [clip-path:polygon(0_0,95%_0,100%_30%,100%_100%,0_100%)] flex items-center justify-center gap-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="34" viewBox="0 0 29 34" fill="none">
            <path d="M2.76856 13.2222L1 14.9682V30.6825L2.76856 32.4285H25.7598L27.5284 30.6825V14.9682L25.7598 13.2222H2.76856Z" fill="#FF0000" fillOpacity="0.2" />
            <path d="M12.4956 27.1904V24.5714H11.6113V21.0793H12.4956V20.2063H16.0327V21.0793H16.917V24.5714H16.0327V27.1904H12.4956Z" fill="#FF0000" />
            <path d="M2.76856 13.2222L1 14.9682V30.6825L2.76856 32.4285H25.7598L27.5284 30.6825V14.9682L25.7598 13.2222H2.76856Z" stroke="#FF0000" strokeWidth="2" />
            <path d="M12.4956 27.1904V24.5714H11.6113V21.0793H12.4956V20.2063H16.0327V21.0793H16.917V24.5714H16.0327V27.1904H12.4956Z" stroke="#FF0000" strokeWidth="2" />
            <path d="M5.42139 7.98413V12.3492H22.2227V5.36508L21.3384 3.61905L19.5699 1.87302L17.8013 1H10.7271L8.07422 2.74603L7.18995 3.61905L6.30567 5.36508L5.42139 7.98413Z" stroke="#FF0000" strokeWidth="2" />
          </svg>

          <div className="flex flex-col justify-center gap-2">
            <GlitchText text="DIRAHASIAKAN" className="font-trueno-black text-[8px] sm:text-[12px]/[10px] text-[#ff0000] font-bold" />
            <p className="font-trueno-regular text-[8px] sm:text-[10px]/[10px] text-[#ff0000]">Lokasi akan diberitahu pada saatnya yakk!!</p>
          </div>
        </div>
      )}
    </Motion.div>
  );
}
