import ProjectCards from '../projects/project-cards';
import ContainerTopBorder from './container-top-border';

export default function Projects() {
  return (
    <div className="flex flex-col mb-12 gap-x-12 w-full xl:flex-row xl:content-evenly">
      <div className="my-1 pt-4">
      <h1 className="pb-6 text-2xl font-extrabold leading-9 tracking-tight  text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        My Projects
      </h1>
      <ContainerTopBorder>
      <p className="my-4 text-lg">
        Here's a list of projects i'm currently working on or have previously
        built.
      </p>
      </ContainerTopBorder>
      </div>
      <ProjectCards />
    </div>
  );
}
