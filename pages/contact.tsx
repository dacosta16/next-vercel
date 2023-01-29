import { Inter } from '@next/font/google';
import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';


const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <MainLayout>
      <h1 className={inter.className}>CONTACT</h1>

      <div className={'center'}>
        <h1 className={inter.className}>
          Ir a <Link style={{ color: '#0070f3'}} href="/">Home</Link>
        </h1>
      </div>
    </MainLayout>
  )
}