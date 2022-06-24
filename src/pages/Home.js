import React,{useState} from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import Loader from '../components/Loader'

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
        <HeroBanner/>
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        {exercises.length>0?<Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>:<Loader/>}
    </Box>
  ) 
}

export default Home