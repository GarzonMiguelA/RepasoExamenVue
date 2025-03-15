import axios from "axios";

const get_url = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
    const respuesta = await axios.get(get_url);
    return respuesta.data;
}