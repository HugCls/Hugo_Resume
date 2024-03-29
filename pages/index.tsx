import React from 'react'

import {Grid} from '@chakra-ui/react';
import Header from '../components/header/'
import AlertPf from '../components/NewPf';
import About from '../components/section/about'
import Portfolio from '../components/section/portfolio'
import Experiences from '../components/section/experiences'
import BeforeExperiences from '../components/section/beforeExperiences'
import Skills from '../components/section/skills'
import Footer from '../components/footer/'
import LearningSkills from '../components/section/learningSkills'

const Home: React.FC = () => {
    return (

        <Grid>
            {/* <AlertPf/> */}

            <Header/>
            <AlertPf/>
            <About/>
            <Portfolio/>
            <Experiences/>
            <BeforeExperiences/>
            <Skills/>
            <LearningSkills/>
            <Footer/>
        </Grid>
    )
}

export default Home
