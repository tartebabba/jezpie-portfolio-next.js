import Link from 'next/link';
import QuestionsComponents from './questions';
import ContainerTopBorder from '../_components/container-top-border';
import Tagline from '../_components/tagline';

export default function HomePage() {
  return (
    <main>
      <section className="mb-12 flex w-full flex-col justify-center gap-x-12 border-b border-b-black pb-4 xl:flex-row xl:content-evenly dark:border-b-slate-50">
        <img
          src="https://media.licdn.com/dms/image/C4E03AQG-u8i1WZ6xrQ/profile-displayphoto-shrink_800_800/0/1594991389365?e=1723680000&v=beta&t=7mlN1UiwKAXMjHylkra5HQ9bFhXDPIexGi-AwlM-ZTY"
          alt="Jez"
          className="m-2 h-2/6 w-2/6 rounded-full"
        />
        <Tagline />
      </section>
      <section className="my-4">
        <h2 className="mt-4 pb-4 text-center text-2xl font-bold">About Me</h2>
        <p className="py-1">
          I'm{' '}
          <Link
            className="font-bold text-[hsl(280,100%,70%)]"
            href="https://www.linkedin.com/in/jezpiedad/"
          >
            Jez
          </Link>
          , also known as{' '}
          <Link
            className="italic text-[hsl(280,100%,70%)]"
            href="https://github.com/tartebabba"
          >
            tartebabba
          </Link>
          .
        </p>
        <p className="py-1">Geneticist turned Software Engineer.</p>
        <p className="py-1">
          I use to help build start-ups and products with data and business
          insights. Now I build them with code too.
        </p>
        <p className="py-1">
          <span className="font-bold">Based in:</span> 📍 Yorkshire.
        </p>
        <p className="py-1">
          <span className="font-bold">Currently focused on:</span> Building my
          career in tech and continuing to develop my programming chops, so that
          I can build interesting, impactful products, and work to solve
          difficult challenges.
        </p>
      </section>
      <QuestionsComponents />
    </main>
  );
}
