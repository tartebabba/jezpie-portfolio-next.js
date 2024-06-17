import Link from 'next/link';
import AboutMe from '../_components/about-me';
export default function HomePage() {
  return (
    <main className="">
      <section className="flex flex-row">
        <img src="https://media.licdn.com/dms/image/C4E03AQG-u8i1WZ6xrQ/profile-displayphoto-shrink_800_800/0/1594991389365?e=1723680000&v=beta&t=7mlN1UiwKAXMjHylkra5HQ9bFhXDPIexGi-AwlM-ZTY" alt="Jez" className="rounded-full w-2/5 h-2/5 m-2" />
        <h1 className="font-extrabold text-xl">
        Hi, I'm <span className="text-[#DE1D8D]">Jez</span>
      </h1>
        <h2 className="font-bold text-2xl">
        Full-Stack Software Engineer | Builder | Tinkerer
      </h2>
      <h2 className="my-2 font-semibold tracking-wide">
        Always Curious, Forever Hungry.
      </h2>
      </section>
    </main>
  );
}
