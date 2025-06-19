import Head from 'next/head'
import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Skills from '@/app/components/Skills'
import Projects from '@/app/components/Projects'
import Achievements from '@/app/components/Achievement'
import Contact from '@/app/components/Contact'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dustin Manuel | BINUS University Student</title>
        <meta name="description" content="Portfolio of Dustin Manuel, Computer Science student at Bina Nusantara University" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}