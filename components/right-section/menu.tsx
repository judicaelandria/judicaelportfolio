"use client";
import * as Tabs from "@radix-ui/react-tabs";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

const navs = ["projects", "blog"];

interface TabMenuProps {
  children: React.ReactNode;
}

export const TabMenu = ({ children }: TabMenuProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab");

  React.useEffect(() => {
    if (!activeTab) router.push("?tab=projects");
  }, [activeTab]);

  return (
    <Tabs.Root
      defaultValue={activeTab ?? "projects"}
      orientation="vertical"
      className="flex flex-col justify-center items-center lg:items-start"
    >
      <Tabs.List
        aria-label="tabs"
        className="flex items-center gap-4 text-foreground py-3 md:py-0"
      >
        {navs.map((nav, id) => (
          <Tabs.Trigger
            key={id}
            value={nav}
            className={twMerge(
              "capitalize text-accent-1",
              activeTab === nav && "text-foreground"
            )}
          >
            <Link href={"?tab=" + nav}>{nav}</Link>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {children}
    </Tabs.Root>
  );
};
