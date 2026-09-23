import type { Metadata } from "next";
import { Geist, Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MABIM RPL 2026",
  description: "Masa Bimbingan Rekayasa Perangkat Lunak 2026",
  icons: [{ rel: "icon", url: "/iconn.svg" }],
};

import { fontE, fontI, fontJ, fontK, fontL } from "./fonts";
import { ReactLenis } from "@/components/react-lenis";
import { Loading } from "@/components/providers/loading";
import Header from "@/components/common/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${montserrat.variable} ${fontE.variable} ${fontI.variable} ${fontJ.variable} ${fontK.variable} ${fontL.variable}`}>
      <body className="bg-[#001735]">
        <Header />
        <Loading>
          <ReactLenis>{children}</ReactLenis>
        </Loading>
        <Analytics />
      </body>
    </html>
  );
}
