import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscle, setTargetMuscle] = useState([]);
    const [equipmentExercise, setEquipmentExercise] = useState([]);


    const { id } = useParams();

    useEffect(() => {
        const fetchExerciseDetail = async () => {
            const exerciseDBUrl = "https://exercisedb.p.rapidapi.com";
            const youtubeSearchUrl =
                "https://youtube-search-and-download.p.rapidapi.com";

            const edbuoptions = {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key":
                        "",
                    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
                },
            };
            const ysuoptions = {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key":
                        "",
                    "X-RapidAPI-Host":
                        "youtube-search-and-download.p.rapidapi.com",
                },
            };

            const exerciseData = await fetch(`${exerciseDBUrl}/exercises/exercise/${id}`, edbuoptions);
            const exerciseDetailData = await exerciseData.json();
            setExerciseDetail(exerciseDetailData);

            const exerciseVData = await fetch(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, ysuoptions);
            const exerciseVideoData = await exerciseVData.json();
            setExerciseVideos(exerciseVideoData.contents);

            const targetMuscleData = await fetch(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`, edbuoptions);
            const targetMuscleExerciseData = await targetMuscleData.json();
            setTargetMuscle(targetMuscleExerciseData);

            const equipmentExercises = await fetch(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`, edbuoptions);
            const equipmentExercisesData = await equipmentExercises.json();
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
