import axios from 'axios';

const API_URL = 'https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json';

const getEmabalses = async () => {
    const respuesta = await axios.get(API_URL);
    return respuesta.data;
}

