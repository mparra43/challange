import Head from 'next/head'
import { Inter } from '@next/font/google'

import { Navbar } from '../features/tranversal/NavBar/index';
import { Characters } from '../features/characters/components';
import { useFetch } from '../hooks/useFetch';
import { Spinner } from '../features/tranversal/Spinner/index';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data, isLoading, hasError, getFetch } = useFetch({ endpoint: `character?page=1`, method: 'GET' })



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className="home">
          <Navbar />
          {!isLoading && data ?
             <Characters data={data.data } />
             :
            <Spinner/>
          }
        </div>
      </main>
    </>
  )
}
