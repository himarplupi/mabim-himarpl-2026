import { type StaticImageData } from "next/image";
import imgVanguard from "@/assets/mentors/imgVanguard.png";
import imgArkadia from "@/assets/mentors/imgArkadia.png";
import imgBeta from "@/assets/mentors/imgBeta.png";
import imgNexus from "@/assets/mentors/imgNexus.png";
import imgOmega from "@/assets/mentors/imgOmega.png";
import imgApex from "@/assets/mentors/imgApex.png";
import imgQuantum from "@/assets/mentors/imgQuantum.png";
import imgAegis from "@/assets/mentors/imgAegis.png";
import imgSerendipity from "@/assets/mentors/imgSerendipity.png";
import imgObsidian from "@/assets/mentors/imgObsidian.png";

export type Mentee = {
  nim: string;
  id: string;
  name: string;
};

export type GroupMabim = {
  id: number;
  code: string;
  name: string;
  mentor: {
    name: string;
    phone: string;
    image: StaticImageData | null;
    metadata: {
      skill: string;
      stats: number;
      description: string;
    };
  };
  mentees: Mentee[];
};

export const groupMabim: GroupMabim[] = [
  {
    id: 1,
    code: "",
    name: "Vanguard",
    mentor: {
      name: "Diva Cindy Siahaan",
      phone: "+6281265949992",
      image: imgVanguard,
      metadata: {
        skill: "",
        stats: 1,
        description: "",
      },
    },
    mentees: [
      {
        nim: "",
        id: "",
        name: "",
      },
    ],
  },
  {
    id: 2,
    code: "",
    name: "",
    mentor: {
      name: "",
      phone: "+62",
      image: imgArkadia,
      metadata: {
        skill: "",
        stats: 2,
        description: "",
      },
    },
    mentees: [
      {
        nim: "",
        id: "",
        name: "",
      },
    ],
  },
  {
    id: 3,
    code: "",
    name: "",
    mentor: {
      name: "",
      phone: "+62",
      image: imgOmega,
      metadata: {
        skill: "",
        stats: 3,
        description: "",
      },
    },
    mentees: [
      {
        nim: "",
        id: "",
        name: "",
      },
    ],
  },
  {
    id: 4,
    code: "",
    name: "Nexus",
    mentor: {
      name: "Janitra Alvito Zahir",
      phone: "+62",
      image: imgNexus,
      metadata: {
        skill: "Energetic",
        stats: 4,
        description: "",
      },
    },
    mentees: [
      {
        nim: "",
        id: "",
        name: "",
      },
    ],
  },
  {
    id: 5,
    code: "",
    name: "",
    mentor: {
      name: "",
      phone: "+62",
      image: imgBeta,
      metadata: {
        skill: "",
        stats: 5,
        description: "",
      },
    },
    mentees: [
      {
        nim: "",
        id: "",
        name: "",
      },
    ],
  },
  {
    id: 6,
    code: "",
    name: "Obsidian",
    mentor: {
      name: "Himagara Abimanyu",
      phone: "+62",
      image: imgObsidian,
      metadata: {
        skill: "Anomali",
        stats: 6,
        description: "certified larper & hopeless romantic",
      },
    },
    mentees: [
      {
        nim: "",
        id: "",
        name: "",
      },
    ],
  },
  {
    id: 7,
    code: "",
    name: "Apex",
    mentor: {
      name: "Salwa Nur Amelia Suhendar",
      phone: "+62",
      image: imgApex,
      metadata: {
        skill: "Meujeuh euy",
        stats: 7,
        description: "",
      },
    },
    mentees: [
      {
        nim: "",
        id: "",
        name: "",
      },
    ],
  },
  {
    id: 8,
    code: "",
    name: "",
    mentor: {
      name: "",
      phone: "+62",
      image: imgQuantum,
      metadata: {
        skill: "",
        stats: 8,
        description: "",
      },
    },
    mentees: [
      {
        nim: "",
        id: "",
        name: "",
      },
    ],
  },
  {
    id: 9,
    code: "",
    name: "Aegis",
    mentor: {
      name: "Cantika",
      phone: "+62",
      image: imgAegis,
      metadata: {
        skill: "ADVISORS",
        stats: 9,
        description: "Ad maiora natus sum",
      },
    },
    mentees: [
      {
        nim: "",
        id: "",
        name: "",
      },
    ],
  },
  {
    id: 10,
    code: "",
    name: "Serendipity",
    mentor: {
      name: "Muhammad Arkan Athaya",
      phone: "+62",
      image: imgSerendipity,
      metadata: {
        skill: "Best Seller",
        stats: 10,
        description: "Aku introvert UwU",
      },
    },
    mentees: [
      {
        nim: "",
        id: "",
        name: "",
      },
    ],
  },
];
