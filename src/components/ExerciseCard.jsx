import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography, Stack} from '@mui/material'

const ExerciseCard = ({ exercise }) => {

  return (
      <Link to={`/exercise/${exercise.id}`}  className='exercise-card'>
      <img src={exercise.gifUrl} alt={exercise.name} />
      <Stack direction='row'>
        <Button sx={{ ml: '21px', color: '#fff', background: '#ffa9a9', fontSize: '14px',
        borderRadius: '20px', textTransform: 'capitalize'}}>
            {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: '21px', color: '#fff', background: '#fcc757', fontSize: '14px',
        borderRadius: '20px', textTransform: 'capitalize'}}>
            {exercise.target}
        </Button>
      </Stack>
      <Typography mi='21px' mt='11px' pb='10px' color='#000' fontWeight='bold' textTransform='capitalize' fontSize='22px'>
        {exercise.name}
      </Typography>
    </Link>
    
  )
}

export default ExerciseCard
