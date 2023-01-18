import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import HeroBannerImg from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{ 
      mt: { lg: '212px', xs: '70px'},
      ml: {sm: '50px'}
    }} position='relative' p='20px'>
      <Typography color='#FF2625' fontSize='26px' fontWeight='600'>
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '30px'}}} mb='23px' mt='30px'>
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='34px' mb={5}>
        Check out the most effective exercises
      </Typography>
      <Button href='#exercises' variant="contained" sx={{backgroundColor: '#FF2625', padding: '10px'}}>Explore Exercises</Button>
      <Typography
        fontWeight={600}
        color= '#FF2625'
        sx={{
          opacity: 0.1,
          display: {lg: 'block', xs: 'none'}
        }}
        fontSize='200px'
      >
        Exercise
      </Typography>
      <img src={HeroBannerImg} alt='banner' className='hero-banner-img'/>
    </Box>  
  )
}

export default HeroBanner
