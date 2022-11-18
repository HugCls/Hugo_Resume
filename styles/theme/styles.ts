import { mode } from '@chakra-ui/theme-tools';
const styles = {
  global: (props: any) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', '#161414')(props),
      overflowX: 'hidden'
    }
  }
)}

export default styles
