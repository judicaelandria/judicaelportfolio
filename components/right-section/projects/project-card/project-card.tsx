import { LinkButton } from "~/ui";
import { VideoPlayer } from "../video-player";
import { When } from "~/components/when";
import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

interface CardProps {
  title: string;
  desc: string;
  src: string;
  link?: string;
  github?: string;
}

export const ProjectCard = ({ title, desc, src, link, github }: CardProps) => {
  return (
    <div className="flex flex-col gap-6 mt-14">
      <VideoPlayer src={src} />
      <div className="space-y-1">
        <h2 className="font-black text-lg md:text-xl">{title}</h2>
        <p className="text-accent-1 text-sm md:text-base">{desc}</p>
      </div>
      <div className="flex items-center gap-3">
        <When cond={!!link}>
          <LinkButton href={link! ?? ""} external>
            Live preview{" "}
            <ArrowTopRightOnSquareIcon className="text-white w-[18px]" />
          </LinkButton>
        </When>
        <When cond={!!github}>
          <LinkButton href={github!} variant="tertiary" external>
            View on Github <ArrowRightIcon className="w-4 text-white" />
          </LinkButton>
        </When>
      </div>
    </div>
  );
};
