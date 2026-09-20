"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";

export function Loading({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [soundBg, setSoundBg] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isSoundPlaying) return;
    if (soundBg) {
      const playSequence = () => {
        soundBg.volume = 0.5;
        void soundBg.play();

        soundBg.onended = playSequence;
      };

      playSequence();
      setIsSoundPlaying(true);
    }
  }, [soundBg]);

  const handlePlaySound = () => {
    const audio = new Audio("/assets/sound.mpeg");
    setSoundBg(audio);
  };

  // const viewBoxSize = 801;
  // const center = viewBoxSize / 2;

  return (
    <>
      {children}

      <AnimatePresence mode="wait">
        {(!isSoundPlaying || isLoading) && (
          <Motion.div key="loader" className="fixed inset-0 z-[9999] flex h-screen flex-col items-center justify-center gap-y-4 bg-[#001735]" exit={{ opacity: 0 }} transition={{ duration: 0.5 }} onClick={handlePlaySound}>
            <Motion.svg width="284" height="270" viewBox="0 0 284 270" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
              <Motion.g
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
              >
                <Motion.path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M173.135 159.186L220.354 123.386L161.11 122.179L141.655 66.208L122.2 122.179L62.9561 123.386L110.176 159.186L93.0166 215.902L141.655 182.057L190.294 215.902L173.135 159.186ZM141.662 168.814L112.479 189.122L122.774 155.092L94.4434 133.612L129.989 132.888L141.662 99.3057L153.336 132.888L188.882 133.612L160.55 155.092L170.846 189.122L141.662 168.814Z"
                  fill="#FAFF22"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "backOut",
                  }}
                  style={{
                    transformOrigin: "141.655px 141.055px",
                  }}
                />
                <Motion.path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M198.321 167.359L283.315 102.921L176.678 100.747L141.658 0L106.638 100.747L0 102.921L84.9941 167.359L54.1084 269.449L141.658 208.527L229.207 269.449L198.321 167.359ZM141.659 195.293L73.5654 242.678L97.5879 163.273L31.4805 113.155L114.422 111.465L141.659 33.1055L168.896 111.465L251.838 113.155L185.73 163.273L209.753 242.678L141.659 195.293Z"
                  fill="#FAFF22"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: "backOut", delay: 0.3 }}
                  style={{
                    transformOrigin: "141.6575px 134.7245px",
                  }}
                />
              </Motion.g>
            </Motion.svg>

            <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-4 font-montserrat text-lg text-white">
              Tekan dimana saja untuk memulai
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
