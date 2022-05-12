import { FaUserGraduate } from 'react-icons/fa'
import { FaTheaterMasks } from 'react-icons/fa'
import { ExperiencesInterface } from '../../components/section/experiences/types'
// import getExperienceTime from '../../utils/getExperienceTime'

const experiences: ExperiencesInterface[] = [
  {
    name: 'La Voyette',
    description: 'Team project for a theater company, making their website from scratch, since march 2022',
    // expTime: () => getExperienceTime(new Date("2018-10-10")),
    icon: FaTheaterMasks
  },

  {
    name: 'The Hacking Project',
    description: 'After six months of intensive hard work and coding, I finally gratuated from the Hacking Project.',
    // expTime: () => getExperienceTime(new Date("2018-10-10")),
    icon: FaUserGraduate
  },
 ]

  export default experiences


