import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/react'
import { HobbiesInterface } from './types'

const HobbiesItem: React.FC<HobbiesInterface> = ({
  name,
  description,
  icon
}) => {
  return (
    <Box
      display="flex"
      as="article"
      flexDir="column"
      textAlign="center"
      p="10"
      bg="white"
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
      <Box as={icon} w="50px" h="50px" color="blue.500" alignSelf="center" />
      <Heading as="h2" fontSize="xl" py="5">
        {name}
      </Heading>
      <Text lineHeight="tall" fontWeight="light" fontSize="lg">
        {description}
      </Text>
    </Box>
  )
}

export default HobbiesItem
