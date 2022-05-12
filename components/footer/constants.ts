import { IconType } from "react-icons/lib";

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export interface footerSocialLinksProps {
  label: string
  link: string,
  icon: IconType
}

export const footerSocialLinks: footerSocialLinksProps[] = [
  {
    label: 'Github Profile',
    link: 'https://github.com/HugCls',
    icon: FaGithub
  },
  {
    label: 'Linkedin Profile',
    link: 'https://www.linkedin.com/in/hugo-claisse-b9a22a222/',
    icon: FaLinkedin
  },
  {
    label: 'Mail Me',
    link: 'mailto:hugoclaisse92@gmail.com',
    icon: SiGmail
  },
]
