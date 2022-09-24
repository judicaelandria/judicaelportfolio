import type { NextPage } from "next";
import { ExternalLink } from "../components/ExternalLink";
import { SEO } from "../components/SEO";
import { socials } from "../lib/constants";

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen font-inter flex justify-center items-center">
      <SEO />
      <div className="w-full h-full md:max-w-[640px] flex flex-col min-h-screen">
        <main className="w-full h-full px-6 md:px-0">
          <div className="space-y-14 mt-5 md:mt-56">
            <h1 className="text-3xl text-fg-light dark:text-fg-dark font-medium">
              Judicaël Andriamahandry
            </h1>
            <div className="space-y-6">
              <p className="text-sm text-text-color-light dark:text-text-color-dark leading-7">
                Hi, I’m Judicaël Andriamahandry, and I love open source. I’m a
                core team member at{" "}
                <ExternalLink
                  title="Tldraw"
                  link="https://github.com/tldraw/tldraw"
                  underlined
                />
                ; And also a frontend engineer at Flydesk, where we're building
                a solution to help you manage your shared office & hybrid
                working team.
              </p>
              <p className="text-sm text-text-color-light dark:text-text-color-dark leading-7">
                I mostly talk about Typescript, Javascript, User Experience,
                Frontend and more. If it happen that you love these tech too,
                feel free to DM me on{" "}
                <ExternalLink
                  title="Twitter"
                  link={socials[0].link}
                  underlined
                />
                .
              </p>
              <p className="text-sm text-text-color-light dark:text-text-color-dark leading-7">
                If I’m not coding or browsing twitter, I’m likely playing tennis
                or just chilling at home doing nothing 😄.
              </p>
            </div>
          </div>
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
