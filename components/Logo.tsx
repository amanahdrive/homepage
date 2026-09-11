import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "symbol" | "landscape" | "symbol-white" | "landscape-white" | "symbol-black" | "landscape-black";
  alt?: string;
}

export function AmanahLogo({ className = "w-8 h-8", variant = "symbol", alt = "Amanah Drive Logo" }: LogoProps) {
  const getSrc = () => {
    switch (variant) {
      case "landscape-white":
        return "/assets/logo-amdri-landscape-white.png";
      case "landscape-black":
        return "/assets/logo-amdri-landscape-black.png";
      case "landscape":
        return "/assets/logo-amdri-landscape.png";
      case "symbol-white":
        return "/assets/logo-amdri-symbol-white.png";
      case "symbol-black":
        return "/assets/logo-amdri-symbol-black.png";
      case "symbol":
      default:
        return "/assets/logo-amdri-symbol.png";
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

export function AmanahLogoLandscape({
  className = "h-8 w-auto",
  variant = "landscape",
  alt = "Amanah Drive Palembang"
}: {
  className?: string;
  variant?: "landscape" | "landscape-white" | "landscape-black";
  alt?: string;
}) {
  const getSrc = () => {
    switch (variant) {
      case "landscape-white":
        return "/assets/logo-amdri-landscape-white.png";
      case "landscape-black":
        return "/assets/logo-amdri-landscape-black.png";
      case "landscape":
      default:
        return "/assets/logo-amdri-landscape.png";
    }
  };

  return (
    <div className={`relative flex items-center ${className}`}>
      <Image
        src={getSrc()}
        alt={alt}
        width={180}
        height={48}
        className="object-contain h-full w-auto"
        priority
      />
    </div>
  );
}
