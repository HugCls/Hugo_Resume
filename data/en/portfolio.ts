import { ProjectsInterface } from '../../components/section/portfolio/types'

const projects: ProjectsInterface[] = [
  {
    name: "'Mudcat' Ward's Website",
    description:
      "A website for an American bluesman : 'Mudcat Ward'. So far my most challenging project. I had to implement a headless CMS to allow the client to update the website himself. I also had to implement a mailer, I did a custom hook to fetch data and many other things beside the front-end.",
    imgSource: '/images/projects/mmw.png',
    skills: [
      'React',
      'Next.js',
      'Node.js',
      'TailwindCSS',
      'Headless CMS',
      'Mailer'
    ],
    websiteUrl: 'https://michaelmudcatward.com/',
    githubUrl: 'https://github.com/HugCls/MWprojet'
  },
  {
    name: 'La Voyette',
    description:
      'Originally a team project for a theatre company, they migrated recently so i asked them to kept an early version. I personnaly made all the front.',
    imgSource: '/images/projects/lavoyette.png',
    skills: ['Next.js', 'Material UI', 'Typescript'],
    websiteUrl: 'https://la-voyette.vercel.app/',
    githubUrl: 'https://github.com/FabCom/LaVoyette'
  },

  {
    name: 'Portfolio',
    description:
      'This is a portfolio website. It was originally for a client but the projects in it are secrete for now. So I decided to change it and left it as a template.',
    imgSource: '/images/projects/pf.png',
    skills: ['React', 'Javascript', 'SCSS'],
    websiteUrl: 'https://HugCls.github.io/pf-sass/',
    githubUrl: 'https://github.com/HugCls/pf-sass'
  },
  {
    name: 'Other projects',
    description:
      'Feel free to check my github for more projects, these are mainly school projects',
    imgSource: '/images/projects/thp.png',
    skills: ['Ruby on Rails', 'React', 'Javascript', 'SCSS'],
    githubUrl: 'https://github.com/HugCls'
  }
]

export default projects
