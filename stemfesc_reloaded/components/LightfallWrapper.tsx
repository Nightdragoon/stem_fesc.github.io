"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Lightfall = dynamic(() => import("@/components/Lightfall"), { ssr: false });
const Galaxy = dynamic(() => import("@/components/Galaxy"), { ssr: false });

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
        {isMobile ? (
          <Galaxy
            transparent
            mouseInteraction={false}
            mouseRepulsion={false}
            density={0.8}
            glowIntensity={0.5}
            saturation={0.6}
            hueShift={200}
            starSpeed={0.3}
            speed={0.5}
            twinkleIntensity={0.4}
            rotationSpeed={0.05}
            onLoad={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
              setLoaded(true);
            }}
          />
        ) : (
          <Lightfall
            colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
            backgroundColor="#000000"
            speed={0.3}
            streakCount={2}
            streakWidth={1}
            streakLength={1}
            glow={0.8}
            density={0.4}
            twinkle={0.6}
            zoom={3}
            backgroundGlow={0.4}
            opacity={0.95}
            mouseInteraction
            mouseStrength={0.5}
            mouseRadius={0.8}
            quality={1}
            onLoad={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
              setLoaded(true);
            }}
          />
        )}
      </div>
    </>
  );
}
