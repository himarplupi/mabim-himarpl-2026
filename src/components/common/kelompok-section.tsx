"use client";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import Gun from "@/assets/gun.svg";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/Dialog";
import { type GroupMabim, type Mentee } from "@/components/common/group-mabim";
import arrow from "@/assets/ornaments/arrow.svg";
// import { motion as Motion } from "motion/react";
import light from "@/assets/ornaments/light.svg";
import light2 from "@/assets/ornaments/light2.svg";
import redStar from "@/assets/ornaments/redStar.svg";
import Link from "next/link";
import { GlitchText } from "../ui/glitch-effects";
import { BlurFade } from "../ui/blur-fade";
import yellowStar from "@/assets/ornaments/yellowStar.svg";
import blueStarOutline from "@/assets/ornaments/blueStarOutline.svg";
import mentorCard from "@/assets/ornaments/mentorCard.svg";
import bgMentorCard from "@/assets/ornaments/bgMentorCard.svg";
import contactBtn from "@/assets/ornaments/contactBtn.svg";
import { Spinner } from "../ui/spinner";

export function KelompokSection() {
  const lenis = useLenis();
  const [nim, setNim] = useState("");
  const [mentee, setMentee] = useState<Mentee | undefined>();
  const [group, setGroup] = useState<GroupMabim | undefined>();
  const [isNotFound, setIsNotFound] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen || isNotFound) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [isOpen, isNotFound]);

  const handleSearch = async () => {
    const cleanNim = nim.toLowerCase().trim();
    // const currentGroup = groupMabim.find((group) => group.mentees.some((mentee) => mentee.nim.toLowerCase() === cleanNim || mentee.name.toLowerCase() === cleanNim));
    // if (currentGroup) {
    //   const currentMentee = currentGroup.mentees.find((mentee) => mentee.nim.toLowerCase() === cleanNim || mentee.name.toLowerCase() === cleanNim);
    //   setIsNotFound(false);
    //   setGroup(currentGroup);
    //   setMentee(currentMentee);
    //   setIsOpen(true);
    //   console.log(1);
    // } else {
    //   setIsNotFound(true);
    //   console.log(0);
    // }

    if (!cleanNim) {
      setIsNotFound(true);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/mabim/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: cleanNim,
        }),
      });

      if (!response.ok) {
        setIsNotFound(true);
        setGroup(undefined);
        setMentee(undefined);
        return;
      }

      const data = await response.json();

      setIsNotFound(false);
      setGroup(data.group);
      setMentee(data.mentee);
      setIsOpen(true);
    } catch (error) {
      console.error(error);
      setIsNotFound(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* {isLoading && (
        <div className="flex items-center justify-center w-full h-full bg-black/50 absolute inset-0 z-[20]">
          <Spinner className="text-white scale-150" />
        </div>
      )} */}

      <section id="kelompok" className=" flex max-h-[600px] h-screen w-full flex-col items-center  relative overflow-hidden bg-[#0A1C38] pt-32 [clip-path:polygon(100%_0,100%_0,100%_100%,0%_100%,0_15%)]">
        <div className="w-full max-w-[343px] md:max-w-[680px] lg:max-w-[900px]">
          <BlurFade delay={0.25 * 2} inView className="z-[6]">
            <div className="relative flex flex-col gap-6 z-[6] mb-7">
              <div className="w-[311px] md:w-[679px] z-[6] relative">
                <div className="w-full h-fit relative">
                  <span className=" text-white font-akira text-[34px]/[42.3px] md:text-[40px]/[48px]">
                    Temukan Kelompok <span className="text-[#0C7CFE]">MABIM</span>
                    <span className="text-[#faff22]">mu</span>
                  </span>
                  <div className="z-[-1] rounded-full w-[48px] h-[48px] bg-[#faff22]/20 absolute -right-4 top-[35%]"></div>
                </div>

                <div className="flex gap-2 h-1 mt-3">
                  <div className="w-12 h-full bg-[#faff22]"></div>
                  <div className="w-4 h-full bg-[#0c7cfe]"></div>
                  <div className="w-2 h-full bg-[#FF3B30]"></div>
                </div>
                <p className="z-[6] font-trueno-regular text-white/50 md:text-xl mt-10">Cari dengan menuliskan NIM atau Nama kamu!</p>
                <Image src={blueStarOutline} alt="star" className="absolute -top-1 left-40 w-auto h-[28px] object-cover z-[-1]" />
              </div>

              <div className="w-full  h-fit border-3   border-[#faff22] [clip-path:polygon(0_0,93%_0,100%_17%,100%_100%,0_100%)] flex flex-col items-start justify-between p-6 gap-5">
                <div className="flex items-center gap-3">
                  <Image src={arrow} alt="ornament" className="w-[26px] h-[26px] object-cover" />
                  <p className="font-akira text-[#faff22] text-[12px] tracking-[2.64px]">Cari Kelompokmu</p>
                </div>

                <div className="w-full flex items-center justify-between">
                  <div className="z-[6] bg-[#012551] gap-[-8px] w-[70%]  py-3 px-4 border-[#008FFF]/35 border-2 flex items-center">
                    <input
                      type="text"
                      placeholder="Ketik disini..."
                      value={nim}
                      onChange={(e) => setNim(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          if (nim.length > 0) {
                            handleSearch();
                          }
                        }
                      }}
                      className="w-full outline-0 font-trueno-regular  text-[12px] placeholder:text-white/50 text-white md:text-xl"
                    />
                  </div>

                  <button
                    disabled={isLoading || !nim}
                    onClick={handleSearch}
                    className="disabled:cursor-not-allowed disabled:opacity-50 bg-[#faff22] px-5 py-3 [clip-path:polygon(0_0,85%_0,100%_20%,100%_100%,0_100%)] hover:scale-105 transition-all duration-300 ease-in-out relative w-[25%] h-full  justify-center gap-6 flex items-center"
                  >
                    {isLoading && <Spinner className="text-[#001735] scale-105" />}
                    <p className="font-trueno-regular text-[#001735] tracking-widest">Cari</p>
                  </button>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
        <Dialog open={isNotFound} onOpenChange={setIsNotFound}>
          <DialogContent tabIndex={-1} className="border-4 border-[#FF0000] bg-[#FF0000] py-2 [clip-path:polygon(0_0,90%_0,100%_10%,100%_100%,0_100%)]">
            <DialogTitle className="font-akira text-center p-6 w-full flex items-center justify-center gap-8">
              <div className="w-14 h-14 bg-white rotate-45 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16" fill="none" className="-rotate-45">
                  <path d="M0 0H4V11.5H0V0Z" fill="#FF0000" />
                  <path d="M0 16V13H4V16H0Z" fill="#FF0000" />
                </svg>
              </div>
              <span className="text-3xl md:text-[55px] text-white">Error</span>
            </DialogTitle>

            <div className="text-center p-6 flex flex-col justify-between items-center relative w-full bg-black text-white md:text-3xl text-base uppercase gap-8 ">
              <div className="flex gap-3 items-center justify-between w-full">
                <Image src={light} alt="ornament" className="min-w-0 flex-1 h-auto" />
                <Image src={redStar} alt="ornament" className="w-[14px] h-[14px]" />
                <Image src={redStar} alt="ornament" className="w-[8px] h-[8px]" />
                <Image src={redStar} alt="ornament" className="w-[14px] h-[14px]" />
                <Image src={light} alt="ornament" className="min-w-0 h-auto flex-1 rotate-180" />
              </div>
              <span className="font-trueno-bold ">
                NIM/Nama yang kamu masukkan <span className="text-[#ff0000] tracking-[2.55px]">salah!</span> Harap masukkan NIM/Nama yang benar dan lengkap.
              </span>

              <span className=" relative flex justify-between w-full items-center gap-2">
                <Image src={light2} alt="ornament" className="min-w-0 flex-1 h-auto" />
                <GlitchText text="Anonymous" className="font-akira text-[#ff0000]" />
                <Image src={light2} alt="ornament" className="min-w-0 flex-1 h-auto rotate-180" />
              </span>

              <div className="border-t-[3px] border-l-[3px] border-[#ff0000] absolute top-2 left-2 w-4 h-4"></div>
              <div className="border-t-[3px] border-l-[3px] border-[#ff0000] absolute top-2 right-2 w-4 h-4 rotate-90"></div>
              <div className="border-t-[3px] border-l-[3px] border-[#ff0000] absolute bottom-2 right-2 w-4 h-4 rotate-180"></div>
              <div className="border-t-[3px] border-l-[3px] border-[#ff0000] absolute bottom-2 left-2 w-4 h-4 -rotate-90"></div>
            </div>

            <DialogDescription className="font-mono text-center py-6 bg-[#680000]/40 w-full border border-[#FF0000] relative shadow-[inset_0_0_37px_0_#FF0000] backdrop-blur-[56px]" hidden>
              im mysterious
            </DialogDescription>
          </DialogContent>
        </Dialog>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent tabIndex={-1} className="w-[343px] sm:w-[351px] lg:scale-110">
            <Image src={mentorCard} alt="ornament" className="z-[9] w-[343px] h-auto sm:w-[351px] sm:h-[545px]" />
            <div className="absolute w-[351px] h-[545px] z-10">
              <div className="absolute top-[50px] left-[152px] rotate-[-11deg] ">
                <span className="font-montserrat text-[15px]  z-10  text-white font-bold ">{`Group ${group?.id}`}</span>
              </div>

              <div className="absolute top-[340px] sm:top-[350px] left-12">
                <span className="font-trueno-bold text-[20px] text-[#faff22] drop-shadow-[0_-1px_2.6px_#298CFE] absolute z-10 ">{group?.name}</span>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 top-[115px] text-center">
                <span className="font-trueno-bold text-white    text-[8px] uppercase">
                  {mentee?.id} {mentee?.name}
                </span>
              </div>
              <p className="font-trueno-bold text-2xl break-words absolute sm:bottom-[105px] bottom-[115px] left-[52px] text-white">{group?.mentor.name}</p>
              <div className="absolute sm:top-[360.5px] top-[352px] sm:right-[130.5px] right-[130px] w-[18px] h-[18px] flex items-center justify-center">
                <Image src={Gun} alt={"Gun"} className=" w-auto h-auto  z-10" />
              </div>
              <div className="absolute sm:top-[360.5px] top-[352px] sm:right-[103.5px] right-[105px] w-[18px] h-[18px] flex items-center justify-center">
                <p className="font-montserrat text-white text-[12px] font-medium ">{group?.mentor.metadata.stats}</p>
              </div>
              <div className="absolute sm:top-[360.5px] top-[352px] sm:right-[38px] right-[41px] w-[57px] h-[18px]  flex items-center justify-center flex-wrap ">
                <p className="font-montserrat text-white  text-[8px]/[8px] font-medium wrap-break-word text-center ">{group?.mentor.metadata.skill}</p>
              </div>

              <p className="font-trueno-bold text-2xl break-words absolute sm:bottom-[105px] bottom-[115px] left-[52px] text-white">{group?.mentor.name}</p>

              <Link href={`https://wa.me/${group?.mentor.phone}`} target="_blank" className="absolute right-10 sm:bottom-[102px] bottom-[112px]">
                <Image src={contactBtn} alt={"btn"} className="w-auto h-auto hover:scale-105 hover:-rotate-6 duration-500 transition-all ease-in-out" />
              </Link>

              <div className="absolute sm:bottom-[20px] bottom-[30px] left-1/2 -translate-x-1/2 w-[296px] h-[63px] flex items-center justify-center flex-wrap">
                <p className="font-trueno-regular text-white text-[10px]/[10px] wrap-break-word  text-center ">{group?.mentor.metadata.description}</p>
              </div>
            </div>
            <div className="absolute w-[351px] h-[545px] z-[8] ">
              {isLoading && <Spinner className="text-white scale-110 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />}

              {group?.mentor?.image && (
                <Image src={group?.mentor?.image} alt={group?.mentor?.name} className="h-[280px] w-auto object-scale-down object-bottom drop-shadow-[0_0_30px_rgba(1,109,237)] absolute top-[68px] left-1/2 -translate-x-1/2 " />
              )}
            </div>
            <div className="absolute w-[351px] h-[545px] z-[7]">
              <Image src={bgMentorCard} alt="ornament" className="" width={351} height={545} />
            </div>

            <DialogTitle hidden>sst</DialogTitle>
          </DialogContent>
        </Dialog>

        <Image src={yellowStar} alt="star" className="absolute top-10 -right-7 w-auto h-[120px] object-cover z-[-1]" />
        <Image src={yellowStar} alt="star" className="absolute bottom-5 left-2 w-auto h-[46px] object-cover z-[-1]" />
      </section>
    </>
  );
}
