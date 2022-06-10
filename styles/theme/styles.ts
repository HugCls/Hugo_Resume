import { mode } from '@chakra-ui/theme-tools';
const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('white', '#161414')(props),
      overflowX: 'hidden'
    }
  }
)}

export default styles
