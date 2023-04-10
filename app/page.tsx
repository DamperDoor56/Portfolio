import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Main } from '@/components/sections/MainPageSection/Main'
import { Navbar } from '@/components/ui/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar 
      // logo={}
      content={['HOME','ABOUT', 'SERVICES', 'PROJECTS', 'EXPERIENCE', 'CONTACT']} />
      <Main greetings={'Hello there'} presentation={"I'm Ludmila, a"} goodbye={'Nice to meet you!'}/>
    </main>
  )
}
