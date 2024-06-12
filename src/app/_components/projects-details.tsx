import ProjectCards from './project-cards';

export default function Projects() {
  return (
    <div className="flex flex-col mb-12 gap-x-12 xl:flex-row w-full">
      <h1 className="pb-6 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        My Projects
      </h1>
      <div className="border-b-black border-b"></div>
      <p className="my-4 text-lg">
        Here's a list of projects i'm currently working on or have previously
        built.
      </p>
      <ProjectCards />
    </div>
  );
}
