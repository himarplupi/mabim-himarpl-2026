"use client";

import Link from "next/link";
import { GlitchText } from "@/components/ui/glitch-effects";

export default function NotFound() {
  return (
    <div className="bg-[#680000]  border border-[#FF0000]  shadow-[inset_0_0_37px_0_#FF0000] backdrop-blur-[56px] text-center flex  h-screen w-full flex-col items-center justify-center gap-y-6 relative overflow-hidden px-4">
      <GlitchText text="404" className="text-5xl font-akira text-white " />
      <p className="font-trueno-bold text-2xl text-white">Maaf, halaman yang Anda cari tidak ditemukan.</p>
      <Link href="/">
        <div className="bg-[#faff22] px-7 py-3 [clip-path:polygon(0_0,100%_0,100%_100%,10%_100%,0_70%)] hover:scale-105 transition-all duration-300 ease-in-out relative">
          <p className="font-trueno-regular text-[#001735] tracking-widest">Kembali ke Beranda</p>
        </div>
      </Link>
    </div>
  );
}
