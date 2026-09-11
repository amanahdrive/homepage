import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "symbol" | "landscape" | "symbol-white" | "landscape-white";
  alt?: string;
}

export function AmanahLogo({ className = "w-8 h-8", variant = "symbol-white", alt = "Amanah Drive Logo" }: LogoProps) {
  const getSrc = () => {
    switch (variant) {
      case "landscape-white":
        return "/assets/logo-amdri-landscape-white.png";
      case "landscape":
        return "/assets/logo-amdri-landscape.png";
      case "symbol":
        return "/assets/logo-amdri-symbol.png";
      case "symbol-white":
      default:
        return "/assets/logo-amdri-symbol-white.png";
    }
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src={getSrc()}
        alt={alt}
        width={variant.startsWith("landscape") ? 180 : 64}
        height={64}
        className="object-contain w-full h-full"
        priority
      />
    </div>
  );
}

export function AmanahLogoLandscape({ className = "h-8 w-auto", alt = "Amanah Drive Palembang" }: { className?: string; alt?: string }) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <Image
        src="/assets/logo-amdri-landscape-white.png"
        alt={alt}
        width={180}
        height={48}
        className="object-contain h-full w-auto"
        priority
      />
    </div>
  );
}
