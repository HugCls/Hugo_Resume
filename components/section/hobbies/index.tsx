import React from 'react'
import { Flex } from '@chakra-ui/react'
import HobbiesItem from './item'
import hobbies from '../../../data/en/hobbies'
import SectionTitle from '../../section-title'

const Hobbies: React.FC = () => {
  return (
    <Flex
      as="section"
      id="hobbies"
      flexDir="column"
      width={{ sm: '95%', md: '90%', lg: '80%' }}
      mx="auto"
      mt="48"
    >
      <SectionTitle>Hobbies</SectionTitle>

      <Flex flexWrap="wrap">
        {hobbies.map(hobbies => (
          <HobbiesItem
            key={hobbies.name}
            name={hobbies.name}
            description={hobbies.description}
            icon={hobbies.icon}
          />
        ))}

      </Flex>
    </Flex>
  )
}

export default Hobbies
