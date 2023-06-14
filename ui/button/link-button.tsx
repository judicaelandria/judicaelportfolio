"use client";
import * as React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  external?: boolean;
}

export const LinkButton = ({
  href,
  children,
  variant = "primary",
  external,
}: LinkProps) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "py-2 px-5 rounded-md flex justify-center items-center text-foreground text-sm w-max gap-3",
        variant === "primary" && "bg-accent-0",
        variant === "secondary" && "bg-inherit border border-accent-0",
        variant === "tertiary" && "bg-inherit"
      )}
      target={external ? "_blank" : "_parent"}
    >
      {children}
    </Link>
  );
};
