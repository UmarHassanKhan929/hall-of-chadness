import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
    const [search, setSearch] = useState("");
    const [bodyParts,setBodyParts] = useState([]);


    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetch(
                `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,
                {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key":
                            "",
                        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
                    },
                }
            );
            const data = await bodyPartsData.json();
            setBodyParts(['all',...data]);
        };

        fetchExercisesData();
    }, []);
    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetch(
                `https://exercisedb.p.rapidapi.com/exercises`,
                {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key":
                            "",
                        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
                    },
                }
            );

            const data = await exercisesData.json();
            const searchedExercises = data.filter(
                (exercise) =>
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch("");
            setExercises(searchedExercises);

            console.log(searchedExercises);
        }
    };

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography
                fontWeight="700"
                sx={{ fontSize: { lg: "44px", xs: "30px" } }}
                mb="50px"
                textAlign="center"
            >
                Workouts for you Kings
            </Typography>

            <Box position="relative" mb="72px">
                <TextField
                    height="76px"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value.toLowerCase());
                    }}
                    color="error"
                    type="text"
                    label="Search Exercises"
                    variant="outlined"
                    sx={{
                        input: { fontWeight: "600" },
                        border: "none",
                        width: { lg: "800px", xs: "350px" },
                        backgroundColor: "#fff",
                        borderRadius: "40px",
                    }}
                />
                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: "#FF2625",
                        color: "#fff",
                        textTransform: "none",
                        width: { lg: "175px", xs: "80px" },
                        fontSize: { lg: "20px", xs: "14px" },
                        height: "56px",
                        position: "absolute",
                        right: "0",
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{position:'relative',width:'100%',p:'20px'}}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
            </Box>
        </Stack>
    );
};

export default SearchExercises;
