import Image from 'next/image'
import Head from 'next/head'
import { Hero } from './components'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
    </main>
  )
}
