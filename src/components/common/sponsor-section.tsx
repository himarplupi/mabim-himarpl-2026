import Image, { type StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";
import Dijait from "@/assets/sponsors/Dijait.png";
import dapus from "@/assets/sponsors/DAPUS.jpeg";
import fokus from "@/assets/sponsors/fokus.png";
import hmve from "@/assets/sponsors/HMVE.png";
import pgsd from "@/assets/sponsors/pgsd.png";
import tekkom from "@/assets/sponsors/tekkom.png";
import pedia from "@/assets/sponsors/pedia.png";
import perslima from "@/assets/sponsors/PERSLIMA.png";
import kanght from "@/assets/sponsors/kanght.png";
import rekapstore from "@/assets/sponsors/rekapstore.png";
import dicoding from "@/assets/sponsors/dicoding.png";
import oppa from "@/assets/sponsors/oppa.png";
import omg from "@/assets/sponsors/OMG.png";
import ss from "@/assets/sponsors/ss.png";
import { BlurFade } from "../ui/blur-fade";
import bgSponsor from "@/assets/ornaments/yellowMedpart.svg";
import bgMedpart from "@/assets/ornaments/blueMedpart.svg";

type SponsorMediaPartner = {
  name: string;
  logo: StaticImageData | null;
};

const sponsorMediaPartners: SponsorMediaPartner[] = [
  {
    name: "Dicoding",
    logo: dicoding,
  },
  {
    name: "Oppa",
    logo: oppa,
  },
  {
    name: "Dijait",
    logo: Dijait,
  },
  {
    name: "KANGHT",
    logo: kanght,
  },
  {
    name: "Rekap Store",
    logo: rekapstore,
  },
  {
    name: "SS",
    logo: ss,
  },
  {
    name: "OMG",
    logo: omg,
  },

  {
    name: "dpm",
    logo: omg,
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

const firstRow = sponsorMediaPartners.slice(0, 7);
const secondRow = sponsorMediaPartners.slice(7);

const SponsorMediaPartnerCard = ({ type, logo, size = "md" }: { type?: "sponsor" | "medpart"; logo: StaticImageData | null; size?: "md" | "lg" }) => {
  return (
    logo && (
      <figure className={cn("relative flex  cursor-pointer items-center justify-center overflow-hidden object-center ", size === "lg" ? "h-40" : "h-24")}>
        <Image src={type === "sponsor" ? bgSponsor : bgMedpart} alt="Sponsor or Media Partner Logo" className="h-full w-auto z-[-1]" />
        <Image src={logo} alt="Sponsor or Media Partner Logo" className="h-[85%] w-auto" />
      </figure>
    )
  );
};

export function SponsorSection() {
  return (
    <section className="text-center flex  min-h-[812px] w-full flex-col items-center pt-[220px] relative overflow-clip h-screen">
      <BlurFade inView delay={0.25 * 2}>
        <span className="  font-akira text-white text-[36px]/[36px]">
          Sponsor & <br /> Medpart
        </span>
      </BlurFade>
      {/* <div className="mt-16 flex flex-row md:flex-col gap-4 items-center">
      <div className="flex-col md:flex-row gap-4 flex items-center">
        {
          Array(3)
          .fill(firstRow)
          .flat()
          .map((sponsorMediaPartner, idx) => (
            <SponsorMediaPartnerCard size="lg" key={sponsorMediaPartner.name + idx} logo={sponsorMediaPartner.logo} type="sponsor" />
          ))
        }
      </div>
      <div className="flex-col md:flex-row gap-4 flex items-center">
        {
          Array(3)
          .fill(secondRow)
          .flat()
          .map((sponsorMediaPartner, idx) => (
            <SponsorMediaPartnerCard size="lg" key={sponsorMediaPartner.name + idx} logo={sponsorMediaPartner.logo} type="medpart" />
          ))
        }
      </div>
      </div> */}
      <Marquee pauseOnHover direction="left" className="mt-16 z-[6]">
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
      </Marquee>{" "}
    </section>
  );
}
