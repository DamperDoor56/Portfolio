

export interface HeadingProps {
    type: HeadingType;
    className: string;   
    children: string;
    link: boolean;
}

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingStylesDescription = {
  [key in HeadingType]: string;
};
