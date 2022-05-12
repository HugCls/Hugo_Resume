import React from 'react'

import { Grid } from '@chakra-ui/react'
import Header from '../components/header/'
import About from '../components/section/about'
import Portfolio from '../components/section/portfolio'
import Experiences from '../components/section/experiences'
import BeforeExperiences from '../components/section/beforeExperiences'
import Skills from '../components/section/skills'
import Footer from '../components/footer/'

const Home: React.FC = () => {
  return (
    <Grid bg="#fafafa">
      <Header />
      <About />
      <Portfolio />
      <Experiences />
      <BeforeExperiences />
      <Skills />
      <Footer />
    </Grid>
  )
}

export default Home
