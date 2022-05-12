import { ProjectsInterface } from "../../components/section/portfolio/types"

const projects: ProjectsInterface[] = [
  {
    name: 'La Voyette',
    description: 'Team project, making a website from scratch for a theatre company. I personnally made all the front.',
    imgSource: '/images/projects/lavoyette.png',
    skills: ['Next.js', 'Material UI', 'Typescript'],
    websiteUrl: 'https://la-voyette.vercel.app/',
    githubUrl: 'https://github.com/FabCom/LaVoyette',
  },
  {
    name: 'Ecris Ton Prénom',
    description: 'My first big team project from scratch. Made in two weeks with two of my colleagues. Despite all the defects, the vibe of creation, the nights awake looking to solve problems made me realize how I love this. It s an educational game for the 3 - 5 y/o.',
    imgSource: '/images/projects/ETP.png',
    skills: ['RoR'],
    websiteUrl: 'https://ecris-ton-prenom.herokuapp.com/',
    githubUrl: 'https://github.com/profprogrammeur/ECRIS_TON_PRENOM',
  },
  {
    name: 'Portfolio',
    description: 'During my studies, I made this portfolio. It is a personal project, but I made it from scratch.',
    imgSource: '/images/projects/pf.png',
    skills: ['React', 'Javascript', 'SCSS'],
    githubUrl: 'https://github.com/HugCls/THP-Next_Portfolio',
  },
  {
    name: 'Fake agency website',
    description: 'During my studies, I made this website for a fake agency. It is a personal project, but I made it from scratch.',
    imgSource: '/images/projects/webagency.png',
    skills: ['React', 'Javascript'],
    githubUrl: 'https://github.com/HugCls/THP-Next_Agency_Website',
  },
  {
    name: 'Notepad',
    description: 'During my studies, I made this Notepad. It is a personal project, but I made it from scratch.',
    imgSource: '/images/projects/notepad.png',
    skills: ['React', 'Javascript'],
    githubUrl: 'https://github.com/HugCls/THP-Next_Bloc-Note',
  },
]


export default projects
