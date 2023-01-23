import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercise, setTargetMuscleExercise] = useState([]);
  const [equipmentExercise, setEquipmentExercise] = useState([]);
  const { id } = useParams();

  useEffect(() => {

    const fetchExerciseData = async () => {
      const exerciseDUrl = 'https://exercisedb.p.rapidapi.com';
      const YtSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseData = await fetchData(`${exerciseDUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseData);

      const youtubeData = await fetchData(`${YtSearchUrl}/search?query=${exerciseData.name}`, youtubeOptions);
      setExerciseVideos(youtubeData.contents)

      const targetMuscleData = await fetchData(`${exerciseDUrl}/exercises/target/${exerciseData.target}`, exerciseOptions)
      setTargetMuscleExercise(targetMuscleData);

      const equipmentData = await fetchData(`${exerciseDUrl}/exercises/equipment/${exerciseData.equipment}`, exerciseOptions)
      setEquipmentExercise(equipmentData)

    }

    fetchExerciseData();
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercise={targetMuscleExercise} equipmentExercise={equipmentExercise} />
    </Box>
  )
}

export default ExerciseDetail
