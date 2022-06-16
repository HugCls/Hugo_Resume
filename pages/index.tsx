import React from 'react'

import { Grid } from '@chakra-ui/react'
import Header from '../components/header/'
import About from '../components/section/about'
import Portfolio from '../components/section/portfolio'
import Experiences from '../components/section/experiences'
import BeforeExperiences from '../components/section/beforeExperiences'
import Skills from '../components/section/skills'
import Footer from '../components/footer/'
import LearningSkills from '../components/section/learningSkills'
import Hobbies from '../components/section/hobbies'

const Home: React.FC = () => {
  return (
    <Grid bg="#fafafa">
      <Header />
      <About />
      <Portfolio />
      <Experiences />
      <BeforeExperiences />
      <Skills />
      <LearningSkills />
      <Hobbies />
      <Footer />
    </Grid>
  )
}

export default Home
