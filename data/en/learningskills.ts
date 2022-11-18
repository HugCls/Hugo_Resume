import { SiNuxtDotJs, SiTypescript, SiRubygems, SiVueDotJs } from 'react-icons/si'
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
    name: 'Nuxt.js',
    icon: SiNuxtDotJs
  },
  { name: 'Vue.js',
  icon: SiVueDotJs },

]


export default learningSkills
