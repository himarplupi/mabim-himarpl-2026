// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
import { FAQAccordions } from "./faq-accordions";
import { BlurFade } from "../ui/blur-fade";

export function FaqSection() {
  return (
    <section id="faq" className=" flex  min-h-screen w-full flex-col pt-[120px] relative overflow-clip">
      <BlurFade inView delay={0.25 * 2}>
        <div className="flex flex-col gap-3 mb-10">
          <h3 className="font-akira text-white text-[32px] md:text-[42px] z-[6]">faq</h3>

          <div className="flex gap-2 items-center">
            <div className="bg-[#FFF200] w-12 h-1"></div>
            <div className="bg-[#008FFF] w-4 h-1"></div>
            <div className="bg-[#FF3B30] w-2 h-1"></div>
          </div>
        </div>
      </BlurFade>

      <BlurFade className="w-full z-[6]" inView delay={0.25 * 3}>
        <FAQAccordions />
      </BlurFade>
    </section>
  );
}
