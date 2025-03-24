import axios from "axios";

const URL = "https://analisi.transparenciacatalunya.cat/resource/7bpt-5azk.json";

export const getGanaderias = async () => {
    let url = URL;

    // Si codi_explotaci_ no es activo, no lo mostramos
    const respuesta = await axios.get(url);
    return respuesta.data;
};