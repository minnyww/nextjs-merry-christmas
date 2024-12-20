"use client";

import ScratchToReveal from "@/components/ui/scratch-to-reveal";
import SparklesText from "@/components/ui/sparkles-text";
import TextRevealByWord from "@/components/ui/text-reveal";

import Image from "next/image";

import image1 from "./image1.jpg";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import MorphingText from "@/components/ui/morphing-text";

import Snowfall from "react-snowfall";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="max-w-[600px] w-full">
        <Snowfall
          style={{
            width: "100vw",
            height: "100vh",
            zIndex: 2000,
            position: "fixed",
          }}
        />
        <NeonGradientCard>
          <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
            <div className="z-10 flex min-h-64 items-center justify-center dark:bg-black">
              <TextRevealByWord text="เลื่อนลงช้าๆ นะ 👇👇" />
            </div>
            <div className="z-10 flex min-h-64 items-center justify-center dark:bg-black">
              <TextRevealByWord text="Merry Christmas 🎄" />
            </div>
            <div className="z-10 flex min-h-64 items-center justify-center dark:bg-black">
              <TextRevealByWord text=" Happy New Year 2025 🎉꠬" />
            </div>
            <div className="flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20">
              <div>
                <SparklesText text="เปิดการ์ดสิ" />
              </div>
              <ScratchToReveal
                width={250}
                height={250}
                minScratchPercentage={70}
                className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
                onComplete={() => {
                  // confettiRef.current?.fire({});
                }}
                gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
              >
                <Image src={image1} alt="image1" />
              </ScratchToReveal>
              <div style={{ height: "60vh" }} />
              <MorphingText texts={["I", "Love", "You", "😘"]} />
            </div>
          </div>
        </NeonGradientCard>
      </div>
    </div>
  );
}
