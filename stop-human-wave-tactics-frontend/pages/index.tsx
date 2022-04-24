import Head from 'next/head'
import Button from '@mui/material/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
      </Head>
      <p>[Your Self Introduction]</p>
      <p>
        (This is a sample website - you’ll be building a site like this in{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  )
}
