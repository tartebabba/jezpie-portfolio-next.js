import Link from 'next/link';
import AboutMe from './_components/about-me';
export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <section className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
        <AboutMe />
      </section>
    </main>
  );
}
