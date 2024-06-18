const projects = [
  {
    id: 1,
    name: 'Fakeddit',
    github: 'https://github.com',
    description:
      'My first full-stack project done during my time at Northcoders. A news site using Reddit as light inspiration.',
    image: '',
    // website: 'https://www.google.com',
    tags: ['react', 'node.js', 'axios', 'tailwindCSS', 'express', 'postgresql'],
    complete: true,
  },
  {
    id: 2,
    name: 'Music Clash',
    github: 'https://github.com/tartebabba/music-clash',
    description:
      'Inspired by the popular word relationship game, Connections by the Times. Music Clash is a music version with the added ability to use your own Spotify Music Library. Currently an MVP.',
    image: '',
    // website: 'https://www.google.com',
    tags: ['react-native', 'typescript', 'supabase', 'expo', 'OAuth', 'Auth'],
    complete: true,
  },
  {
    id: 3,
    name: 'Music-Clash Web',
    github: 'https://github.com/tartebabba/music-clash-web',
    description: 'A rebuild of the Music Clash app but for the web.',
    image: '',
    // website: 'https://www.google.com',
    tags: ['react', 'javascript', 'typescript', 'tailwindCSS'],
    complete: false,
  },
  {
    id: 4,
    name: 'Portfolio',
    github: 'https://github.com/tartebabba/jezpie-portfolio-next.js',
    description:
      'My portfolio built with Next.js to learn the differences between React and Next.js. Watch out, I have something else planned for this too.',
    image: '/src/app/projects/jezpie.dev - portfolio.png',
    website: 'www.jezpie.dev',
    tags: ['next.js', 'typescript', 'tailwindCSS'],
    complete: false,
  },
];

export default projects;
