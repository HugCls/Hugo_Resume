import React from 'react'
import { Flex, Box, Divider } from '@chakra-ui/react'
import Logo from './logo'
import { navLinks } from './constants'
import ScrollLink from '../scoll-link'
import { motion } from 'framer-motion'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import AlertPf from '../NewPf'

interface MenuItem {
  link?: string
  onClick?: any
}

const MenuItems: React.FC<MenuItem> = ({ children, link, onClick }) => (
  <Box
  color="white"
    mt={{ sm: '6', lg: '0' }}
    mr={'36px'}
    display="block"
    fontWeight="medium"
    fontSize={{ sm: 'xl', lg: 'lg' }}
    textTransform="uppercase"
    _hover={{ cursor: 'pointer' }}
  >
    <ScrollLink to={link} onClick={onClick}>
      {children}
    </ScrollLink>
  </Box>
)

const Header: React.FC = props => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  const transition = { delay: 0.7, duration: 0.9 }

  return (
    <><Box>
      <Flex
        as="nav"
        id="#header"
        position="fixed"
        width="100vw"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        paddingX={{ base: '2em', xl: '15%' }}
        paddingY="1.5em"
        bg="gray.500"
        boxShadow="0px 0px 20px rgb(231, 231, 231)"
        color="mode.text"
        zIndex={999}
        {...props}
      >
        <Flex align="center" mr={5}>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={transition}
            variants={{
              hidden: { x: -150, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1
              }
            }}
          >
            <Logo />
          </motion.div>
        </Flex>

        <Box
          color="white"
          display={{ sm: 'block', lg: 'none' }}
          onClick={handleToggle}
        >
          <motion.svg
            initial="hidden"
            animate="visible"
            transition={transition}
            variants={{
              hidden: { x: 150, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1
              }
            }}
            color="white"
            fill="#fafafa"
            width="22px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </motion.svg>
        </Box>

        <Box
          display={{
            sm: show ? 'block' : 'none',
            lg: 'flex'
          }}
          color="white"
          width={{ sm: 'full', lg: 'auto' }}
          marginTop={{ sm: '20px', lg: '0' }}
        >
          <Divider />

          {navLinks.map(item => (
            <motion.div
              initial="hidden"
              animate="visible"
              transition={transition}
              variants={{
                hidden: { y: -150, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1
                }
              }}
            >
              <MenuItems
                key={item.label}
                onClick={handleToggle}
                link={item.link}
              >
                {item.label}
              </MenuItems>
            </motion.div>
          ))}
        </Box>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={transition}
          variants={{
            hidden: { y: -150, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1
            }
          }}
        >
          <ColorModeSwitcher color="white" />
        </motion.div>
      </Flex>

    </Box><AlertPf /></>
  )
}

export default Header
