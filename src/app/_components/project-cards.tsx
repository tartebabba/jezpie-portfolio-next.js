import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
} from '@radix-ui/react-icons';

// array of project details, id, name, github, description, image, website link and tags
const projects = [
  {
    id: 1,
    name: 'Fakeddit',
    github: 'https://github.com',
    description:
      'My first full-stack project done during my time at Northcoders. A news site using Reddit as light inspiration.',
    image: 'https://via.placeholder.com/150',
    website: 'https://www.google.com',
    tags: ['react', 'node.js', 'axios', 'tailwindCSS', 'express', 'postgresql'],
    complete: true,
  },
  {
    id: 2,
    name: 'Music Clash',
    github: 'https://github.com',
    description:
      'Inspired by the popular word relationship game, Connections by the Times. Music Clash is a music version with the added ability to use your own Spotify Music Library',
    image: 'https://via.placeholder.com/150',
    website: 'https://www.google.com',
    tags: ['react-native', 'typescript', 'supabase', 'expo', 'OAuth', 'Auth'],
    complete: false,
  },
  {
    id: 3,
    name: 'Music-Clash Web',
    github: 'https://github.com',
    description: 'A rebuild of the Music Clash app but for the web.',
    image:
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG11c2ljfGVufDB8fDB8fHww',
    website: 'https://www.google.com',
    tags: ['react', 'javascript', 'html', 'css'],
    complete: true,
  },
  {
    id: 4,
    name: 'Portfolio',
    github: 'https://github.com',
    description:
      'My portfolio built with Next.js to learn the differences between React and Next.js. Watch out, I have something else planned for this too.',
    image: 'https://via.placeholder.com/150',
    website: 'https://www.google.com',
    tags: ['next.js', 'typescript', 'tailwindCSS'],
    complete: false,
  },
];

export default function ProjectCards() {
  return (
    <div className=" grid grid-cols-2 my-1">
      {projects.map((project) => (
        <div
          key={project.id}
          className="border-grey-300 border-2 rounded-md m-4 p-3"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full rounded-lg object-cover aspect-video "
          />
          <div className="my-2 flex justify-between items-center px-1">
            {project.complete ? (
              <div style={{ color: 'green' }} className="flex items-center m-1">
                <CheckCircledIcon className="fill-green mr-2" />
                <p className="text-sm ">Complete</p>
              </div>
            ) : (
              <div
                style={{ color: 'orange' }}
                className="flex m-1 items-center"
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
          <p className="text-slate-600 my-2">{project.description}</p>
          <div className="flex flex-wrap border-t py-2">
            {project.tags.map((tag) => (
              <p
                key={tag}
                className="bg-slate-200  m-1 px-1 rounded-md text-sm"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
