"use client";
import * as React from "react";

interface WhenProps {
  children: React.ReactNode;
  cond: boolean;
}

export const When = ({ children, cond }: WhenProps) => {
  return cond ? <>{children}</> : null;
};
