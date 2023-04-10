'use client';
import styles from './Main.module.css';
import { MainProps } from '@/interfaces/MainProps';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { Heading } from '@/components/ui/Headline sections/Headline';

export const Main = ({
  greetings,
  presentation,
  goodbye,
}: MainProps) => {
  const el = useRef(null);
  
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Front-End Developer', 'Back-End Developer.'],
      typeSpeed: 80,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className={styles.context}>
        <div className={styles.area} >
            <ul className={styles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <div className='flex flex-col w-full h-full 2xl:px-96 lg:px-40
            px-0 pt-48'>
              <Heading type='h2' link={false} className='text-2xl text-white
               !font-raleway self-start'>{greetings}</Heading>
              <div className='pl-20 flex flex-col w-full h-fit gap-2 items-center'>
                <div className='w-[65rem]'>
                <Heading type='h1' link={false} className='text-8xl !font-ralewaybold
                 text-white font-bold lg:text-8xl md:text-6xl'>{presentation}</Heading>
                <span className='lg:text-8xl md:text-6xl pl-10 !font-ralewaybold
                 text-[#55B8C4] font-bold relative' ref={el} />
                 </div>
              </div>
              <Heading type='h2' link={false} className='text-2xl
               !font-raleway self-end text-white'>{goodbye}</Heading>
            </div>
    </div >


    </section>
  );
};
