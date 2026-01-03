"use client";

export default function Ripple({ isEmployed = false }: { isEmployed?: boolean }) {
  const color = isEmployed ? "bg-red-500" : "bg-green-500";

  return (
    <div className="relative inline-flex items-center justify-center w-4 h-4">
      <div className={`absolute w-2 h-2 ${color} rounded-full z-10`} />
      <div className={`absolute w-2 h-2 ${color} rounded-full animate-breathe`} />
    </div>
  );
}
