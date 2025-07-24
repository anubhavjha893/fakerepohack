/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Hide the splash after animation
        if (splashRef.current) {
          splashRef.current.style.display = "none";
        }
        onComplete();
      },
    });

    tl.fromTo(
      splashRef.current,
      { opacity: 1, scale: 1.2 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
      }
    ).to(splashRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.9,
      ease: "power2.inOut",
    });
  }, [onComplete]);

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 flex items-center justify-center bg-blue"
    >
      <img
        src="/logo.png"
        alt="Village Roots"
        className="w-full h-full"
      />
    </div>
  );
}
