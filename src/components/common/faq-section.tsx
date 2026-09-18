// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
import { FAQAccordions } from "./faq-accordions";
import { BlurFade } from "../ui/blur-fade";

export function FaqSection() {
  return (
    <section id="faq" className=" flex  w-full  flex-col items-center gap-2 py-[40px] md:py-[100px] relative overflow-clip px-2 md:px-6">
      <div className="w-full max-w-[343px] md:max-w-[680px] lg:max-w-[900px] flex flex-col">
        <BlurFade inView delay={0.25 * 2} className="mb-5">
          <div className="flex flex-col gap-3">
            <h3 className="font-akira text-white  z-[6] text-[28px] md:text-[40px]  ">FAQ</h3>

            <div className="flex gap-2 h-1 ">
              <div className="w-12 h-full bg-[#faff22]"></div>
              <div className="w-4 h-full bg-[#0c7cfe]"></div>
              <div className="w-2 h-full bg-[#FF3B30]"></div>
            </div>
          </div>
        </BlurFade>
      </div>

      <div className="max-w-[343px] md:max-w-[680px] lg:max-w-[900px] w-full">
        <BlurFade className="w-full z-[6]" inView delay={0.25 * 3}>
          <FAQAccordions />
        </BlurFade>
      </div>
    </section>
  );
}
