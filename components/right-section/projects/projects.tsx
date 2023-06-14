import { v4 } from "uuid";
import { ProjectCard } from "./project-card";

const projects = [
  {
    id: v4(),
    src: "https://res.cloudinary.com/judicael/video/upload/v1686736913/projects-video/miro-like.mov",
    title: "Miro",
    desc: "You know that I’m a huge fan of tldraw, so when the beta version came out I decided to built something with it to try th new api out. I decided to built a lil version of Miro and took me only 2-3 days to built it, yes that how easy it is to create something with tldraw; (You should try it out)",
  },
  {
    id: v4(),
    src: "https://res.cloudinary.com/judicael/video/upload/v1686736927/projects-video/mini-browser.mov",
    title: "Mini-browser",
    desc: "",
  },
  {
    id: v4(),
    src: "https://res.cloudinary.com/judicael/video/upload/v1686736904/projects-video/lilslide.mov",
    title: "Lilslide",
    desc: "",
  },
];

export const Projects = () => {
  return (
    <section className="overflow-y-auto min-h-[80vh] max-h-[90vh]">
      <div className="space-y-2">
        <h1 className="text-foreground font-semibold text-xl md:text-h1">
          Projects that I built
        </h1>
        <p className="text-accent-2 text-sm md:text-base">
          It’s not all of them, but I’ll keep adding what I did before and what
          I’m currently building to the list
        </p>
      </div>
      {projects.map((project) => (
        <ProjectCard
          title={project.title}
          desc={project.desc}
          mediaSrc={project.src}
          key={project.id}
        />
      ))}
    </section>
  );
};
