import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
} from '@radix-ui/react-icons';
import projects from '../projects/project-details';
import Tags from './tags';
import CardTopBorderFlex from './card-top-border-flex';

// array of project details, id, name, github, description, image, website link and tags

export default function ProjectCards() {
  return (
    <div className="my-1 grid grid-cols-2">
      {projects.map((project) => (
        <div
          key={project.id}
          className="border-grey-300 m-4 rounded-md border-2 p-3"
        >
          <img
            src={project.image}
            alt={project.name}
            className="aspect-video w-full rounded-lg object-cover"
          />
          <div className="my-2 flex items-center justify-between px-1">
            {project.complete ? (
              <div style={{ color: 'green' }} className="m-1 flex items-center">
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
              <a href={project.website} className="text-xl">
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
          <h2 className="text-3xl font-bold">{project.name}</h2>
          <p className="my-2 text-slate-600">{project.description}</p>
          <CardTopBorderFlex>
            {project.tags.map((tag) => (
              <Tags key={tag} tag={tag} />
            ))}
          </CardTopBorderFlex>
        </div>
      ))}
    </div>
  );
}
