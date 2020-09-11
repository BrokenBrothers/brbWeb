// axios permite realizar peticiones http a una api transformando la data en formato JSON
import axios from 'axios';
// se importan los tipos de acciones del contacto
import { GET_CONTACT, DELETE_CONTACT, ADD_CONTACT } from './types';
// se obtiene la accion de crear un mensaje
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

//componente que realiza la accion obtener contactos y enviado la accion  al reducer
export const getContact = () => (dispatch, getState) => {
    axios
        .get("/api/Contact/", tokenConfig(getState)) // accede a la api del backend en django
        .then(res => { // res permite obtener la data 
            dispatch({ // se envia la data al reducer
                type: GET_CONTACT, // tipo de accion enviada al reducer
                payload: res.data, // data nueva enviada al reducer
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status))); // si salta un error llama a la accion 
};

// componente que realiza la accion eliminar contacto y enviado la accion  al reducer
export const deleteContact = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/Contact/${id}/`, tokenConfig(getState)) // accede a la api del backend en django
        .then(res => { // res permite obtener la data 

            dispatch({ // se envia la data al reducer
                type: DELETE_CONTACT, // tipo de accion enviada al reducer eliminar contacto
                payload: id, // data enviada al reducer
            });
            dispatch(createMessage({// se envia al reducer la creacion de un nuevo mensaja
                deleteContact: 'Contact deleted' // mensaje de eliminacion de contacto
            }));
        }).catch(err => console.log(err));// si salta un error se imprime en consola
};


// componente que realiza la accion agregar contacto y enviado la accion  al reducer
export const addContact = (contact) => (dispatch, getState) => {
    axios
        .post(`/api/Contact/`, contact, tokenConfig(getState)) // envia los datos a la api del backend en django 
        .then(res => { // res permite obtener la data 

            dispatch({ // se envia la data al reducer
                type: ADD_CONTACT, // tipo de accion enviada al reducer para agregar contacto
                payload: res.data, // data enviada al reducer
            });
            dispatch(createMessage({// se envia al reducer la accion de crear un nuevo mensaje 
                addContact: 'Contact added' // mensaje de contacto agregado
            }));
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));// si salta un error llama a la accion 
};