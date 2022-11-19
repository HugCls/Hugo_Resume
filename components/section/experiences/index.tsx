import React from 'react'
import { Flex } from '@chakra-ui/react'
import SectionTitle from '../../section-title'
import ExperiencesItem from './item'
import experiences from '../../../data/en/experiences'


const Experiences: React.FC = () => {
  return (
    <Flex
      as="section"
      id="experiences"
      flexDir="column"
      width={{ sm: '95%', md: '90%', lg: '80%' }}
      mx="auto"
      mt="48"
    >
      <SectionTitle>Experiences in code</SectionTitle>

      <Flex flexWrap="wrap">
        {experiences.map(service => (
          <ExperiencesItem
            key={service.name}
            name={service.name}
            description={service.description}
            // expTime={service.expTime}
            icon={service.icon}
          />
        ))}

      </Flex>
    </Flex>
  )
}

export default Experiences
