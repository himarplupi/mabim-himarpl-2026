import { type StaticImageData } from "next/image";
import imgVanguard from "@/assets/mentors/imgVanguard.png";
import imgBastion from "@/assets/mentors/imgBastion.png";
import imgVerdant from "@/assets/mentors/imgVerdant.png";
import imgNexus from "@/assets/mentors/imgNexus.png";
import imgPhantom from "@/assets/mentors/imgPhantom.png";
import imgApex from "@/assets/mentors/imgApex.png";
import imgMonarch from "@/assets/mentors/imgMonarch.png";
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
    code: "VGD",
    name: "Vanguard",
    mentor: {
      name: "Diva",
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
        nim: "2601011",
        id: "VGD-01",
        name: "ACKMAD ELFAN PURNAMA",
      },
      {
        nim: "2603338",
        id: "VGD-02",
        name: "Allia Naziha",
      },
      {
        nim: "2605141",
        id: "VGD-03",
        name: "Azril Muhamad Rizki",
      },
      {
        nim: "2607237",
        id: "VGD-04",
        name: "Faza Tammy Amanullah",
      },
      {
        nim: "2603888",
        id: "VGD-05",
        name: "Jehan Ghaliya Falisha",
      },
      {
        nim: "2603261",
        id: "VGD-06",
        name: "Kori'ah",
      },
      {
        nim: "2606764",
        id: "VGD-07",
        name: "Mochamad Dzaky F. R.",
      },
      {
        nim: "2604079",
        id: "VGD-08",
        name: "Muhammad Faza Nursalim",
      },
      {
        nim: "2608576",
        id: "VGD-09",
        name: "RAIHAN WIJAYAPUTRA",
      },
      {
        nim: "2608342",
        id: "VGD-10",
        name: "Syamsul Rotab Bahri",
      },
      {
        nim: "2608947",
        id: "VGD-11",
        name: "Zaidan Faaris Abidi",
      },
    ],
  },
  {
    id: 2,
    code: "MRH",
    name: "Monarch",
    mentor: {
      name: "Wicak",
      phone: "+62895377662500",
      image: imgMonarch,
      metadata: {
        skill: "Masukkan Teks",
        stats: 2,
        description: "Teman Seperjuangan Template CapCut",
      },
    },
    mentees: [
      {
        nim: "2602541",
        id: "MRH-01",
        name: "Adi Nugroho",
      },
      {
        nim: "2600694",
        id: "MRH-02",
        name: "Alya Zahira Putri",
      },
      {
        nim: "2605070",
        id: "MRH-03",
        name: "Barra Ihsan De Nugra",
      },
      {
        nim: "2607548",
        id: "MRH-04",
        name: "Dania Daradinanti Fujiningmas",
      },
      {
        nim: "2607813",
        id: "MRH-05",
        name: "FIRDAUS HARDIANSYAH",
      },
      {
        nim: "",
        id: "MRH-06",
        name: "Galang Jihad Muhammad",
      },
      {
        nim: "2607795",
        id: "MRH-07",
        name: "Jehan Shaima",
      },
      {
        nim: "2607970",
        id: "MRH-08",
        name: "MOCHAMMAD SHIFAN AZARIA",
      },
      {
        nim: "2606849",
        id: "MRH-09",
        name: "Muhammad Fikri Rabbani",
      },
      {
        nim: "2605820",
        id: "MRH-10",
        name: "Rayndra Sulaiman Fattaahillah",
      },
      {
        nim: "2604733",
        id: "MRH-11",
        name: "Taufik Hidayat",
      },
    ],
  },
  {
    id: 3,
    code: "PHM",
    name: "Phantom",
    mentor: {
      name: "Atsiila",
      phone: "+6283186103742",
      image: imgPhantom,
      metadata: {
        skill: "Freaky",
        stats: 3,
        description: "Here for the vibes, the stories, and whatever comes up.",
      },
    },
    mentees: [
      {
        nim: "2609667",
        id: "PHM-01",
        name: "Ammar Rasyad Kurnia",
      },
      {
        nim: "2601970",
        id: "PHM-02",
        name: "David Koswendi",
      },
      {
        nim: "2601098",
        id: "PHM-03",
        name: "Dina Shafa Laura",
      },
      {
        nim: "2606688",
        id: "PHM-04",
        name: "Fadil Muhammad Jamali",
      },
      {
        nim: "2603680",
        id: "PHM-05",
        name: "Felya Nashita Sam Pridita",
      },
      {
        nim: "2607908",
        id: "PHM-06",
        name: "Lister NataNael Hutapea",
      },
      {
        nim: "2608578",
        id: "PHM-07",
        name: "Muhammad Fadhli Fadillah",
      },
      {
        nim: "2605116",
        id: "PHM-08",
        name: "Nanda Ahmad Nurshidiq",
      },
      {
        nim: "",
        id: "PHM-09",
        name: "Raisha Ramadhani",
      },
      {
        nim: "2611204",
        id: "PHM-10",
        name: "Sabilal Rasya",
      },
    ],
  },
  {
    id: 4,
    code: "NXS",
    name: "Nexus",
    mentor: {
      name: "Vito",
      phone: "+6282121463019",
      image: imgNexus,
      metadata: {
        skill: "VAMOSSSS",
        stats: 4,
        description: "Katanya tak ada energi yang abadi, tapi kok aku masih disini?",
      },
    },
    mentees: [
      {
        nim: "",
        id: "NXS-01",
        name: "Aditya Setiawan",
      },
      {
        nim: "2607198",
        id: "NXS-02",
        name: "Astrid Aisyah Rahmi",
      },
      {
        nim: "2600821",
        id: "NXS-03",
        name: "DAFFA DHAIFULLAH",
      },
      {
        nim: "2613047",
        id: "NXS-04",
        name: "Ginanjar Al Farizi",
      },
      {
        nim: "2611225",
        id: "NXS-05",
        name: "Kaysan Qinthara",
      },
      {
        nim: "2603287",
        id: "NXS-06",
        name: "Luthfi Areza Rahmat",
      },
      {
        nim: "2605822",
        id: "NXS-07",
        name: "Maya Khansa Arissa",
      },
      {
        nim: "2607808",
        id: "NXS-08",
        name: "Muhamad Aditya Firmansyah",
      },
      {
        nim: "2605832",
        id: "NXS-09",
        name: "Muhammad Naya Dzulqornain",
      },
      {
        nim: "",
        id: "NXS-10",
        name: "Syifa Nur Aini",
      },
      {
        nim: "2605607",
        id: "NXS-11",
        name: "Zian Zahirul Haq",
      },
    ],
  },
  {
    id: 5,
    code: "VRN",
    name: "Verdant",
    mentor: {
      name: "Priska",
      phone: "+6285194293937",
      image: imgVerdant,
      metadata: {
        skill: "Naturally Funny",
        stats: 5,
        description: "Penuh Kasih dan Cinta",
      },
    },
    mentees: [
      {
        nim: "2611229",
        id: "VRN-01",
        name: "Andika Indra Praja",
      },
      {
        nim: "",
        id: "VRN-02",
        name: "Fahreza Zulfaqi",
      },
      {
        nim: "2603016",
        id: "VRN-03",
        name: "Gilda Nabillah Dwi Putri Sukmawati",
      },
      {
        nim: "2605103",
        id: "VRN-04",
        name: "M. BAGUS AWALUDIN",
      },
      {
        nim: "2602736",
        id: "VRN-05",
        name: "Maritza Rievani Wibowo",
      },
      {
        nim: "2608318",
        id: "VRN-06",
        name: "Muhammad Fadli Septiana",
      },
      {
        nim: "",
        id: "VRN-07",
        name: "Radith Pramudya Irawan",
      },
      {
        nim: "2605453",
        id: "VRN-08",
        name: "Ratu Zalfa Alifah",
      },
      {
        nim: "2601030",
        id: "VRN-09",
        name: "Sendi Dwiguna",
      },
      {
        nim: "",
        id: "VRN-10",
        name: "Yusuf Alfianto",
      },
    ],
  },
  {
    id: 6,
    code: "OBD",
    name: "Obsidian",
    mentor: {
      name: "Himagara",
      phone: "+6281387284774",
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
        id: "OBD-01",
        name: "Ahmad",
      },
      {
        nim: "2605749",
        id: "OBD-02",
        name: "Aurora Putri Novrizcha",
      },
      {
        nim: "2604920",
        id: "OBD-03",
        name: "Dimas Aditya Herlambang",
      },
      {
        nim: "2611911",
        id: "OBD-04",
        name: "Iqbal Fadhil Tresnadarma",
      },
      {
        nim: "2613693",
        id: "OBD-05",
        name: "Muhammad Alfian Fiziardi",
      },
      {
        nim: "2613888",
        id: "OBD-06",
        name: "Muhammad Rafa Alghifari",
      },
      {
        nim: "2603069",
        id: "OBD-07",
        name: "Mutia Risnawati",
      },
      {
        nim: "2607392",
        id: "OBD-08",
        name: "Razan Abdul Muis",
      },
      {
        nim: "2605982",
        id: "OBD-09",
        name: "Razzan Ilman Anwar",
      },
      {
        nim: "2613916",
        id: "OBD-10",
        name: "Thamarezki Febyanda Zahran",
      },
    ],
  },
  {
    id: 7,
    code: "APX",
    name: "Apex",
    mentor: {
      name: "Salwa",
      phone: "+6289616144209",
      image: imgApex,
      metadata: {
        skill: "Meujeuh euy",
        stats: 7,
        description: "Kelompok",
      },
    },
    mentees: [
      {
        nim: "2612446",
        id: "APX-01",
        name: "Ardhan Taufik Rahmansyah",
      },
      {
        nim: "2602140",
        id: "APX-02",
        name: "Dzika Azizil Julfikri",
      },
      {
        nim: "2603839",
        id: "APX-03",
        name: "FARREL ACHMAD RIZALDI DALIMUNTHE",
      },
      {
        nim: "2601734",
        id: "APX-04",
        name: "Hasna Jauza Salsabila",
      },
      {
        nim: "2613207",
        id: "APX-05",
        name: "M. Akbar Hadiansyah P.",
      },
      {
        nim: "2604605",
        id: "APX-06",
        name: "Made Darendra Putra Adinata",
      },
      {
        nim: "2601658",
        id: "APX-07",
        name: "Muhammad fahmi dzikry",
      },
      {
        nim: "2608550",
        id: "APX-08",
        name: "Raditya Farras Sudrajat",
      },
      {
        nim: "2600586",
        id: "APX-09",
        name: "Safana Azahramadhani Wibowo",
      },
      {
        nim: "2602518",
        id: "APX-10",
        name: "Sulthon Farel Abdur Qois",
      },
    ],
  },
  {
    id: 8,
    code: "BSN",
    name: "Bastion",
    mentor: {
      name: "Fadhil",
      phone: "+6281324005268",
      image: imgBastion,
      metadata: {
        skill: "Not Mentioned",
        stats: 8,
        description: "Easygoing, Quietly Vibing.",
      },
    },
    mentees: [
      {
        nim: "",
        id: "BSN-01",
        name: "Ahmad Hasan",
      },
      {
        nim: "2602997",
        id: "BSN-02",
        name: "Dhea Febrianti",
      },
      {
        nim: "2606681",
        id: "BSN-03",
        name: "Dimas Bagus Pratama",
      },
      {
        nim: "",
        id: "BSN-04",
        name: "Jagadditya Kautsar",
      },
      {
        nim: "2604871",
        id: "BSN-05",
        name: "Muhammad Alif Al Fathir",
      },
      {
        nim: "2603176",
        id: "BSN-06",
        name: "MUHAMMAD RAFLI DZAKI",
      },
      {
        nim: "2609130",
        id: "BSN-07",
        name: "Nabila Al-Abidah",
      },
      {
        nim: "2607805",
        id: "BSN-08",
        name: "Rizky Bagas Qaran",
      },
      {
        nim: "2601926",
        id: "BSN-09",
        name: "Safa Sopian Ali Basya",
      },
      {
        nim: "2602894",
        id: "BSN-10",
        name: "Tubagus Muhammad Ivan Syah Winata Kusuma",
      },
    ],
  },
  {
    id: 9,
    code: "AGS",
    name: "Aegis",
    mentor: {
      name: "Cantika",
      phone: "+6282169599986",
      image: imgAegis,
      metadata: {
        skill: "ADVISORS",
        stats: 9,
        description: "Ad maiora natus sum",
      },
    },
    mentees: [
      {
        nim: "2605638",
        id: "AGS-01",
        name: "Abdulrohman Ilham Sutisna",
      },
      {
        nim: "",
        id: "AGS-02",
        name: "Azka Nur Febrian Arwani",
      },
      {
        nim: "2600378",
        id: "AGS-03",
        name: "FAUZAN RAPID RABBANI",
      },
      {
        nim: "2601439",
        id: "AGS-04",
        name: "Firda Citra Aulia Zahramadan",
      },
      {
        nim: "2606826",
        id: "AGS-05",
        name: "Ica Utami Eka Putri",
      },
      {
        nim: "",
        id: "AGS-06",
        name: "Moch Mahreza Jusufi Gunardi",
      },
      {
        nim: "2611865",
        id: "AGS-07",
        name: "Muhammad Farrel As Shafwan",
      },
      {
        nim: "2605317",
        id: "AGS-08",
        name: "Rafly Wijaya",
      },
      {
        nim: "2601686",
        id: "AGS-09",
        name: "Sakina Salsabila Putri",
      },
      {
        nim: "",
        id: "AGS-10",
        name: "Syahrul Hidayatulloh",
      },
    ],
  },
  {
    id: 10,
    code: "SDY",
    name: "Serendipity",
    mentor: {
      name: "Arkan",
      phone: "+62895336375984",
      image: imgSerendipity,
      metadata: {
        skill: "Best Seller",
        stats: 10,
        description: "Aku introvert UwU",
      },
    },
    mentees: [
      {
        nim: "2607475",
        id: "SDY-01",
        name: "Aldrich Zavier Sulaeman",
      },
      {
        nim: "2606502",
        id: "SDY-02",
        name: "El Farrel Dzafran",
      },
      {
        nim: "2604687",
        id: "SDY-03",
        name: "Fadia Azra Kadarisman",
      },
      {
        nim: "2607267",
        id: "SDY-04",
        name: "Liandra Rabbani",
      },
      {
        nim: "2600195",
        id: "SDY-05",
        name: "Muhammad Dimas Nugraha",
      },
      {
        nim: "2606375",
        id: "SDY-06",
        name: "Muhammad Rizki Mujahidin",
      },
      {
        nim: "2602143",
        id: "SDY-07",
        name: "Nisrina Nuri Lutfhiyyah",
      },
      {
        nim: "2601723",
        id: "SDY-08",
        name: "Rizky Terry Hamzah",
      },
      {
        nim: "2603050",
        id: "SDY-09",
        name: "Siti Patimah Ajahra",
      },
      {
        nim: "2603120",
        id: "SDY-10",
        name: "YUDHISTIRA",
      },
    ],
  },
];
