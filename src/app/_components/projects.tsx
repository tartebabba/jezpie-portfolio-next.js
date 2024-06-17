import ProjectCards from '../projects/project-cards';
import ContainerTopBorder from './container-top-border';

export default function Projects() {
  return (
    <div className="mb-12 flex w-full flex-col gap-x-12 xl:flex-row xl:content-evenly">
      <div className="my-1 pt-4">
        <h1 className="md:leading-14 pb-6 text-2xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl">
          My Projects
        </h1>
        <ContainerTopBorder>
          <p className="my-4 text-lg">
            Here's a list of projects i'm currently working on or have
            previously built.
          </p>
        </ContainerTopBorder>
      </div>
      <ProjectCards />
    </div>
  );
}
