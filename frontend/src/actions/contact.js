// axios permite realizar peticiones http a una api transformando la data en formato JSON
import axios from 'axios';
// se importan los tipos de acciones del contacto
import { GET_CONTACT, DELETE_CONTACT, ADD_CONTACT } from './types';

//componente que realiza la accion obtener contactos y enviado la accion  al reducer
export const getContact = () => dispatch => {
    axios
        .get("/api/Contact/") // accede a la api del backend en django
        .then(res => { // res permite obtener la data de la interfaz
            dispatch({ // se envia la data al reducer
                type: GET_CONTACT, // tipo de accion enviada al reducer
                payload: res.data, // data nueva enviada al reducer
            });
        }).catch(err => console.log(err)); // si salta un error se imprime en consola
};

// componente que realiza la accion eliminar contacto y enviado la accion  al reducer
export const deleteContact = (id) => dispatch => {
    axios
        .delete(`/api/Contact/${id}/`) // accede a la api del backend en django
        .then(res => { // res permite obtener la data de la interfaz
            dispatch({ // se envia la data al reducer
                type: DELETE_CONTACT, // tipo de accion enviada al reducer eliminar contacto
                payload: id, // identificador para eliminar el contacto
            });
        }).catch(err => console.log(err));// si salta un error se imprime en consola
};


// componente que realiza la accion agregar contacto y enviado la accion  al reducer
export const addContact = (contact) => dispatch => {
    axios
        .post(`/api/Contact/`, contact) // envia los datos a la api del backend en django 
        .then(res => { // res permite obtener la data de la interfaz
            dispatch({ // se envia la data al reducer
                type: ADD_CONTACT, // tipo de accion enviada al reducer para agregar contacto
                payload: res.data, // data enviada por medio del metodo post
            });
        }).catch(err => console.log(err));// si salta un error se imprime en consola
};