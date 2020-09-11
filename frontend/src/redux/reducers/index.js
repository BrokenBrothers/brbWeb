// combineReducers comvierte las funciones reductoras en un solo objeto
import { combineReducers } from 'redux';
// contact importacion de la funcion reductura contact
import contact from './contact'
// errors importacion de la funcion reductura contact
import errors from './errors'
// messages importacion de la funcion reductura contact
import messages from './messages'
import auth from './auth'



// comversion de las funciones reductoras en un solo objeto y se envia al store
export default combineReducers({
    contact, // funcion reductora contact
    errors, // funcion reductora errors
    messages,// funcion reductora messager
    auth // funcion reductora auth
});