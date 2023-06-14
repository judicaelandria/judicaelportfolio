import { VideoPlayer } from "../video-player";

interface CardProps {
  title: string;
  desc: string;
  mediaSrc: string;
  mediaType?: "image" | "video" | "gh";
}

export const ProjectCard = ({
  title,
  desc,
  mediaSrc,
  mediaType = "video",
}: CardProps) => {
  return (
    <div className="flex flex-col gap-3 mt-14">
      <VideoPlayer src={mediaSrc} />
      <div className="space-y-3">
        <h2 className="font-black text-lg md:text-xl">{title}</h2>
        <p className="text-accent-1 text-sm md:text-base">{desc}</p>
      </div>
    </div>
  );
};
