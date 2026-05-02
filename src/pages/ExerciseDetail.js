import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import {
    fetchExerciseById,
    fetchYoutubeVideos,
    fetchExercisesByTarget,
    fetchExercisesByEquipment,
} from "../utils/api";

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscle, setTargetMuscle] = useState([]);
    const [equipmentExercise, setEquipmentExercise] = useState([]);


    const { id } = useParams();

    useEffect(() => {
        const fetchExerciseDetail = async () => {
            const exerciseDetailData = await fetchExerciseById(id);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideoData = await fetchYoutubeVideos(exerciseDetailData.name);
            setExerciseVideos(exerciseVideoData.contents);

            const targetMuscleExerciseData = await fetchExercisesByTarget(exerciseDetailData.target);
            setTargetMuscle(targetMuscleExerciseData);

            const equipmentExercisesData = await fetchExercisesByEquipment(exerciseDetailData.equipment);
            setEquipmentExercise(equipmentExercisesData);


        };

        fetchExerciseDetail();
    }, [id]);

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
            <SimilarExercises targetMuscle={targetMuscle} equipmentExercise={equipmentExercise}/>
        </Box>
    );
};

export default ExerciseDetail;
