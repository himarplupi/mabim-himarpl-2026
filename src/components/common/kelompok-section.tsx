"use client";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import Gun from "@/assets/gun.svg";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/Dialog";
import { type GroupMabim, groupMabim, type Mentee } from "@/components/common/group-mabim";
import arrow from "@/assets/ornaments/arrow.svg";
import { motion as Motion } from "motion/react";

import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { GlitchText } from "../ui/glitch-effects";
import { BlurFade } from "../ui/blur-fade";
import yellowStar from "@/assets/ornaments/yellowStar.svg";
import blueStarOutline from "@/assets/ornaments/blueStarOutline.svg";

export function KelompokSection() {
  const lenis = useLenis();
  const [nim, setNim] = useState("");
  const [mentee, setMentee] = useState<Mentee | undefined>();
  const [group, setGroup] = useState<GroupMabim | undefined>();
  const [isNotFound, setIsNotFound] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen || isNotFound) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [isOpen, isNotFound]);

  const handleSearch = () => {
    const cleanNim = nim.toLowerCase().trim();
    const currentGroup = groupMabim.find((group) => group.mentees.some((mentee) => mentee.nim.toLowerCase() === cleanNim));
    if (currentGroup) {
      const currentMentee = currentGroup.mentees.find((mentee) => mentee.nim.toLowerCase() === cleanNim);
      setIsNotFound(false);
      setGroup(currentGroup);
      setMentee(currentMentee);
      setIsOpen(true);
      console.log(1);
    } else {
      setIsNotFound(true);
      console.log(0);
    }
  };

  return (
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
              <p className="z-[6] font-trueno-regular text-white/50 md:text-xl mt-10">Cari dengan menuliskan NIM kamu!</p>
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

                <button disabled={nim.length === 0} onClick={handleSearch} className="w-[25%]">
                  <div className="bg-[#faff22] px-5 py-3 [clip-path:polygon(0_0,85%_0,100%_20%,100%_100%,0_100%)] hover:scale-105 transition-all duration-300 ease-in-out relative w-full h-full">
                    <p className="font-trueno-regular text-[#001735] tracking-widest">Cari</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
      <Dialog open={isNotFound} onOpenChange={setIsNotFound}>
        <DialogContent tabIndex={-1} className="">
          <DialogTitle className="font-ethno text-center py-6 bg-[#680000]/40 w-full border border-[#FF0000] relative shadow-[inset_0_0_37px_0_#FF0000] backdrop-blur-[56px] ">
            <span className="bg-radial-[at_50%_50%] from-white to-[#B90808] bg-clip-text text-transparent text-2xl md:text-[55px]">Error</span>

            <Motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute bg-[#A11515] md:w-9 md:h-9 w-4 h-4 md:top-6 md:left-12 top-3 left-5"
            ></Motion.div>
            <Motion.div
              animate={{ x: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute bg-[#702929] md:w-[55px] w-6 h-6 md:h-[55px] md:bottom-3 md:left-32 bottom-1.5 left-14"
            ></Motion.div>
            <Motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute bg-[#790000] md:w-8 md:h-8 w-3 h-3 md:top-4 md:left-[238px] top-[7px] left-[102px]"
            ></Motion.div>
            <Motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute bg-[#C60000] md:w-12 md:h-0.5 w-5 h-[1px] m:top-5 md:left-64 top-2 left-[109px]"
            ></Motion.div>
            <Motion.div
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute bg-[#C74343] md:w-5 md:h-5 w-2 h-2 md:bottom-2 md:left-80 bottom-1 left-[137px]"
            ></Motion.div>
            <Motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute bg-[#721717] md:w-16 md:h-16 w-7 h-7  md:top-3 md:right-10 top-2 right-[18px]"
            ></Motion.div>
            <Motion.div
              animate={{ x: [0, 7, 0] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute bg-[#E60808] md:w-[72px] w-8 h-0.5 md:top-11 md:right-[79px] top-5 right-8"
            ></Motion.div>
          </DialogTitle>

          <div className="my-9 text-center p-6 flex flex-col justify-between bg-[#680000]/40 w-full border border-[#FF0000]  shadow-[inset_0_0_37px_0_#FF0000] backdrop-blur-[56px] text-white md:text-3xl text-base uppercase gap-8">
            <span className="font-montserrat  relative">
              Nama yang kamu masukkan salah! harap masukkan nama yang benar dengan nama lengkap.
              <span className="absolute inset-0 text-red-500 blur-sm  mix-blend-multiply">Nama yang kamu masukkan salah! harap masukkan nama yang benar dengan nama lengkap.</span>
            </span>

            <span className="font-jumbo relative">
              <GlitchText text="- Anonymous -" className="font-jumbo" />
            </span>
          </div>

          <DialogDescription className="font-mono text-center py-6 bg-[#680000]/40 w-full border border-[#FF0000] relative shadow-[inset_0_0_37px_0_#FF0000] backdrop-blur-[56px]" hidden>
            im mysterious
          </DialogDescription>
          <span className="text-white md:text-base text-sm [text-shadow:0_0_8px_#680000]">Tekan di bagian yang kosong untuk menutup</span>
        </DialogContent>
      </Dialog>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          tabIndex={-1}
          className="bg-[radial-gradient(circle_at_center_bottom,_#8166e3_0%,_rgba(1,0,48,0.4)_100%)]   overflow-hidden py-7 border border-[#8166E3] md:px-0 px-6 backdrop-blur-[150px] h-full shadow-[0_0_150px_rgba(172,143,219,0.4)]"
        >
          <DialogTitle hidden>sst</DialogTitle>
          <DialogDescription hidden>im mysterious</DialogDescription>
          <div className="flex w-full flex-col items-center justify-center text-center text-white">
            <span className="font-ethno text-[21px]">{`Group ${group?.id}`}</span>
            <span className="font-montserrat font-medium">{group?.name}</span>
            <span className="font-montserrat font-bold">
              {mentee?.id} - {mentee?.name}
            </span>
          </div>

          <div className="relative max-w-[688px] mb-6 w-full h-full border-r border-l border-[#B789FF]">
            <div className="absolute -bottom-32 left-0 right-0 -z-10 flex justify-center">
              {group?.mentor?.image && <Image src={group?.mentor?.image} alt={group?.mentor?.name} className="h-[550px] w-full object-scale-down object-bottom drop-shadow-[0_0_30px_rgba(114,38,255)]" />}
            </div>
          </div>
          <div className="bg-[linear-gradient(60deg,rgba(1,0,48,0.8)0%,rgba(2,0,99,0.6)50%,rgba(1,0,48,0.8)100%)] border border-[#B789FF] max-w-[688px] w-full flex flex-col gap-5  md:p-6 p-2 backdrop-blur-[73px]">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between h-[52px] gap-4">
                <div className="flex flex-col gap-2 ">
                  <p className="font-ethno bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent text-[14px] break-words">{group?.mentor.name}</p>
                  <div className="flex gap-2">
                    <div className="border border-[#AC8FDB] bg-radial from-[#7226FF] to-[#010030] p-0.5 w-[18px] h-[18px]">
                      <Image src={Gun} alt={"Gun"} />
                    </div>
                    <div className="border border-[#AC8FDB] bg-radial from-[#7226FF] to-[#010030] w-[18px] h-[18px] flex items-center justify-center">
                      <p className="font-montserrat text-white text-[12px] font-medium">{group?.mentor.metadata.stats}</p>
                    </div>
                    <div className="border border-[#AC8FDB] bg-radial from-[#7226FF] to-[#010030] px-[6px] h-[18px] flex items-center justify-center">
                      <p className="font-montserrat text-white md:text-[12px] text-[8px] font-medium whitespace-nowrap">{group?.mentor.metadata.skill}</p>
                    </div>
                  </div>
                </div>

                <Link
                  href={`https://wa.me/${group?.mentor.phone}`}
                  target="_blank"
                  className="flex-grow h-full max-h-[52px] bg-[linear-gradient(90deg,rgba(1,0,48,0.8)0%,rgba(2,0,99,0.6)50%,rgba(1,0,48,0.8)100%)] border border-[#AC8FDB] flex items-center justify-center p-1.5 gap-1.5"
                >
                  <SiWhatsapp className="w-6 h-6" color="#FFFFFF" />
                  <span className="font-montserrat bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent font-bold">Contact</span>
                </Link>
              </div>
            </div>

            <p className="font-montserrat text-white md:text-base text-[12px]">{group?.mentor.metadata.description}</p>
          </div>
        </DialogContent>
      </Dialog>

      <Image src={yellowStar} alt="star" className="absolute top-10 -right-7 w-auto h-[120px] object-cover z-[-1]" />
      <Image src={yellowStar} alt="star" className="absolute bottom-5 left-2 w-auto h-[46px] object-cover z-[-1]" />
    </section>
  );
}
