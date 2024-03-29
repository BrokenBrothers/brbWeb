// tipos de acciones para la funcion reductura
import { GET_CONTACT, DELETE_CONTACT, ADD_CONTACT } from '../actions/types.js';
// inicializacion del estado de la funcion reductora
const initialState = {
    contact: []
}

/**
 * Funcion reductora contact
 * @param {*} state estado actual
 * @param {*} action accion que edita el estado
 * @returns estado editado por la accion
 */
export default function (state = initialState, action) {
    switch (action.type) { // tipos de la accion para editar el esado
        case GET_CONTACT: // accion obtener los contactos
            return {
                ...state, // esatdo editado
                contact: action.payload  // payload contiene la data de los contactos
            }
        case DELETE_CONTACT: // accion eliminar un contacto
            return {
                ...state, // estado editado
                contact: state.contact.filter(contact => contact.id !== action.payload) // obtiene la data del contacto a eliminar
            }
        case ADD_CONTACT:
            return {
                ...state, // estado editado
                contact: [...state.contact, action.payload] // obtiene la data del contacto nuevo
            }

        default:
            return state; // retorna este esatado si no existe una accion correspondiente a la del parametro de la funcion
    }
}