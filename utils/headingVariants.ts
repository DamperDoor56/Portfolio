import { HeadingStylesDescription } from "@/interfaces/HeadingProps";

export const baseHeadingStyle = 'font-gothic';

export const HeadingStyles: HeadingStylesDescription = {
  h1: `${baseHeadingStyle} text-5xl md:text-6xl`,
  h2: `${baseHeadingStyle} text-4xl md:text-5xl`,
  h3: `${baseHeadingStyle} text-3xl md:text-4xl`,
  h4: `${baseHeadingStyle} text-2xl md:text-3xl`,
  h5: `${baseHeadingStyle} text-xl md:text-2xl`,
  h6: `${baseHeadingStyle} text-lg md:text-xl`,
};
