import type { NextPage } from "next";
import { ExternalLink } from "../components/ExternalLink";
import { Me } from "../components/Me";
import { SEO } from "../components/SEO";
import { Writings } from "../components/Writings";
import { socials } from "../lib/constants";

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen font-inter flex justify-center items-center">
      <SEO />
      <div className="w-full h-full md:max-w-[640px] flex flex-col min-h-screen">
        <main className="w-full h-full px-6 md:px-0 space-y-8">
          <Me />
          <Writings />
        </main>
        <footer className="mt-auto border-t-[0.1px] border-t-fg-light/60 dark:border-t-fg-dark/60 py-7 px-6 md:px-0">
          <div className="flex items-center gap-5">
            {socials.map(({ link, title }) => (
              <ExternalLink title={title} link={link} key={title} />
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
