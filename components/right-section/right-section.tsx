"use client";
import { TabMenu } from "./menu";
import * as Tabs from "@radix-ui/react-tabs";
import { Projects } from "./projects";
import { Suspense } from "react";

export const RightSection = () => {
  return (
    <div className="py-4 px-4 md:px-6">
      <Suspense fallback={null}>
        <TabMenu>
          <Tabs.Content value="projects" className="pt-8">
            <Projects />
          </Tabs.Content>
          <Tabs.Content value="blog">Tab two content</Tabs.Content>
        </TabMenu>
      </Suspense>
    </div>
  );
};
