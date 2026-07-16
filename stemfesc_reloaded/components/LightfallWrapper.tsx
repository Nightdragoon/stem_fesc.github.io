"use client";

import dynamic from "next/dynamic";

const Lightfall = dynamic(() => import("@/components/Lightfall"), { ssr: false });

export default function LightfallWrapper() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -10,
        pointerEvents: "none",
        backgroundColor: "#0A29FF",
      }}
    >
      <Lightfall
        colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
        backgroundColor="#0A29FF"
        speed={0.3}
        streakCount={2}
        streakWidth={1}
        streakLength={1}
        glow={0.8}
        density={0.4}
        twinkle={0.6}
        zoom={3}
        backgroundGlow={0.4}
        opacity={0.85}
        mouseInteraction={true}
        mouseStrength={0.5}
        mouseRadius={0.8}
      />
    </div>
  );
}
