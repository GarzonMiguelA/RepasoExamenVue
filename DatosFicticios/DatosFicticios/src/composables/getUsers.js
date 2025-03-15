import axios from "axios";

// Almacenamos la URL de la API que vamos a consumir
const get_url = "https://jsonplaceholder.typicode.com/users";

// Creamos una función asíncrona para obtener los datos de los usuarios:
export const getUsers = async () => {
    //Realizamos peticion GET a la URL usando axios
    const respuesta = await axios.get(get_url);

    //Devolvemos resultado de la peticion, que es uin array de usuarios
    return respuesta.data;
}