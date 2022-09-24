import cn from "classnames";

interface LinkProps {
  title: string;
  link: string;
  underlined?: boolean;
}

export const ExternalLink = ({ title, link, underlined }: LinkProps) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={link}
    className={cn(
      "text-text-color-light dark:text-text-color-dark text-sm hover:underline duration-200 cursor-pointer",
      underlined && "underline"
    )}
  >
    {title}
  </a>
);
