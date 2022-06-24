import React from 'react'
import { Box,Stack,Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscle,equipmentExercise}) => {
  return (
    <Box>
        <Typography variant='h3' mb={4} mt={4}> Exercises Targetting same Muscles Group</Typography>
        <Stack direction='row' sx={{p:'2',position:'relative'}}>
            {targetMuscle.length ? <HorizontalScrollbar data={targetMuscle} />: <Loader />}
        </Stack>

        <Typography variant='h3' mb={4}>Exercises with similar Equipment</Typography>
        <Stack direction='row' sx={{p:'2',position:'relative'}}>
            {equipmentExercise.length ? <HorizontalScrollbar data={equipmentExercise} />: <Loader />}
        </Stack>
    </Box>
  )
}

export default SimilarExercises