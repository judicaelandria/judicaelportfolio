import { writings } from "../lib/data";

interface ItemProps {
  title: string;
  desc: string;
  link: string;
}

export const Writings = () => {
  return (
    <div className="space-y-5">
      <h4 className="text-gray">Writings</h4>
      <div className="space-y-2">
        {writings.map(({ id, link, title, desc }) => (
          <WritingItem title={title} link={link} desc={desc} key={id} />
        ))}
      </div>
    </div>
  );
};

export const WritingItem = ({ title, desc, link }: ItemProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2 cursor-pointer duration-300 opacity-70 hover:opacity-100 transition-all"
    >
      <h3 className="text-sm text-text-color-light dark:text-text-color-dark">
        {title}
      </h3>
      <p className="text-xs text-text-color-light/80 dark:text-text-color-dark/80">
        {desc}
      </p>
    </a>
  );
};
