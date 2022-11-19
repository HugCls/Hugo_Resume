import { Badge, Flex, Box } from '@chakra-ui/react'
import React from 'react'

interface SkillBadge {
  skills: string[]
}

const SkillBadge: React.FC<SkillBadge> = ({ skills }) => {
  if (skills)
    return (
      <Flex flexWrap="wrap" align="flex-end">
        {skills.map(skill => (
          <Box key={skill} mr="2" _last={{ mr: '0' }}>
            <Badge colorScheme="gray">
              {skill}
            </Badge>
          </Box>
        ))}
      </Flex>
    )
  else return <></>
}

export default SkillBadge
