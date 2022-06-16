import React from 'react'
import { Flex } from '@chakra-ui/react'
import SectionSubTitle from '../../section-subttle'
import HobbiesItem from './item'
import hobbies from '../../../data/en/hobbies'

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
      <SectionSubTitle>Skills I'm currently learning</SectionSubTitle>
      <Flex flexWrap="wrap">
        {hobbies.map(learningSkill => (
          <HobbiesItem
            key={learningSkill.name}
            name={learningSkill.name}
            // expTime={skill.expTime}
            icon={learningSkill.icon}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default Hobbies
