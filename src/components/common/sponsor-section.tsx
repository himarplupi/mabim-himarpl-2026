import Image, { type StaticImageData } from "next/image";
// import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";
import tjoejahit from "@/assets/sponsors/tjoejahit.png";
import dapus from "@/assets/sponsors/DAPUS.jpeg";
import fokus from "@/assets/sponsors/fokus.png";
import hmve from "@/assets/sponsors/HMVE.png";
import pgsd from "@/assets/sponsors/pgsd.png";
import tekkom from "@/assets/sponsors/tekkom.png";
import pedia from "@/assets/sponsors/pedia.png";
import perslima from "@/assets/sponsors/PERSLIMA.png";
import amale from "@/assets/sponsors/Amale Kitchen Logo-1 2.png";
import rekapstore from "@/assets/sponsors/rekapstore.png";
import wancincau from "@/assets/sponsors/WanCincau 2.png";
import warungbara from "@/assets/sponsors/Warung Bara Logo 3.png";
import { BlurFade } from "../ui/blur-fade";
import bgSponsor from "@/assets/ornaments/yellowMedpart.svg";
import bgMedpart from "@/assets/ornaments/blueMedpart.svg";
import yellowStar from "@/assets/ornaments/yellowStar.svg";
import yellowStarOutline from "@/assets/ornaments/yellowStarOutline.svg";

type SponsorMediaPartner = {
  name: string;
  logo: StaticImageData | null;
};

const sponsorMediaPartners: SponsorMediaPartner[] = [
  {
    name: "Amale Kitchen",
    logo: amale,
  },
  {
    name: "WanCincau",
    logo: wancincau,
  },
  {
    name: "Warung Bara",
    logo: warungbara,
  },
  {
    name: "Tjoejahit",
    logo: tjoejahit,
  },
  {
    name: "Rekap Store",
    logo: rekapstore,
  },
  {
    name: "hmve",
    logo: hmve,
  },

  {
    name: "pedia",
    logo: pedia,
  },
  {
    name: "tekkom",
    logo: tekkom,
  },
  {
    name: "pgsd",
    logo: pgsd,
  },
  {
    name: "Perslima",
    logo: perslima,
  },
  {
    name: "Dapus",
    logo: dapus,
  },
  {
    name: "Fokus",
    logo: fokus,
  },
];

const firstRow = sponsorMediaPartners.slice(0, 5);
const secondRow = sponsorMediaPartners.slice(5);

const SponsorMediaPartnerCard = ({ type, logo, size = "md" }: { type?: "sponsor" | "medpart"; logo: StaticImageData | null; size?: "md" | "lg" }) => {
  return (
    logo && (
      <div className={cn("relative flex  cursor-pointer items-center justify-center object-center ", size === "lg" ? "h-[70px] w-[158px]" : "h-[50px]  w-[94px]")}>
        <Image src={type === "sponsor" ? bgSponsor : bgMedpart} alt="Sponsor or Media Partner Logo" className="absolute  h-[100px] w-[188px]  z-[1]" />
        <div className="relative z-[2] h-[40px] w-[128px] p-5">
          <Image src={logo} alt="Sponsor or Media Partner Logo" fill className="object-contain" />
        </div>
      </div>
    )
  );
};

export function SponsorSection() {
  return (
    <section className="text-center flex   w-full flex-col items-center  relative overflow-clip h-fit py-24 bg-[#0A1C38]">
      <BlurFade inView delay={0.25 * 2}>
        <span className="  font-akira text-white text-[36px]/[36px]">
          Sponsor & <br /> Medpart
        </span>
      </BlurFade>
      <BlurFade inView delay={0.25 * 3}>
        <div className="mt-16 flex flex-row md:flex-col gap-x-4 gap-y-8 items-start justify-center w-full max-w-[343px] md:max-w-[680px] lg:max-w-[900px] flex-wrap">
          <div className="flex-col md:flex-row gap-8 flex items-center justify-center flex-wrap">
            {Array(1)
              .fill(firstRow)
              .flat()
              .map((sponsorMediaPartner, idx) => (
                <SponsorMediaPartnerCard size="lg" key={sponsorMediaPartner.name + idx} logo={sponsorMediaPartner.logo} type="sponsor" />
              ))}
          </div>
          <div className="flex-col md:flex-row gap-8  items-center justify-center flex-wrap hidden">
            {Array(1)
              .fill(secondRow)
              .flat()
              .map((sponsorMediaPartner, idx) => (
                <SponsorMediaPartnerCard size="lg" key={sponsorMediaPartner.name + idx} logo={sponsorMediaPartner.logo} type="medpart" />
              ))}
          </div>
        </div>
      </BlurFade>

      <div className="w-full max-w-[343px] md:max-w-[680px] flex items-center justify-center gap-2 mt-8">
        <div className="bg-[#FFF200]/30 h-[1px] w-full"></div>
        <Image src={yellowStar} alt="star" className=" w-[24px] h-[24px]" />
        <Image src={yellowStar} alt="star" className=" w-[18px] h-[18px]" />
        <Image src={yellowStar} alt="star" className=" w-[12px] h-[12px]" />
        <Image src={yellowStar} alt="star" className=" w-[18px] h-[18px]" />
        <Image src={yellowStar} alt="star" className=" w-[24px] h-[24px]" />

        <div className="bg-[#FFF200]/30 h-[1px] w-full"></div>
      </div>
      <Image src={yellowStar} alt="star" className=" w-[60px] h-[60px] absolute top-0 left-2" />
      <Image src={yellowStarOutline} alt="star" className=" w-[40px] h-[40px] absolute bottom-2 right-2" />
      {/* <Marquee pauseOnHover direction="left" className="mt-16 z-[6]">
        {Array(3)
          .fill(firstRow)
          .flat()
          .map((sponsorMediaPartner, idx) => (
            <SponsorMediaPartnerCard size="lg" key={sponsorMediaPartner.name + idx} logo={sponsorMediaPartner.logo} />
          ))}
      </Marquee>
      <Marquee pauseOnHover direction="right" className="z-[6]">
        {Array(3)
          .fill(secondRow)
          .flat()
          .map((sponsorMediaPartner, idx) => (
            <SponsorMediaPartnerCard size="lg" key={sponsorMediaPartner.name + idx} logo={sponsorMediaPartner.logo} />
          ))}
      </Marquee>{" "} */}
    </section>
  );
}
