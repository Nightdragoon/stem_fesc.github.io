"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Lightfall = dynamic(() => import("@/components/Lightfall"), { ssr: false });

const MOBILE_BREAKPOINT = 768;

export default function LightfallWrapper() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setLoaded(true);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      {!loaded && (
        <div className="fixed inset-0 w-screen h-screen overflow-hidden z-50 flex items-center justify-center bg-black">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-400 text-sm">Cargando...</p>
          </div>
        </div>
      )}
      <div
        className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s",
          backgroundColor: "#000000",
        }}
      >
        <Lightfall
          colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
          backgroundColor="#000000"
          speed={isMobile ? 0.15 : 0.3}
          streakCount={isMobile ? 1 : 2}
          streakWidth={1}
          streakLength={1}
          glow={isMobile ? 0.5 : 0.8}
          density={isMobile ? 0.15 : 0.4}
          twinkle={isMobile ? 0.4 : 0.6}
          zoom={3}
          backgroundGlow={isMobile ? 0.3 : 0.4}
          opacity={isMobile ? 0.9 : 0.95}
          mouseInteraction={!isMobile}
          mouseStrength={0.5}
          mouseRadius={0.8}
          quality={isMobile ? 0.25 : 1}
          isMobile={isMobile}
          onLoad={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setLoaded(true);
          }}
        />
      </div>
    </>
  );
}
