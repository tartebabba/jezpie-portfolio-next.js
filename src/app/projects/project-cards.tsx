import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
} from '@radix-ui/react-icons';
import projects from './project-details';
import Tags from '../_components/tags';
import CardTopBorderFlex from '../_components/card-top-border-flex';

export default function ProjectCards() {
  return (
    <div className="container py-12">
      <div className="-m-4 flex flex-wrap">
        {projects.map((project) => (
          <div
            key={project.id}
            className="m-4 h-full w-full rounded-lg border-2 border-gray-300 p-3 dark:border-gray-600"
          >
            {/* <img
            src={project.image}
            alt={project.name}
            width={500}
            height={500}
            className="aspect-video w-full rounded-lg object-cover"
          /> */}
            <div className="my-2 flex items-center justify-between px-1">
              {project.complete ? (
                <div
                  style={{ color: 'green' }}
                  className="m-1 flex items-center"
                >
                  <CheckCircledIcon className="fill-green mr-2" />
                  <p className="text-sm">Complete</p>
                </div>
              ) : (
                <div
                  style={{ color: 'orange' }}
                  className="m-1 flex items-center"
                >
                  <ExclamationTriangleIcon className="fill-red mr-2" />
                  <p className="text-sm">In Progress</p>
                </div>
              )}
              <div className="flex space-x-2">
                <a href={project.github}>
                  <GitHubLogoIcon className="fill-green" />
                </a>
                {project.website && (
                  <a href={project.website} className="text-xl">
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </div>
            <h2 className="text-3xl sm:text-2xl font-bold hover:text-[hsl(280,100%,70%)]">
              {project.name}
            </h2>
            <p className="my-2">{project.description}</p>
            <CardTopBorderFlex>
              {project.tags.map((tag) => (
                <Tags key={tag} tag={tag} />
              ))}
            </CardTopBorderFlex>
          </div>
        ))}
      </div>
    </div>
  );
}


