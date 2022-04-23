import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MailIcon } from '@heroicons/react/solid'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>justinkennedy.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Justin Kennedy
        </h1>

        <div className="mt-6 flex max-w-xs md:max-w-4xl flex-wrap items-center justify-around">
          <a
            href="https://vendrive.com"
            target='_blank'
            className="mt-6 w-96 rounded-xl border p-6 text-left"
          >
            <h3 className="text-2xl font-bold">CTO @ Vendrive &rarr;</h3>
            <p className="mt-4 text-xl">
              Unifying Brands &amp; Retailers.
            </p>
          </a>
        </div>

        <div className='mt-8 flex flex-wrap items-center justify-around w-full md:max-w-xs'>
          <a href='mailto:justin@justinkennedy.com' target='_blank'>
            <MailIcon className="h-8 w-8 text-black"/>
          </a>
          <a href='https://github.com/kennedyjustin' target='_blank'>
            <Image src="/github.svg" alt="Github" width={32} height={32} />
          </a>
          <a href='https://linkedin.com/in/justinkennedy10' target='_blank'>
            <Image src="/linkedin.svg" alt="Linkedin" width={32} height={32} />
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
