import Link from 'next/link';
import AboutMe from '../_components/about-me';
import QuestionsComponents from './questions';
export default function HomePage() {
  return (
    <main>
      <section className="flex flex-row justify-center">
        <img
          src="https://media.licdn.com/dms/image/C4E03AQG-u8i1WZ6xrQ/profile-displayphoto-shrink_800_800/0/1594991389365?e=1723680000&v=beta&t=7mlN1UiwKAXMjHylkra5HQ9bFhXDPIexGi-AwlM-ZTY"
          alt="Jez"
          className="m-2 h-2/5 w-2/5 rounded-full shadow-2xl"
        />
        <div className="content-center p-3">
          <h2 className="my-2 text-center text-2xl font-bold">
            Full-Stack Software Engineer
          </h2>
          <h2 className="my-2 text-center text-xl font-bold">
            Builder | Tinkerer
          </h2>
          <h2 className="my-2 text-center font-semibold italic tracking-wide">
            Always Curious, Forever Hungry.
          </h2>
        </div>
      </section>
      <section className="my-4 p-2">
        <h2 className="pb-4 text-center text-2xl font-bold">About Me</h2>
        <p className="py-1">
          I'm Jez, also known as <span className="italic">tartebabba</span>.
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
