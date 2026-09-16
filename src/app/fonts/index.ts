import localFont from "next/font/local";

export const fontI = localFont({
  src: [
    {
      path: "./Akira.otf",
      weight: "400",
    },
  ],
  variable: "--font-akira",
  display: "swap",
});

export const fontE = localFont({
  src: [
    {
      path: "./TruenoBlk.otf",
      weight: "900",
    },
  ],
  variable: "--font-trueno-black",
  display: "swap",
});

export const fontK = localFont({
  src: [
    {
      path: "./TruenoSBd.otf",
      weight: "400",
    },
  ],
  variable: "--font-trueno-bold",
  display: "swap",
});

export const fontJ = localFont({
  src: [
    {
      path: "./TruenoRg.otf",
      weight: "400",
    },
  ],
  variable: "--font-trueno-regular",
  display: "swap",
});

export const fontL = localFont({
  src: [
    {
      path: "./TruenoLt.otf",
      weight: "100",
    },
  ],
  variable: "--font-trueno-light",
  display: "swap",
});
