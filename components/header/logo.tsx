import React from 'react'
import { Heading, Link, Text } from '@chakra-ui/react'

const Logo: React.FC = () => {
  return (
    <Link href="#" _hover={{ textDecor: 'none' }}>
      <Heading as="h1" fontSize="2xl" color="white">
        <Text display="inline" fontWeight="bold">
          Hugo Claisse
        </Text>
      </Heading>
    </Link>
  )
}

export default Logo
