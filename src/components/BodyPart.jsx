import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, bodyPart, setBodyPart}) => {
  return (
    <Stack
        type='button'
        justifyContent='center'
        alignItems='center'
        m='0 40px'
        className='bodyPart-card'
        sx={{
            borderTop: bodyPart === item ? '4px solid #ff2625' : 'none',
            backgroundColor: '#fff',
            width: '270px',
            height: '270px',
            cursor: 'pointer',
            gap: '47px'
        }}
        onClick={() => {
          setBodyPart(item)
          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
        }}
    >
       <img src={Icon} alt='dumbbel' width='40px' height='40px' />
       <Typography>{item}</Typography>
    </Stack>
  )
}

export default BodyPart
