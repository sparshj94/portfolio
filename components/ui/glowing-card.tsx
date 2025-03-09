"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function GlowingCard({
  children,
  className,
  containerClassName,
}: GlowingCardProps) {
  return (
    <div
      className={cn(
        "relative h-full bg-background/80 p-4 group rounded-xl border border-muted/30",
        containerClassName
      )}
    >
      <div className="absolute inset-0 rounded-xl transition duration-300 group-hover:bg-gradient-to-r group-hover:from-primary/20 group-hover:via-secondary/20 group-hover:to-primary/20 opacity-0 group-hover:opacity-100 blur-xl" />
      <div className="absolute inset-0 rounded-xl transition duration-300 group-hover:bg-gradient-to-r group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-primary/10 opacity-0 group-hover:opacity-100" />
      <div className="absolute inset-px rounded-[11px] bg-background z-10" />
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
}

export function GlowingTabs({
  children,
  className,
  containerClassName,
}: GlowingCardProps) {
  return (
    <div
      className={cn(
        "relative bg-background/80 p-1 group rounded-lg border border-muted/30",
        containerClassName
      )}
    >
      <div className="absolute inset-0 rounded-lg transition duration-300 group-hover:bg-gradient-to-r group-hover:from-primary/20 group-hover:via-secondary/20 group-hover:to-primary/20 opacity-0 group-hover:opacity-100 blur-xl" />
      <div className="absolute inset-0 rounded-lg transition duration-300 group-hover:bg-gradient-to-r group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-primary/10 opacity-0 group-hover:opacity-100" />
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
} 