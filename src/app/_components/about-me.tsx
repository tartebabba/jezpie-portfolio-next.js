'use client';
import { RoughNotation } from 'react-rough-notation';
import Tagline from './tagline';
import Link from 'next/link';
import ContainerTopBorder from './container-top-border';

export default function AboutMe() {
  'use client';
  const linkStyles = 'mr-2 font-bold hover:text-[hsl(280,100%,70%)]';

  return (
    <div className="pt-6">
      <h1 className="md:leading-14 pb-6 text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl">
        Hi, I'm{' '}
        <Link
          href="https://www.linkedin.com/in/jezpiedad/"
          className="text-[#DE1D8D]"
        >
          Jez
        </Link>
        .
      </h1>
      <Tagline />
      <h3 className="pt-5 text-lg leading-7">
        Yorkshire-based Software Engineer with a focus on developing impactful
        products. I used to shape products and teams with data and business
        insights; now I build them with code too. Always eager to learn, build,
        and solve problems.
      </h3>
      <p className="pt-10 text-lg leading-7">
        This is my little slice of the internet to show my journey of learning
        and building software in public, where I share my projects, progress,
        and the lessons learned along the way - all{' '}
        <RoughNotation
          animate={true}
          type="box"
          show={true}
          color="#DE1D8D"
          animationDelay={1000}
          animationDuration={2500}
        >
          out in the open&nbsp;
        </RoughNotation>
        for you to see and enjoy!
      </p>
      <div className="my-2 text-right">
        <Link href="https://github.com/tartebabba" className={linkStyles}>
          → GitHub.
        </Link>
        <Link
          href="https://www.linkedin.com/in/jezpiedad/"
          className={linkStyles}
        >
          → LinkedIn.
        </Link>
      </div>
    </div>
  );
}
