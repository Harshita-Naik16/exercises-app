import { Stack, TextField, Typography, Box, Button } from '@mui/material'
import React, { useState, useEffect, useLayoutEffect} from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyPartsData = async () => {
      let bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts(['all', ...bodyPartsData])
      console.log(bodyPartsData)
    }

    fetchBodyPartsData();

  }, []);

  const handleSearch = async () => {
    if(search) {
      let exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )

      setSearch('');
      setExercises(searchedExercises)
    }
  }

  return (
    <Stack alignItems='center' justifyContent='center' mt='37px' p='20px'>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' }}} textAlign='center'>
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position='relative' mt='32px'>
        <TextField 
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: {lg: '800px', xs: '320px'},
            bgcolor: '#fff',
            borderRadius: '40px'
          }}
          type='text'
          value={search}
          placeholder='Search Exercises'
          height='76px'
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button className='search-btn'
          sx={{ 
            backgroundColor: '#ff2625', 
            color: '#fff', 
            textTransform: 'none',
            width: {lg: '175px', xs: '80px'},
            fontSize: {lg: '20px', xs: '14px'},
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >Search</Button>
      </Box> 
      <Box position='relative' width='100%' p='20px'>
        <HorizontalScrollBar 
          data={bodyParts} 
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyPart={true}
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises
