import Link from 'next/link';
import AboutMe from './_components/about-me';
export default function HomePage() {
  return (
    <main className="flex flex-col items-center ">
      <section className="flex flex-col items-center mb-12 gap-x-12 xl:flex-row">
        <AboutMe />
      </section>
    </main>
  );
}
