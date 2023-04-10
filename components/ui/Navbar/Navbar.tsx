'use client';
import Image from 'next/image';
import styles from './HeroSection.module.css';
import { MainProps } from '@/interfaces/MainProps';
import { Heading } from '@/components/ui/Headline sections/Headline';
import { NavbarProps } from '@/interfaces/NavbarProps';

export const Navbar = ({
//   logo,
  content
}: NavbarProps) => {
  return (
    <section>
        <main className='flex flex-row gap-6 w-full justify-center
        h-32 items-end bg-[#1C1D26]'>
        { content.map((words, index) => (
            <Heading type='h1' link={true} key={index} className='!text-3xl
            py-5 text-[#E5E5E5] hover:text-[#55B8C4] ease-in-out duration-300'>
                {words}
            </Heading>
            ))
        }
            </main>
    </section>
  );
};
