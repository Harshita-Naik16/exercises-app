import React, { useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'



const Exercises = ({ exercises, setExercises, bodypart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const totalExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value)

    window.scroll({ top: 1800, behavior: 'smooth'})
  }

  return (
    <Box id='exercises'
      sx={{ mt: { lg: '110px'}}}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px'}}} flexWrap='wrap' justifyContent='center'>
        {totalExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
          {exercises.length > exercisesPerPage && (
            <Pagination 
              color='standard'
              shape='rounded'
              count={Math.ceil(exercises.length / 9)}
              size='large'
              onChange={(e, value) => paginate(e, value)}
              page={currentPage}
            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises