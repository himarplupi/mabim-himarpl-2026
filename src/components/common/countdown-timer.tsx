"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";
import Image from "next/image";
import yellowStar from "@/assets/ornaments/yellowStar.svg";
import blueSquare from "@/assets/ornaments/blueSquare.svg";

const events = [
  { label: "TM", short: "TM", date: "2026-09-26" },
  { label: "Day 1", short: "D-I", date: "2026-10-03" },
  { label: "Day 2", short: "D-II", date: "2026-10-04" },
  { label: "Day 3", short: "D-III", date: "2026-10-17" },
  { label: "Day 4", short: "D-IV", date: "0000-00-00" },
];

export default function CountdownTimerTabs() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="flex flex-col items-center w-full">
      <div className="flex justify-center md:gap-2 mb-6 w-full  border-[3px] border-[#faff22]  overflow-x-scroll scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {events.map((event, idx) => (
          <button
            key={event.label}
            onClick={() => setActiveTab(idx)}
            className={`relative min-w-[70px] font-akira tracking-[1.5px] md:min-w-[100px] flex items-center w-full justify-center px-1 md:px-4 py-2 font-bold text-[12px] md:text-base  transition-all duration-300 border-none outline-none cursor-pointer focus:outline-none ${activeTab === idx ? "bg-[#FAFF22] text-[#001735]" : "bg-transparent text-[#E5E5E5]"}`}
          >
            <span className="">{event.short}</span>
          </button>
        ))}
      </div>
      <CountdownTimer targetDate={events[activeTab].date} />
    </section>
  );
}

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (typeof days === "undefined" || typeof hours === "undefined" || typeof minutes === "undefined" || typeof seconds === "undefined") {
      return;
    }
    const countdown = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
    setIsExpired(countdown <= 0);
  }, [days, hours, minutes, seconds]);

  return (
    <Motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 120, damping: 12 }} className="flex items-center justify-center w-full">
      <div className="w-full flex items-center justify-center ">{isExpired ? <ExpiredNotice /> : <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />}</div>
    </Motion.div>
  );
}

function ExpiredNotice() {
  return (
    <div className="flex flex-col items-center justify-center gap-7 w-full">
      <div className="w-full max-w-[343px] md:max-w-[680px] overflow-visible flex items-center justify-center gap-2 mt-8">
        <div className="bg-[#FFF200]/30 h-[1px] w-full"></div>
        <Image src={yellowStar} alt="star" className=" w-[18px] h-[18px]" />
        <Image src={blueSquare} alt="ornament" className="w-[10px] h-[10px]" />

        <Image src={yellowStar} alt="star" className=" w-[18px] h-[18px]" />

        <div className="bg-[#FFF200]/30 h-[1px] w-full"></div>
      </div>
      <div className=" py-4 px-5 relative ">
        {/* <div className="absolute left-0 top-0 h-[6px] w-full bg-[#faff22] [clip-path:polygon(10%_0,100%_0,100%_100%,6%_100%)]" /> */}
        <div className="absolute left-0 top-0 h-[6px] w-full bg-[#FFFF00] [clip-path:polygon(4%_0,100%_0,100%_100%,3%_100%)]" />

        <p className="text-[10px] md:text-2xl text-[#faff22] font-trueno-bold tracking-[2.3px] uppercase">Event Telah Selesai</p>
        <div className="absolute bottom-0 left-0 h-[6px] w-full bg-[#faff22] [clip-path:polygon(0_0,97%_0,96%_100%,0%_100%)]" />
      </div>
    </div>
  );
}

function ShowCounter({ days, hours, minutes, seconds }: { days?: number; hours?: number; minutes?: number; seconds?: number }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }
  return (
    <div className="flex items-center justify-center gap-0 md:gap-2 w-[360px]">
      <DateTimeDisplay value={days} type="Hari" />
      <Separator />
      <DateTimeDisplay value={hours} type="Jam" />
      <Separator />
      <DateTimeDisplay value={minutes} type="Menit" />
      <Separator />
      <DateTimeDisplay value={seconds} type="Detik" />
    </div>
  );
}

function Separator() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 md:gap-3 h-20 w-6 md:h-28 md:w-10 lg:h-36 lg:w-14">
      <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#2F6FFA]" />
      <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#2F6FFA]" />
    </div>
  );
}

function CornerBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-[#082B5C]/50">
      <span className="absolute top-0 left-0 w-4 h-4 md:w-6 md:h-6 border-t-[3px] border-l-[3px] border-[#FAFF22]" />
      <span className="absolute top-0 right-0 w-4 h-4 md:w-6 md:h-6 border-t-[3px] border-r-[3px] border-[#FAFF22]" />
      <span className="absolute bottom-0 left-0 w-4 h-4 md:w-6 md:h-6 border-b-[3px] border-l-[3px] border-[#2F6FFA]" />
      <span className="absolute bottom-0 right-0 w-4 h-4 md:w-6 md:h-6 border-b-[3px] border-r-[3px] border-[#2F6FFA]" />
      {children}
    </div>
  );
}

function DateTimeDisplay({ value, type }: { value?: number; type: string }) {
  const displayValue = (value ?? 0) < 10 ? `0${value}` : `${value}`;

  return (
    <div className="flex flex-col items-center justify-center gap-2 w-16 md:w-24 ">
      <CornerBox>
        <AnimatePresence mode="popLayout">
          <Motion.span
            key={displayValue}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className=" font-bold text-4xl md:text-5xl lg:text-8xl text-white font-trueno-regular text-shadow-[4px_4px_0_#082B5C]"
          >
            {displayValue}
          </Motion.span>
        </AnimatePresence>
      </CornerBox>
      <span className="font-akira text-base md:text-lg lg:text-xl lowercase opacity-80 text-[#0C7CFE] tracking-[2.8px]">{type}</span>
    </div>
  );
}

function useCountdown(targetDate: string | number | Date) {
  const [countDownDate, setCountDownDate] = useState(new Date(targetDate).getTime());
  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    setCountDownDate(new Date(targetDate).getTime());
  }, [targetDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
}

function getReturnValues(countDown: number) {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return [days, hours, minutes, seconds];
}
