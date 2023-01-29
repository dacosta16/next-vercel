import { Inter } from '@next/font/google';
import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';
import { LightLayout } from '../components/layouts/LightLayout';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
        <h1 className={inter.className}>ABOUT</h1>

        <div className={'center'}>
          <h1 className={inter.className}>
            Ir a <Link style={{ color: '#0070f3'}} href="/">Home</Link>
          </h1>
        </div>
    </>
  )
}


About.getLayout = function getLayout( page: ReactNode ) {
  return (
    <MainLayout>
      <LightLayout> 
        { page }
      </LightLayout>
    </MainLayout>
  )
}