import axios from "axios";

const url = "https://analisi.transparenciacatalunya.cat/resource/xuwf-dxjd.json";

export const getData = async (data = null) => {
    let URL = `${url}?$limit=10`; // Limitamos a 10 resultados por defecto

    if (data) {
        const query = encodeURIComponent(`
            SELECT data, regiosanitariacodi, regiosanitariadescripcio, sectorsanitaricodi, sectorsanitaridescripcio, abscodi, absdescripcio, sexecodi, sexedescripcio, resultatcoviddescripcio, numcasos
            WHERE data = '${data}'
            ORDER BY data DESC
        `);
        URL = `${url}?$query=${query}&$limit=10`; // Aplica límite después del filtro
    }

    const respuesta = await axios.get(URL);
    return respuesta.data;
};
