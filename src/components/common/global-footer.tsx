"use client";
import Image from "next/image";
import Link from "next/link";

import LogoAetherion from "@/assets/logo/aetherion.png";
import LogoHIMARPL from "@/assets/logo/himarpl.svg";
import LogoUPI from "@/assets/logo/cibiru.svg";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { cn } from "@/lib/utils";

import { SiGmail, SiInstagram, SiTiktok, SiYoutube } from "@icons-pack/react-simple-icons";

export function GlobalFooter() {
  return (
    <footer className="bg-[#001735] w-full border-t-4 border-[#FAFF22]">
      <div className="w-full p-8">
        <div className="flex flex-col items-center gap-y-6">
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <Image src={LogoUPI} alt="Logo Kampus UPI di Cibiru" width={150} />
            <Image src={LogoHIMARPL} alt="Logo HIMARPL" width={200} />
            <Image src={LogoAetherion} alt="Logo Kabinet Aetherion" width={150} />
          </div>

          <div className="flex w-full flex-col justify-between gap-4 sm:flex-row">
            <SocialMediaLinks />
            <Alamat />

            <Pranala />

            <MediaPartner />
          </div>
        </div>

        <div className="mt-6 space-y-1 py-6 text-white">
          <p className="text-center font-montserrat text-sm leading-5 ">
            Passionally crafted by{" "}
            <Link href="https://github.com/Velxshi" target="_blank" className="font-trueno-bold font-semibold underline text-neutral-100">
              Bintang
            </Link>
            {", "}
            <Link href="https://www.instagram.com/IlyassaPutra-png" target="_blank" className="font-trueno-bold font-semibold underline text-neutral-100">
              Ilyassa
            </Link>{" "}
            <span className="font-trueno-bold font-semibold text-neutral-100">(As a UI/UX Designer)</span>. Supported by Department{" "}
            <a href="https://himarpl.org/be/kominfo" target="_blank" className="font-trueno-bold font-semibold hover:underline text-neutral-100" rel="noopener noreferrer">
              KOMINFO
            </a>
            .
          </p>
          <p className="text-center text-sm leading-5">&copy;2026 HIMARPL UPI, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialMediaLinks() {
  return (
    <ul className="flex w-full justify-between gap-2 sm:w-fit sm:flex-col">
      <li>
        <Link target="_blank" href={"mailto:himarpl@upi.edu"} className="relative social-link h-fit">
          <div className="absolute inset-0 z-[-1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="44" viewBox="0 0 76 44" fill="none">
              <path d="M0.719543 43.5L16.7195 0.5H74.7195L60.2195 43.5H0.719543Z" fill="#012551" stroke="#FAFF22" />
            </svg>
          </div>
          <SiGmail color="#FFFFFF" className="h-5 w-5" />
        </Link>
      </li>
      <li>
        <Link target="_blank" href={"https://instagram.com/himarpl"} className="relative social-link h-fit">
          <div className="absolute inset-0 z-[-1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="44" viewBox="0 0 76 44" fill="none">
              <path d="M0.719543 43.5L16.7195 0.5H74.7195L60.2195 43.5H0.719543Z" fill="#012551" stroke="#FAFF22" />
            </svg>
          </div>
          <SiInstagram color="#FFFFFF" className="h-5 w-5" />
        </Link>
      </li>
      <li>
        <Link target="_blank" href={"https://www.youtube.com/@himarplcibiru5901"} className="relative social-link h-fit">
          <div className="absolute inset-0 z-[-1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="44" viewBox="0 0 76 44" fill="none">
              <path d="M0.719543 43.5L16.7195 0.5H74.7195L60.2195 43.5H0.719543Z" fill="#012551" stroke="#FAFF22" />
            </svg>
          </div>
          <SiYoutube color="#FFFFFF" className="h-5 w-5" />
        </Link>
      </li>
      <li>
        <Link target="_blank" href={"https://www.tiktok.com/@himarpl"} className="relative social-link h-fit">
          <div className="absolute inset-0 z-[-1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="44" viewBox="0 0 76 44" fill="none">
              <path d="M0.719543 43.5L16.7195 0.5H74.7195L60.2195 43.5H0.719543Z" fill="#012551" stroke="#FAFF22" />
            </svg>
          </div>
          <SiTiktok color="#FFFFFF" className="h-5 w-5" />
        </Link>
      </li>
    </ul>
  );
}

function Alamat() {
  return (
    <div>
      <h4 className="scroll-m-20 font-trueno-bold text-lg text-[#FAFF22]">Alamat</h4>
      <p className="text-sm leading-4 text-white/50 sm:w-64 md:w-96">Ruang HIMARPL Gedung Sekretariat Jalan Raya Cibiru Km. 15 Bandung 40393</p>
    </div>
  );
}

function Pranala() {
  return (
    <div>
      <h4 className="scroll-m-20 font-trueno-bold text-white text-lg font-semibold tracking-wide">Pranala</h4>
      <ul className="space-y-1">
        <li className="overflow-hidden">
          <Link target="_blank" className="inline-block text-sm leading-4 text-white/50 hover:underline" href="https://himarpl.org">
            Himpunan Mahasiwa Rekayasa Perangkat Lunak
          </Link>
        </li>
        <li className="overflow-hidden">
          <Link target="_blank" className="inline-block text-sm leading-4 text-white/50 hover:underline" href="https://upi.edu/">
            Universitas Pendidikan Indonesia
          </Link>
        </li>
        <li className="overflow-hidden">
          <Link target="_blank" className="inline-block text-sm leading-4 text-white/50 hover:underline" href="https://rpl.upi.edu/">
            Rekayasa Perangkat Lunak UPI
          </Link>
        </li>
      </ul>
    </div>
  );
}

function MediaPartner() {
  return (
    <div>
      <h4 className="scroll-m-20 font-trueno-bold text-white text-lg font-semibold tracking-wide">Media Partner</h4>
      <ul className="space-y-1">
        <li className="overflow-hidden">
          <Link target="_blank" className="inline-block text-sm leading-4 text-white/50 hover:underline" href="https://www.instagram.com/stories/highlights/17995696175869075/">
            Syarat dan Ketentuan
          </Link>
        </li>
      </ul>
    </div>
  );
}
