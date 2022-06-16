import { IoMdFootball} from 'react-icons/io'
import { HobbiesInterface } from '../../components/section/hobbies/types'
import { FaLaptopCode } from 'react-icons/fa'
import { ImBooks } from 'react-icons/im'
import { BiCameraMovie } from 'react-icons/bi'
import { GiEarthAfricaEurope } from 'react-icons/gi'

const hobbies: HobbiesInterface[] = [

  {
    name: 'Sports',
    description: `I use to play football for 5 years, and Judo for 2 years. As I'm not doing any sports at the moment, I still exercise regularly.`,
    icon: IoMdFootball
  },
  {
    name: 'Technology',
    description: "I keep myself in touch with the latest technologies upon many newsletter, and I'm always learning new things.",
    icon: FaLaptopCode
  },
  {
    name: 'Books',
    description: `I love to read fiction and non-fiction books, I also try to write my own stories.`,
    icon: ImBooks
  },
  {
    name: 'Movies',
    description: "I'm a big fan of cinema, I can enjoy the latests good blockbusters as well as nices oldies or independants movies.",
    icon: BiCameraMovie
  },
  {
    name: 'Volunteering',
    description: "As I was always close to the association, I volunteered myself in South-Africa during 6 months, where I also helped organizing charity events with the 'Alliance Française' of Cape Town.",
    icon: GiEarthAfricaEurope
  }
]


export default hobbies
