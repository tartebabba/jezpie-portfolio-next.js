import Link from 'next/link';
import AboutMe from '../_components/about-me';
export default function HomePage() {
  return (
    <main>
      <section className="flex flex-row justify-center">
        <img
          src="https://media.licdn.com/dms/image/C4E03AQG-u8i1WZ6xrQ/profile-displayphoto-shrink_800_800/0/1594991389365?e=1723680000&v=beta&t=7mlN1UiwKAXMjHylkra5HQ9bFhXDPIexGi-AwlM-ZTY"
          alt="Jez"
          className="m-2 h-2/5 w-2/5 rounded-full"
        />
        <div className="content-center p-3">
          <h2 className="text-2xl font-bold">Full-Stack Software Engineer</h2>
          <h2 className="text-xl font-bold">Builder | Tinkerer</h2>
          <h2 className="my-2 font-semibold italic tracking-wide">
            Always Curious, Forever Hungry.
          </h2>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold">About Me</h2>
        <p></p>
      </section>
    </main>
  );
}
