"use client";

import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { motion as Motion } from "motion/react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { cn } from "@/lib/utils";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "@radix-ui/react-icons";
// import Box from "@/assets/ornaments/box.svg";
// import Image from "next/image";

const faqs = [
  {
    id: "item-1",
    question: "Berapa Lama MABIM Dilaksanakan?",
    answer: "MABIM dilaksanakan selama 4 hari dalam kurun waktu 1 bulan, dimana setiap pelaksanaannya diadakan pada hari sabtu, kecuali day 2 yang dilaksanakan pada hari Minggu.",
  },
  {
    id: "item-2",
    question: "Apa Kepanjangan dari MABIM RPL?",
    answer: "Kepanjangan dari Mabim adalah Masa Bimbingan. Jadi, Mabim RPL artinya Masa Bimbingan yang dilaksanakan untuk mahasiswa baru Program studi Rekayasa Perangkat Lunak",
  },
  {
    id: "item-3",
    question: "Apa manfaat dari MABIM RPL?",
    answer: "Mabim sangat berguna untuk memperdalam pemahaman mahasiswa baru terkait prodi yang tengah mereka tempuh, jadi jangan sampai ga ikut ya!",
  },
  {
    id: "item-4",
    question: "Apakah MABIM RPL Wajib?",
    answer: "Mabim ini diwajibkan untuk seluruh mahasiswa baru Rekayasa Perangkat Lunak di Universitas Pendidikan Indonesia, jadi siap-siap ya!!",
  },
  {
    id: "item-5",
    question: "Apa yang Perlu Disiapkan untuk MABIM RPL?",
    answer: "Untuk ikut Mabim itu sebenernya cuma perlu satu hal, yaitu Niat. Sisanya tinggal ikutin instruksi dari Mentornya aja deh :D",
  },
  {
    id: "item-6",
    question: "MABIM RPL itu Santai apa Serius Banget?",
    answer: "Mabim ini ada waktunya santai, tapi juga ada waktu seriusnya. Jadi ga usah khawatir, ga akan seserius itu kok :)",
  },
];

export function FAQAccordions() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState("");

  return (
    <AccordionPrimitive.Root defaultValue="item-1" onValueChange={setActiveIndex} type="single" collapsible className="w-full max-w-[343px] md:max-w-[680px] lg:max-w-[900px]  font-trueno-bold text-white z-[6]">
      {faqs.map((faq, i) => (
        <AccordionPrimitive.Item
          value={faq.id}
          key={faq.id}
          className="accordionItem  overflow-hidden border-t-2 border-[#FFF200]/20 last:border-[#FFF200]/20 last:border-b-2 font-trueno-bold w-full max-w-[343px] md:max-w-[680px] lg:max-w-[900px]"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="group flex flex-1 cursor-pointer items-center justify-between  px-4 py-3 text-left transition-all hover:scale-105 w-full max-w-[343px] md:max-w-[680px] lg:max-w-[900px]">
              <p className="text-[#FFF200] ">{i + 1}</p>
              <div className="w-[70%]">
                <p>{faq.question}</p>
              </div>
              <div className="h-8 w-8 transition-all duration-300 ease-in-out border-[3px] border-[#FFF200] group-data-[state=open]:rotate-45  group-data-[state=open]:bg-[#FFF200] flex justify-center items-center">
                <PlusIcon className="h-4 w-4 group-data-[state=open]:text-[#061B3A]" />
              </div>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          <AccordionPrimitive.Content className="accordionContent data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden relative px-4 py-2">
            {/* <Image src={Box} alt="ornament" className="absolute inset-0 h-full w-full " /> */}
            <div className="text-sm">{faq.answer}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
