import { FaUserGraduate } from 'react-icons/fa'
import { FaTheaterMasks, FaDev } from 'react-icons/fa'
import { ExperiencesInterface } from '../../components/section/experiences/types'
import getExperienceTime from '../../utils/getExperienceTime'

const experiences: ExperiencesInterface[] = [
  {
    name: 'Freelance',
    description:
      'I am currently working as a freelance web developer. I am looking for new projects.',
    // expTime: () => getExperienceTime(new Date('2022-05-10')),
    icon: FaDev
  },
  {
    name: 'La Voyette',
    description:
      'Team project for a theater company, making their website from scratch.',
    // expTime: () => getExperienceTime(new Date('2018-10-10')),
    icon: FaTheaterMasks
  },

  {
    name: 'The Hacking Project',
    description:
      'After six months of intensive hard work and coding, I finally gratuated from the Hacking Project.',
    // expTime: () => getExperienceTime(new Date('2018-10-10')),
    icon: FaUserGraduate
  }
]

export default experiences
