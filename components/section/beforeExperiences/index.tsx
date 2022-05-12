import React from 'react'
import { Flex } from '@chakra-ui/react'
import experiences from '../../../data/en/experiences'
import SectionSubTitle from '../../section-subttle'
import BeforeExperiencesItem from './item'
import beforeExperiences from '../../../data/en/beforeexperiences';


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
      <SectionSubTitle>And before that ...</SectionSubTitle>

      <Flex flexWrap="wrap">
        {beforeExperiences.map(beforeExperiences => (
          <BeforeExperiencesItem
            key={beforeExperiences.name}
            name={beforeExperiences.name}
            description={beforeExperiences.description}
            icon={beforeExperiences.icon}
          />
        ))}

      </Flex>
    </Flex>
  )
}

export default Experiences
