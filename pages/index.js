import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunntiner</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get Free Server &nbsp;
            <code className={styles.code}>Reach Out</code>
          </p>
      
        </div>
       
        <div className={styles.center}>
         
          <h3 className={styles.tex}>
            Fastest Server
          </h3>
          <div className={styles.thirteen}>
            <Image
              src="/cloud.svg"
              alt="13"
              width={39}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="/home"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Continue  <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
                Continue Your Session&nbsp;.
            </p>
          </a>
          <a
          href='/start'
          className={styles.card}
          >
           <h2 className={inter.className}>Start With Free <sppan>-&gt;</sppan>
           <p className={inter.className}>Get Free Server WITH ULIMILITED BANDs</p>
           </h2>
          </a>
           <a href='about:blank'
            className={styles.card}
            target="_parent"
            >
               <h2 className={inter.className}>Documents</h2>
               <p className={inter.className} >Gets Installation And More About.</p>
            </a>
            <a href='test'
            className={styles.card}
            target="_parent"
            >
               <h2 className={inter.className}>Demo</h2>
               <p className={inter.className} >Testing this server to known about speed, etc.</p>
            </a>
            
         
      
            <p className={inter.className}>
              Instant Make free Server with Web Deployment&nbsp;.Code
            </p>
            
          
        </div>
      </main>
    </>
  )
}
