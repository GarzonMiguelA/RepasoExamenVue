import axios from "axios";

const URL = "https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json";

export const getEmbalses = async () => {
    const respuesta = await axios.get(URL);

    //Devolvemos resultado de la peticion, que es uin array de usuarios
    return respuesta.data;
}