import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { BuildingOffice2Icon, CodeBracketSquareIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Justin Kennedy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='min-h-screen px-6 py-24'>
          <h1 className='text-6xl font-bold text-center pb-12'>Justin Kennedy</h1>
          <div className='mx-auto max-w-sm'>
            <div className='flex justify-around pb-12'>
              <a href='mailto:justin@justinkennedy.com' target='_blank'>
                <EnvelopeIcon className='h-6 w-6 text-black' />
              </a>
              <a href='https://github.com/kennedyjustin' target='_blank'>
                <CodeBracketSquareIcon className='h-6 w-6 text-black' />
              </a>
              <a href='https://linkedin.com/in/justinkennedy10' target='_blank'>
                <BuildingOffice2Icon className='h-6 w-6 text-black' />
              </a>
            </div>
            <div>{children}</div>
          </div>
        </main>
      </body>
    </html>
  )
}
