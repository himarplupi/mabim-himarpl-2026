"use client";
import Link from "next/link";
import { useLenis } from "lenis/react";

import { cn } from "@/lib/utils";
const navLinks = [
  {
    name: "Lihat Kelompok",
    href: "#kelompok",
  },
  {
    name: "Timeline",
    href: "#timeline",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
  {
    name: "Surat Keterangan Izin",
    href: "https://docs.google.com/document/d/1ZQcpYvlMMY3JObpKlnE2vJZE8YBpCigZUD7OzaJzrs0/edit?usp=drive_link",
  },
  {
    name: "Form Pelaporan Panitia",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfq4MFEM7p-hzPGVtOxCCNzZR3K8CHeCRzxztKDRNpO_djCxw/viewform",
  },
  {
    name: "Instagram Mabim RPL",
    href: "http://instagram.com/mabimrpl",
  },
];
const isExternalLink = (href: string) => href.includes("http");

export function Footer() {
  const lenis = useLenis();

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (!isExternalLink(href)) {
      e.preventDefault();
      lenis?.scrollTo(href, { offset: -64 });
    }
  };

  return (
    <footer className=" relative z-10 bg-[#001735] w-full border-t-4 border-[#FAFF22]">
      <div className="p-8 flex flex-col gap-4  md:flex-row md:items-center">
        <p className="font-montserrat text-lg text-white md:text-xl">
          Tujuan dari Mabim RPL 2026 adalah untuk membantu mahasiswa baru dalam mengorientasikan diri mereka terhadap lingkungan akademik, mata kuliah dan kegiatan yang berkaitan dengan Rekayasa Perangkat Lunak UPI Kampus Cibiru.
        </p>

        <ul className="ml-4 flex min-w-72 flex-col gap-y-2 border-l border-[#FAFF22] py-3 pl-6">
          {navLinks.map((link) => {
            const external = isExternalLink(link.href);
            return (
              <li key={link.name} className="overflow-hidden">
                <Link
                  href={link.href}
                  className={cn("inline-block font-bonobo text-lg leading-5 text-white hover:underline", {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    "pointer-events-none opacity-50 hover:no-underline": (link as any).disabled,
                  })}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    if ((link as any).disabled) {
                      e.preventDefault();
                      return;
                    }
                    handleLinkClick(link.href, e);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
