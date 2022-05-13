import React from 'react'
import { Flex } from '@chakra-ui/react'
import SectionSubTitle from '../../section-subttle'
import LearningSkillsItem from './item'
import learningSkills from '../../../data/en/learningskills'

const Skills: React.FC = () => {
  return (
    <Flex
      as="section"
      id="skills"
      flexDir="column"
      width={{ sm: '95%', md: '90%', lg: '80%' }}
      mx="auto"
      mt="48"
    >
      <SectionSubTitle>Skills I'm currently learning</SectionSubTitle>
      <Flex flexWrap="wrap">
        {learningSkills.map(learningSkill => (
          <LearningSkillsItem
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

export default Skills
