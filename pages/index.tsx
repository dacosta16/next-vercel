import { Inter } from '@next/font/google';
import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MainLayout>
        <h1 className={inter.className}>HOME</h1>

        <div className={'center'}>
          <h1 className={inter.className}>
            Ir a <Link style={{ color: '#0070f3'}} href="/about">About</Link>
          </h1>
        </div>
      </MainLayout>
    </>
  )
}
