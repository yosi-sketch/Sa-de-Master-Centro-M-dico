"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "green"
    | "primary"
    | "vibrant"
    | "whatsapp"
    | "forest"
    | "white"
    | "outline"
    | "outline-green"
    | "outline-white"
    | "dark"
    | "emerald"
    | "blue"
    | "red"
    | "cardio"
    | "navy"
    | "gold";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "green",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2.5 text-xs font-bold tracking-wider",
    md: "px-6 py-3.5 text-sm font-bold tracking-wide",
    lg: "px-8 py-4 text-sm sm:text-base font-extrabold tracking-wide",
  }[size];

  const variantClasses: Record<string, string> = {
    // Primary Official Green (Extracted from 'AGENDE AGORA' Button on Campaign Flyer)
    green:
      "relative border border-emerald-500/40 bg-gradient-to-r from-[#14532d] via-[#166534] to-[#15803d] text-white font-extrabold " +
      "shadow-[0_8px_24px_-4px_rgba(22,101,52,0.45),inset_0_1px_1px_rgba(255,255,255,0.3)] " +
      "hover:-translate-y-0.5 hover:from-[#166534] hover:via-[#15803d] hover:to-[#16a34a] " +
      "hover:shadow-[0_12px_28px_rgba(22,101,52,0.55)] " +
      "active:translate-y-0 active:shadow-[0_4px_12px_rgba(22,101,52,0.35)]",

    primary:
      "relative border border-emerald-500/40 bg-gradient-to-r from-[#14532d] via-[#166534] to-[#15803d] text-white font-extrabold " +
      "shadow-[0_8px_24px_-4px_rgba(22,101,52,0.45),inset_0_1px_1px_rgba(255,255,255,0.3)] " +
      "hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_28px_rgba(22,101,52,0.55)]",

    forest:
      "relative border border-emerald-600/50 bg-[#14532d] text-white font-extrabold " +
      "shadow-[0_8px_24px_-4px_rgba(20,83,45,0.5)] hover:-translate-y-0.5 hover:bg-[#166534]",

    // Vibrant Medical Green (From 'Saúde' and 'M' in Logo)
    vibrant:
      "relative border border-emerald-400/50 bg-gradient-to-r from-[#15803d] via-[#16a34a] to-[#22c55e] text-white font-extrabold " +
      "shadow-[0_8px_24px_-4px_rgba(34,197,94,0.4),inset_0_1px_1px_rgba(255,255,255,0.35)] " +
      "hover:-translate-y-0.5 hover:brightness-105 " +
      "hover:shadow-[0_12px_30px_rgba(34,197,94,0.55)]",

    emerald:
      "relative border border-emerald-400/50 bg-gradient-to-r from-[#15803d] via-[#16a34a] to-[#22c55e] text-white font-extrabold " +
      "shadow-[0_8px_24px_-4px_rgba(34,197,94,0.4)] hover:-translate-y-0.5",

    // Official WhatsApp Conversion CTA
    whatsapp:
      "relative border border-emerald-400/50 bg-gradient-to-r from-[#1eb858] via-[#25D366] to-[#128C7E] text-white font-extrabold " +
      "shadow-[0_8px_24px_-4px_rgba(37,211,102,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] " +
      "hover:-translate-y-0.5 hover:brightness-105 " +
      "hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] " +
      "active:translate-y-0 active:shadow-[0_4px_12px_rgba(37,211,102,0.35)]",

    // Dark Slate/Charcoal Professional (From 'Master' in logo)
    dark:
      "relative border border-slate-700/60 bg-gradient-to-r from-[#052e16] via-[#1e293b] to-[#0f172a] text-white font-bold " +
      "shadow-[0_8px_24px_-4px_rgba(15,23,42,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] " +
      "hover:-translate-y-0.5 hover:from-[#14532d] hover:to-[#1e293b] " +
      "hover:shadow-[0_12px_28px_rgba(15,23,42,0.6)]",

    navy:
      "relative border border-slate-700/60 bg-gradient-to-r from-[#052e16] via-[#1e293b] to-[#0f172a] text-white font-bold " +
      "shadow-[0_8px_24px_-4px_rgba(15,23,42,0.5)] hover:-translate-y-0.5",

    // Pure White High Contrast
    white:
      "relative border border-slate-200/90 bg-white text-[#15803d] font-extrabold " +
      "shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 hover:bg-emerald-50 hover:border-emerald-300 " +
      "hover:shadow-[0_10px_26px_rgba(22,163,74,0.2)]",

    // Transparent Outlines
    outline:
      "relative border-2 border-[#15803d] bg-transparent text-[#15803d] font-bold " +
      "hover:-translate-y-0.5 hover:bg-[#15803d] hover:text-white " +
      "hover:shadow-[0_8px_20px_rgba(22,163,74,0.25)]",

    "outline-green":
      "relative border-2 border-[#15803d] bg-transparent text-[#15803d] font-bold " +
      "hover:-translate-y-0.5 hover:bg-[#15803d] hover:text-white " +
      "hover:shadow-[0_8px_20px_rgba(22,163,74,0.25)]",

    "outline-white":
      "relative border-2 border-white/90 bg-white/10 text-white font-bold backdrop-blur-sm " +
      "hover:-translate-y-0.5 hover:bg-white hover:text-[#15803d] " +
      "hover:shadow-[0_8px_20px_rgba(255,255,255,0.3)]",

    // Legacy fallback aliases mapping to Saúde Master styles
    blue:
      "relative border border-emerald-500/40 bg-gradient-to-r from-[#14532d] via-[#166534] to-[#15803d] text-white font-extrabold " +
      "shadow-[0_8px_24px_-4px_rgba(22,101,52,0.45)] hover:-translate-y-0.5",

    red:
      "relative border border-emerald-500/40 bg-gradient-to-r from-[#14532d] via-[#166534] to-[#15803d] text-white font-extrabold " +
      "shadow-[0_8px_24px_-4px_rgba(22,101,52,0.45)] hover:-translate-y-0.5",

    cardio:
      "relative border border-emerald-500/40 bg-gradient-to-r from-[#14532d] via-[#166534] to-[#15803d] text-white font-extrabold " +
      "shadow-[0_8px_24px_-4px_rgba(22,101,52,0.45)] hover:-translate-y-0.5",

    gold:
      "relative border border-emerald-500/40 bg-gradient-to-r from-[#14532d] via-[#166534] to-[#15803d] text-white font-extrabold " +
      "shadow-[0_8px_24px_-4px_rgba(22,101,52,0.45)] hover:-translate-y-0.5",
  };

  const selectedClass = variantClasses[variant] || variantClasses.green;

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200 select-none text-center cursor-pointer " +
    sizeClasses +
    " " +
    selectedClass +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
