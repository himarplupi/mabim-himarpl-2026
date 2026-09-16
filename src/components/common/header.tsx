"use client";
import Image from "next/image";
import logo from "@/app/icon.svg";
import { useLenis } from "lenis/react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState, useRef, useEffect } from "react";
import HamburgerIcon from "@/assets/ornaments/menuBtn.svg";
import Highlight from "@/assets/ornaments/highlightMenu.svg";
import Link from "next/link";
import { motion as Motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, amount: 0.5, margin: "100px" });
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const [activeLink, setActiveLink] = useState<string | null>(null);

  // const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "#main" },
    { name: "Group", href: "#kelompok" },
    { name: "Countdown", href: "#countdown" },
    { name: "Timeline", href: "#timeline" },
    { name: "FAQ", href: "#faq" },
    // { name: "Documentation", href: "/documentation" },
    // { name: "Essay", href: "/essay" },
  ];

  const lenis = useLenis();

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();

      lenis?.scrollTo(href, { offset: -64 });
      return;
    }

    if (href.startsWith("http")) {
      return;
    }
  };

  useEffect(() => {
    if (!lenis) return;

    function onScroll({ scroll }: { scroll: number }) {
      if (scroll > lastScroll && scroll > 100) {
        setShowHeader(false);
      } else if (scroll < lastScroll - 10) {
        setShowHeader(true);
      }
      setLastScroll(scroll);
    }

    lenis.on("scroll", onScroll);

    return () => lenis.off("scroll", onScroll);
  }, [lenis, lastScroll]);
  const show = pathname === "/" || pathname === "/essay";

  return (
    <Motion.header
      ref={ref}
      initial={{ y: -100 }}
      animate={{ y: showHeader ? 0 : -100 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 1,
      }}
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[95%] z-50 flex items-center justify-between md:pl-6 md:pr-10 px-5 md:py-2 py-2 shadow-lg bg-[#061B3A] border-2 border-[#FAFF22] ${show ? "" : "hidden"}`}
    >
      <div className="flex items-center gap-3">
        <Image src={logo} alt="Logo" className="w-12 sm:w-15" />
        <div className="flex flex-col">
          <span className="font-akira text-md sm:text-base md:text-lg lg:text-xl text-[#fff] tracking-widest">MABIM RPL</span>
          <span className="font-trueno-bold text-[10px] sm:text-sm md:text-md lg:text-base text-[#FAFF22] tracking-[2.5px]">2026</span>
        </div>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden font-trueno-bold md:flex gap-6 sm:gap-2 md:gap-4 lg:gap-6 text-sm sm:text-xs md:text-xs lg:text-sm font-medium text-[#fff]">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={(e) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              if ((link as any).disabled) {
                e.preventDefault();
                return;
              }
              handleLinkClick(link.href, e);
            }}
            className="hover:text-white transition"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      {/* Hamburger Icon */}

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="md:hidden flex items-center justify-center w-10 h-10 cursor-pointer rounded focus:outline-none z-50" onClick={() => setIsOpen((open) => !open)} aria-label="Open navigation menu">
            <Image src={HamburgerIcon} alt="Menu" width={24} height={24} className={`transition-transform duration-300 sm:w-8 sm:h-8 ${isOpen ? "rotate-90" : ""}`} />
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle hidden>im here</SheetTitle>
          <div className="flex flex-col relative z-60 mt-4 items-start gap-5 text-white">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group text-[20px] font-montserrat font-medium py-2 px-8 transition-all w-full cursor-pointer relative"
                  onClick={(e) => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    if ((link as any).disabled) {
                      e.preventDefault();
                      return;
                    }
                    setActiveLink(link.href);
                    setIsOpen(false);
                    handleLinkClick(link.href, e);
                  }}
                >
                  {isActive && <Image src={Highlight} fill className="h-fill" alt="highlight" />}
                  {link.name}
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </Motion.header>
  );
}
