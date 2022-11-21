import React from "react";
import { Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, Box, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Portfolio from './section/portfolio/index';


const AlertPf: React.FC = () => {
  const transition = { delay: 0.2, duration: 0.9 };


  return (
    <motion.div
    initial="hidden"
    animate="visible"
    transition={transition}
    variants={{
      hidden: { y: -180, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1
      }
    }}
  >
<a href="https://hugo-pf-vue.vercel.app/">
  <Alert status='error' variant="solid" marginTop="18px">
  <AlertIcon />
   This Portfolio has been deprecated. Please visit my new portfolio  here

</Alert>
</a>

  </motion.div>
)
  }

export default AlertPf;
