"use client";
// import Image from "next/image";
// import orion from "@/assets/essai/orion.png";
// import omega from "@/assets/essai/omega.png";
// import { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { BlurFade } from "@/components/ui/blur-fade";

// const essay = [
//   {
//     id: "I",
//     img: orion,
//     title: "OTOMATISASI INDUSTRI DI MASA DEPAN DENGAN PENGGUNAAN AI",
//     desc: "Essay ini membahas penggunaan kecerdasan buatan dalam otomatisasi industri. Teksnya menjelaskan bagaimana AI meningkatkan efisiensi, kualitas, inovasi, dan keamanan proses produksi. Penulis juga menyoroti dampak pada tenaga kerja, risiko pengangguran, kesenjangan keterampilan, serta isu etika seperti bias dan privasi. Di sisi individu, teknologi memicu penurunan keterampilan dan tekanan mental. Essay ini menekankan perlunya pendidikan, pelatihan, dan regulasi agar AI tetap memberi manfaat bagi industri dan masyarakat.",
//     link: "https://drive.google.com/file/d/1C4NavjeIbBf4JC7hD-lvBmLAn1x6ema2/view",
//   },
//   {
//     id: "II",
//     img: omega,
//     title: "Kecerdasan Buatan dan Otomatisasi: Peluang Baru atau Ancaman Terselubung?",
//     desc: "Essay ini membahas peran kecerdasan buatan dalam otomatisasi industri. Teksnya menjelaskan bagaimana AI meningkatkan efisiensi, produktivitas, dan kualitas melalui sistem pintar seperti predictive maintenance, robot otonom, dan smart factory. Penulis menyoroti peluang baru untuk industri dan individu, termasuk munculnya pekerjaan berbasis teknologi. Namun, esai ini juga mengulas dampak negatif seperti pengangguran, kesenjangan keterampilan, ketergantungan teknologi, serta isu etika dan keamanan data. Esai menekankan pentingnya regulasi, pendidikan, serta penerapan nilai Pancasila agar pemanfaatan AI tetap adil dan bertanggung jawab.",
//     link: "https://drive.google.com/drive/folders/12YxIPp4cvd2iqwoqkmEW8qenB-5F7-4TAh22wZnrpMPDQNPgQmN1NBdvOy1wwyakvZbgLdjR",
//   },
// ];
export default function Essai() {
  // const [activeTab, setActiveTab] = useState(0);

  return (
    // <div className="w-full min-h-screen bg-[radial-gradient(circle_at_100%_40%,_#7226FF_0%,_#AC8FDB_100%)] text-white overflow-hidden relative md:py-[200px] py-[100px]">
    //   <div className="w-full items-center text-center flex flex-col  justify-center gap-16">
    //     <BlurFade inView delay={0.25 * 2}>
    //       <div className="w-[311px] md:w-[857px] z-[6]">
    //         <span className=" bg-gradient-to-r from-white/50 via-white to-white/50 bg-clip-text text-transparent font-ethno text-[34px]/[42.3px] md:text-[72px]/[80px]">
    //           Nominasi Essay <br /> Terbaik
    //         </span>
    //       </div>
    //     </BlurFade>

    //     <BlurFade inView delay={0.25 * 3}>
    //       <DetailEssay id={activeTab} />
    //     </BlurFade>

    //     <BlurFade inView delay={0.25 * 4} className="w-full mx-auto flex justify-center items-center">
    //       <div className="flex border border-white backdrop-blur-sm w-full max-w-[800px] max-sm:w-[343px] divide-x divide-white">
    //         {essay.map((item, idx) => (
    //           <div
    //             key={idx}
    //             className={`p-6 w-full cursor-pointer hover:[text-shadow:0_0_8px_#F3ECFF] transition-all duration-200 ${activeTab === idx ? "[text-shadow:0_0_8px_#F3ECFF] bg-white/30" : "bg-white/20"}`}
    //             onClick={() => setActiveTab(idx)}
    //           >
    //             <span className={` bg-gradient-to-r from-white/50 via-white to-white/50 bg-clip-text text-transparent font-ethno text-[24px]/[32px]`}>{item.id}</span>
    //           </div>
    //         ))}
    //       </div>
    //     </BlurFade>
    //   </div>
    // </div>

    <div>hi</div>
  );
}

// function DetailEssay({ id }: { id: number }) {
//   return (
//     <div className="flex md:flex-row flex-col items-start gap-12">
//       <Image src={essay[id].img} className="w-[343px] md:h-auto h-[343px] " alt="essay" />
//       <div className="flex flex-col gap-4 md:w-[400px] text-start w-[343px]">
//         <span className=" bg-gradient-to-r from-white/50 via-white to-white/50 bg-clip-text text-transparent font-ethno text-[34px]/[42.3px] md:text-[40px]/[50px]">{essay[id].title}</span>
//         <p className="font-montserrat text-xl text-justify">{essay[id].desc}</p>
//         <Link href={essay[id].link} target="_blank">
//           <Button title="Link Essay" classN="w-full" />
//         </Link>
//       </div>
//     </div>
//   );
// }
