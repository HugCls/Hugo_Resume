import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiNextDotJs, SiTypescript, SiRubygems } from 'react-icons/si'
import { ImGit } from 'react-icons/im'
import { LearningSkillsInterface } from '../../components/section/learningSkills/types'


const learningSkills: LearningSkillsInterface[] = [

  {
    name: 'Ruby on Rails',
    icon: SiRubygems
  },
  {
    name: 'Typescript',
    icon: SiTypescript
  },
  {
    name: 'Next.js',
    icon: SiNextDotJs
  },
]


export default learningSkills
