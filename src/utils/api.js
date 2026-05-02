const RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY;

const EXERCISE_DB_BASE_URL = "https://exercisedb.p.rapidapi.com";
const YOUTUBE_SEARCH_BASE_URL = "https://youtube-search-and-download.p.rapidapi.com";

const exerciseDbHeaders = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
};

const youtubeSearchHeaders = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
};

export const fetchExerciseById = async (id) => {
    const response = await fetch(`${EXERCISE_DB_BASE_URL}/exercises/exercise/${id}`, exerciseDbHeaders);
    return await response.json();
};

export const fetchYoutubeVideos = async (query) => {
    const response = await fetch(`${YOUTUBE_SEARCH_BASE_URL}/search?query=${query}`, youtubeSearchHeaders);
    return await response.json();
};

export const fetchExercisesByTarget = async (target) => {
    const response = await fetch(`${EXERCISE_DB_BASE_URL}/exercises/target/${target}`, exerciseDbHeaders);
    return await response.json();
};

export const fetchExercisesByEquipment = async (equipment) => {
    const response = await fetch(`${EXERCISE_DB_BASE_URL}/exercises/equipment/${equipment}`, exerciseDbHeaders);
    return await response.json();
};

export const fetchBodyPartList = async () => {
    const response = await fetch(`${EXERCISE_DB_BASE_URL}/exercises/bodyPartList`, exerciseDbHeaders);
    return await response.json();
};

export const fetchAllExercises = async () => {
    const response = await fetch(`${EXERCISE_DB_BASE_URL}/exercises`, exerciseDbHeaders);
    return await response.json();
};

export const fetchExercisesByBodyPart = async (bodyPart) => {
    const response = await fetch(`${EXERCISE_DB_BASE_URL}/exercises/bodyPart/${bodyPart}`, exerciseDbHeaders);
    return await response.json();
};
