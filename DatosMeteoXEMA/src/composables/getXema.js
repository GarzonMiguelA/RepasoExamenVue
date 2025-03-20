import axios from "axios";

const URL = "https://analisi.transparenciacatalunya.cat/resource/nzvn-apee.json";

export const getXema = async () => {
    const respuest= await axios.get(URL);

    return respuest.data;
}