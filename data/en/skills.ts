import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiNextDotJs, SiTypescript, SiRubygems } from 'react-icons/si'
import { ImGit } from 'react-icons/im'
import { SkillsInterface } from '../../components/section/skills/types'

const skills: SkillsInterface[] = [
  {
    name: 'React.js',
    icon: FaReact
  },
  {
    name: 'Next.js',
    icon: SiNextDotJs
  },
  {
    name: 'Node.js',
    icon: FaNodeJs
  },
  {
    name: 'Git',
    icon: ImGit
  },
  {
    name: 'Ruby on Rails',
    icon: SiRubygems
  },
  {
    name: 'Typescript',
    icon: SiTypescript
  },
  {
    name: 'HTML',
    // expTime: () => getExperienceTime(new Date("2018-10-10")),
    icon: FaHtml5
  },
  {
    name: 'CSS',
    icon: FaCss3
  },
]


export default skills
