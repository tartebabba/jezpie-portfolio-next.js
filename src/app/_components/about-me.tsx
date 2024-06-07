'use client';
import { RoughNotation } from 'react-rough-notation';

export default function AboutMe() {
  'use client';

  return (
    <div className="pt-6">
      <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Hi, I'm <span className="text-[#DE1D8D]">Jez</span>
      </h1>
      <h2 className="font-bold tracking-widest">
        Full-Stack Software Engineer | Builder | Tinkerer
      </h2>
      <h2 className="my-2 font-semibold tracking-wide">
        Always Curious, Forever Hungry.
      </h2>
      <p className="pt-10 text-lg leading-7 text-slate-600 dark:text-slate-300">
        This is my little slice of the internet to show my journey of building
        software in public, where I share my projects, progress, and the lessons
        learned along the way - all{' '}
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
        {''}
        for you to see and enjoy!
      </p>
    </div>
  );
}
