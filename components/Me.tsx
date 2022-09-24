import { socials } from "../lib/constants";
import { ExternalLink } from "./ExternalLink";

export const Me = () => {
  return (
    <div className="space-y-14 mt-5 md:mt-56">
      <h1 className="text-3xl text-fg-light dark:text-fg-dark font-medium">
        Judicaël Andriamahandry
      </h1>
      <div className="space-y-6">
        <p className="text-sm text-text-color-light dark:text-text-color-dark leading-7">
          Hi, I’m Judicaël Andriamahandry, and I love open source. I’m a core
          team member at{" "}
          <ExternalLink
            title="Tldraw"
            link="https://github.com/tldraw/tldraw"
            underlined
          />
          ; And also a frontend engineer at Flydesk, where we're building a
          solution to help you manage your shared office & hybrid working team.
        </p>
        <p className="text-sm text-text-color-light dark:text-text-color-dark leading-7">
          I mostly talk about Typescript, Javascript, User Experience, Frontend
          and more. If it happen that you love these tech too, feel free to DM
          me on{" "}
          <ExternalLink title="Twitter" link={socials[0].link} underlined />.
        </p>
        <p className="text-sm text-text-color-light dark:text-text-color-dark leading-7">
          If I’m not coding or browsing twitter, I’m likely playing tennis or
          just chilling at home doing nothing 😄.
        </p>
      </div>
    </div>
  );
};