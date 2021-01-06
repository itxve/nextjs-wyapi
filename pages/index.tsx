import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          <br></br>
          <Link href="/post">post</Link>
        </h1>
      </main>
    </div>
  )
}
