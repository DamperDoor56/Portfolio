
import { HeadingProps, HeadingType } from '@/interfaces/HeadingProps';
import { HeadingStyles } from '@/utils/headingVariants';

export const Heading = ({ type, className, children, link }: HeadingProps) => {
  const HeadingTag: HeadingType = type;
  {
    if(link) {
      return (
      <HeadingTag className={`${HeadingStyles[type]} ${className}`}>
       <a href={children}>{children}</a>
      </HeadingTag>
    )
    } else {
      return (
        <HeadingTag className={`${HeadingStyles[type]} ${className}`}>
          {children}
        </HeadingTag>
      );
    }
  }
};
