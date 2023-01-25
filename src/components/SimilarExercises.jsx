import React from 'react'
import {Box, Typography, Stack} from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercise, equipmentExercise}) => {
  return (
    <Box sx={{ mt : { lg: '100px', xs:"0"}}}>
      <Typography variant="h3" mb={5} sx={{textAlign: 'center'}}>
        Watch similar target muscle exercises
      </Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative'}} >
          {targetMuscleExercise.length ? <HorizontalScrollBar data={targetMuscleExercise} /> 
            : <Loader />}
      </Stack>
      <Typography variant="h3" mb={5} mt={12} sx={{textAlign: 'center'}}>
        Watch similar equipment exercises
      </Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative'}} >
          {equipmentExercise.length ? <HorizontalScrollBar data={targetMuscleExercise} /> 
            : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
