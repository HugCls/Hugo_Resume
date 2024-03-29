import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import { BeforeExperiencesInterface } from './types';


const BeforeExperiencesItem: React.FC<BeforeExperiencesInterface> = ({
  name,
  description,
  icon
}) => {
  return (
    <Box
      as="article"
      display="flex"
      flexDir="column"
      textAlign="center"
      p="10"
      bg="mode.bg"
      borderRadius="lg"
      m="3"
      flexBasis="250px"
      flexGrow={1}
      boxShadow="0px 0px 20px rgb(231, 231, 231)"
      transition="all 0.5s"
      _hover={{
        transform: 'scale(1.05)'
      }}
    >
      <Box as={icon} boxSize="50px" color="blue.500" alignSelf="center" />
      <Heading as="h2" fontSize="xl" py="5">
        {name}
      </Heading>
      <Text lineHeight="tall" fontWeight="light" fontSize="lg">
        {description}
      </Text>
    </Box>
  )
}

export default BeforeExperiencesItem
