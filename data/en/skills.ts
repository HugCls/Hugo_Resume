import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiJavascript, SiNextDotJs } from 'react-icons/si'
import { ImGit } from 'react-icons/im'
import { SkillsInterface } from '../../components/section/skills/types'

const skills: SkillsInterface[] = [
  {
    name: 'Next.js',
    icon: SiNextDotJs
  },
  {
    name: 'React.js',
    icon: FaReact
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
    name: 'HTML',
    // expTime: () => getExperienceTime(new Date("2018-10-10")),
    icon: FaHtml5
  },
  {
    name: 'CSS',
    icon: FaCss3
  },
  {
    name: 'JavaScript',
    icon: SiJavascript
  },
]


export default skills
