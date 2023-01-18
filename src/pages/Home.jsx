import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'


const Home = () => {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
        setExercises={setExercises}
      />
      <Exercises 
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>  
  )
}

export default Home;
