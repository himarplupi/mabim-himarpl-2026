"use client";
// import Image from "next/image";
// import day1_1 from "@/assets/day1/d1_1.jpg";
// import day1_2 from "@/assets/day1/d1_2.jpg";
// import day1_3 from "@/assets/day1/d1_3.jpg";
// import day1_4 from "@/assets/day1/d1_4.jpg";
// import day2_1 from "@/assets/day2/d2_1.jpg";
// import day2_2 from "@/assets/day2/d2_2.jpg";
// import day2_3 from "@/assets/day2/d2_3.jpg";
// import day2_4 from "@/assets/day2/d2_4.jpg";
// import day3_1 from "@/assets/day3/d3_1.jpg";
// import day3_2 from "@/assets/day3/d3_2.jpg";
// import day3_3 from "@/assets/day3/d3_3.jpg";
// import day3_4 from "@/assets/day3/d3_4.jpg";
// import day4_1 from "@/assets/day4/d4_1.jpg";
// import day4_2 from "@/assets/day4/d4_2.jpg";
// import day4_3 from "@/assets/day4/d4_3.jpg";
// import day4_4 from "@/assets/day4/d4_4.jpg";
// import wink from "@/assets/mascots/smile3.svg";
// import shield from "@/assets/mascots/shield.svg";
// import dokumSvg from "@/assets/ornaments/dokumentasi.svg";
// import logo from "@/app/icon.svg";
// import { BlurFade } from "@/components/ui/blur-fade";
// import { useRouter } from "next/navigation";

export default function Docum() {
  return <h1>hai</h1>;
}

// export default function Docum() {
//   const router = useRouter();

//   const dokum = [
//     {
//       day: "DAY-I",
//       images: [{ src: day1_1 }, { src: day1_2 }, { src: day1_3 }, { src: day1_4 }],
//     },
//     {
//       day: "DAY-II",
//       images: [{ src: day2_1 }, { src: day2_2 }, { src: day2_3 }, { src: day2_4 }],
//     },
//     {
//       day: "DAY-III",
//       images: [{ src: day3_1 }, { src: day3_2 }, { src: day3_3 }, { src: day3_4 }],
//     },
//     {
//       day: "DAY-IV",
//       images: [{ src: day4_1 }, { src: day4_2 }, { src: day4_3 }, { src: day4_4 }],
//     },
//   ];

//   return (
//     <div className="w-full min-h-screen bg-[radial-gradient(circle_at_215%_40%,_#3243A6_0%,_#010030_100%)] text-white overflow-hidden relative">
//       <Image src={dokumSvg} alt="ornaments" className="select-none w-full inset-0 absolute" />
//       <Image src={logo} alt="logo" className="cursor-pointer w-[14%]  absolute left-[43%] top-[1%] z-10 drop-shadow-[0_0_30px_rgba(114,38,255)]" onClick={() => router.push("/")} />
//       <Image src={wink} alt="wink" className="select-none absolute -left-[10%] lg:-top-[2%] md:-top-[1%]  w-1/3 object-cover object-center scale-125" />
//       <Image src={shield} alt="shield" className="select-none absolute -right-[5%] lg:-top-[2%] md:-top-[1%]  w-1/5 object-cover object-center -rotate-12" />
//       <BlurFade delay={0.25} inView>
//         <h1 className="text-center md:pt-64 pt-20">
//           <span className="bg-gradient-to-r from-white/50 via-white to-white/50 bg-clip-text text-transparent font-ethno lg:text-7xl md:text-6xl  text-center text-2xl ">
//             dokumentasi <br /> mabim rpl 2025
//           </span>
//         </h1>
//       </BlurFade>

//       <div className="md:mt-36 mt-20 flex flex-col gap-7 w-full ">
//         {dokum.map((item, index) => (
//           <BlurFade delay={0.25} inView key={index}>
//             <div className="flex flex-col md:gap-12 gap-3">
//               <div className="bg-[linear-gradient(to_right,_#7226FF_0%,_rgba(114,38,255,0)_100%)] flex items-center md:px-16 px-5 md:py-7 py-1 w-[66%]">
//                 <span className="bg-gradient-to-r from-white/50 via-white to-white/50 bg-clip-text text-transparent font-jumbo lg:text-6xl md:text-5xl text-2xl">{item.day}</span>
//               </div>

//               <div className="md:px-16 px-5 flex justify-between items-start relative">
//                 <div className="w-4 h-4 bg-[#AC8FDB]/50 top-0 right-1/5 border-red-500 absolute"></div>
//                 <div className="w-4 h-4 bg-white/50 top-2 right-2/12 border-red-500 absolute"></div>
//                 <div className="w-4 h-4 bg-[#AC8FDB]/50 top-1/2 right-[3%] border-red-500 absolute"></div>

//                 <div
//                   className="md:w-[695.2px] w-[180px]  relative"
//                   style={{
//                     WebkitMaskImage: "url('/assets/Foto.svg')",
//                     WebkitMaskRepeat: "no-repeat",
//                     WebkitMaskSize: "contain",
//                     WebkitMaskPosition: "center",
//                     backgroundColor: "#8B5CF6",
//                   }}
//                 >
//                   <Image src={item.images[0].src} alt="temp" className="w-full h-full -z-10 object-cover" />
//                   <div className="absolute inset-0 bg-center bg-contain bg-no-repeat pointer-events-none" style={{ backgroundImage: "url('/assets/Frame.svg')" }} />
//                 </div>
//                 <div
//                   className="md:w-[541.6px] w-[140px]  relative"
//                   style={{
//                     WebkitMaskImage: "url('/assets/Foto.svg')",
//                     WebkitMaskRepeat: "no-repeat",
//                     WebkitMaskSize: "contain",
//                     WebkitMaskPosition: "center",
//                     backgroundColor: "#8B5CF6",
//                   }}
//                 >
//                   <Image src={item.images[1].src} alt="temp" className="w-full h-full -z-10 object-cover" />
//                   <div className="absolute inset-0 bg-center bg-contain bg-no-repeat pointer-events-none" style={{ backgroundImage: "url('/assets/Frame.svg')" }} />
//                 </div>
//               </div>
//               <div className="md:px-16 px-5 flex justify-between items-start relative">
//                 <div className="w-4 h-4 bg-[#AC8FDB]/50 bottom-0 left-1/5 border-red-500 absolute"></div>
//                 <div className="w-4 h-4 bg-white/50 bottom-2 left-2/12 border-red-500 absolute"></div>
//                 <div className="w-4 h-4 bg-[#AC8FDB]/50 bottom-1/12 left-1/12 border-red-500 absolute"></div>
//                 <div className="w-4 h-4 bg-white/50 bottom-[80%] left-[40%] border-red-500 absolute"></div>
//                 <div
//                   className="md:w-[541.6px] w-[140px]  relative"
//                   style={{
//                     WebkitMaskImage: "url('/assets/Foto.svg')",
//                     WebkitMaskRepeat: "no-repeat",
//                     WebkitMaskSize: "contain",
//                     WebkitMaskPosition: "center",
//                     backgroundColor: "#8B5CF6",
//                   }}
//                 >
//                   <Image src={item.images[2].src} alt="temp" className="w-full h-full -z-10 object-cover" />
//                   <div className="absolute inset-0 bg-center bg-contain bg-no-repeat pointer-events-none" style={{ backgroundImage: "url('/assets/Frame.svg')" }} />
//                 </div>
//                 <div
//                   className="md:w-[695.2px] w-[180px]  relative"
//                   style={{
//                     WebkitMaskImage: "url('/assets/Foto.svg')",
//                     WebkitMaskRepeat: "no-repeat",
//                     WebkitMaskSize: "contain",
//                     WebkitMaskPosition: "center",
//                     backgroundColor: "#8B5CF6",
//                   }}
//                 >
//                   <Image src={item.images[3].src} alt="temp" className="w-full h-full -z-10 object-cover" />
//                   <div className="absolute inset-0 bg-center bg-contain bg-no-repeat pointer-events-none" style={{ backgroundImage: "url('/assets/Frame.svg')" }} />
//                 </div>
//               </div>
//             </div>
//           </BlurFade>
//         ))}
//       </div>

//       <div className="w-full relative">
//         <h3 className="font-jumbo text-center absolute top-1/2 left-1/2 -translate-x-1/2 z-10">
//           <span className=" bg-gradient-to-r from-white/50 via-white to-white/50 bg-clip-text text-transparent lg:text-4xl md:text-3xl  text-sm">MABIM RPL 2025</span>
//         </h3>
//         <Image src={dokumSvg} alt="ornaments" className="select-none w-full bottom-0  rotate-180" />
//       </div>
//     </div>
//   );
// }
