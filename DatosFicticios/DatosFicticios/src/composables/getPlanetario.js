import axios from "axios";

//Almacenamos la URL de la API que vamos a consumir

const get_url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

export const getPlanetario = async () => {
    const respuesta = await axios.get(get_url);
    return respuesta.data;
};