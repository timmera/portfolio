import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Page() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
    </>
  );
}
