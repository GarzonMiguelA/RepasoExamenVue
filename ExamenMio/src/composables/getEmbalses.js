import axios from "axios";

const URL = "https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json";

export const getEmbalses = async (estaci = null) => {
    let url = URL;

    if (estaci) {
        const querySQL = encodeURIComponent(`
            SELECT dia, estaci, nivell_absolut, percentatge_volum_embassat, volum_embassat 
            WHERE estaci = '${estaci}'
            ORDER BY dia DESC LIMIT 100
        `);
        url = `${URL}?$query=${querySQL}`;
    }

    const respuesta = await axios.get(url);
    return respuesta.data;
};
