// se importan los tipos de acciones del MESSAGES
import { CREATE_MESSAGES, GET_ERRORS } from '../actions/types';

//componente que realiza la accion crear un  mensaje y envia la accion  al reducer
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGES,// tipo de accion enviada al reducer eliminar contacto
        payload: msg// data enviada al reducer
    };

};

// retorna los errores de la aplicación 
export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS, // tipo de accion enviada al reducer eliminar contacto
        payload: { msg, status }// data enviada al reducer
    };
};