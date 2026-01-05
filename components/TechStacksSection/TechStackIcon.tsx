"use client";

import * as simpleIcons from "simple-icons";
import Image from "next/image";

type TechStackIconProps = {
  iconSlug: string;
  className?: string;
};

const customIconMap: Record<string, string> = {
  java: "/java-logo.svg",
  zustand: "/zustand-logo.svg",
};

const TechStackIcon = ({ iconSlug, className = "w-5 h-5" }: TechStackIconProps) => {
  if (customIconMap[iconSlug]) {
    return (
      <Image
        src={customIconMap[iconSlug]}
        alt={iconSlug}
        width={20}
        height={20}
        className={className}
      />
    );
  }

  // simple-icons에서 찾기
  const formattedSlug = `si${iconSlug.charAt(0).toUpperCase() + iconSlug.slice(1)}`;
  const icon = simpleIcons[formattedSlug as keyof typeof simpleIcons];

  if (!icon) return null;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      fill={`#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  );
};

export default TechStackIcon;
