import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Page() {
  return (
    <>
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
    </>
  );
}
