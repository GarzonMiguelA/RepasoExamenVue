import axios from 'axios';

const API_URL = 'https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json';

// Asegúrate de que sea "export" directamente en la función
export const getEmbalses = async () => {
    const respuesta = await axios.get(API_URL);
    return respuesta.data;
};
