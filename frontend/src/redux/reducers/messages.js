// tipos de acciones para la funcion reductura
import { CREATE_MESSAGES } from '../actions/types';

// estado inicial del reducer errors
const initialState = {
    msg: {},
    status: null
}
/*
    Funcion reductora errors
    state: estado actual
    action: accion que edita el estado
    return: estado editado por la accion
 */
export default function (state = initialState, action) {
    switch (action.type) { // tipos de la accion para editar el estado
        case CREATE_MESSAGES:
            return (state = action.payload)
        default:
            return state; //  si no se encuentra la accion retorna el estado inicial
    }

}