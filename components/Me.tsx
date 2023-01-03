import { socials } from "../lib/constants";
import { ExternalLink } from "./ExternalLink";

export const Me = () => {
  return (
    <div className="space-y-14 mt-5 md:mt-56">
      <h1 className="text-3xl text-fg-light dark:text-fg-dark font-medium">
        Judicaël Andriamahandry
      </h1>
      <div className="space-y-6">
        <p className="text-text-color-light dark:text-text-color-dark leading-7">
          Hi 👋🏽, I’m Judicaël Andriamahandry, a fanatical open sourceror. I'm a
          core team member at{" "}
          <ExternalLink
            title="Tldraw"
            link="https://github.com/tldraw/tldraw"
            underlined
          />
          , not only that I've contributed to open source project such as
          TanStack/query, TanStack/router, Abelljs and lot more.
        </p>
        <p className="text-text-color-light dark:text-text-color-dark leading-7">
          I mostly talk about Typescript, Javascript, User Experience, Frontend
          and more. If it happen that you love these tech too, feel free to DM
          me on{" "}
          <ExternalLink title="Twitter" link={socials[0].link} underlined />.
        </p>
        <p className="text-text-color-light dark:text-text-color-dark leading-7">
          If I’m not coding or browsing twitter, I’m likely playing tennis or
          just chilling at home doing nothing 😄.
        </p>
        <p>
          If you like my works, consider sponsoring me on{" "}
          <ExternalLink
            title="Patreon"
            link="https://patreon.com/user?u=85456818&utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link"
            underlined
          />{" "}
          to keep them sustainable.
        </p>
      </div>
    </div>
  );
};
