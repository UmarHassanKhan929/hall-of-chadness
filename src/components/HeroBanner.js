import React from 'react'
import {Box,Stack,Typography,Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px',xs:'70px'},ml:{sm:'50px'}}} position='relative' p='20px'>
        <Typography color='#d32f2f' fontWeight='600' fontSize='28px'>
            Hall of Chadness
        </Typography>
        <Typography fontWeight='700' sx={{fontSize:{lg:'44px',xs:'40px'}}} mb='23px' mt='30px'>
            Sweat, Smile <br/> Repeat.
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={2}>
            Check out the most effective exercises for your body.
        </Typography>
        <Button variant='contained' color='error' href='#exercises'>
            Explore Exercises
        </Button>
        <Typography fontWeight={600} color='#ff2625' sx={{opacity:0.1,display:{lg:'block',xs:'none'}}} fontSize='200px'>
            Exercises
        </Typography>
        <img src={HeroBannerImage} alt="Hero Banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner