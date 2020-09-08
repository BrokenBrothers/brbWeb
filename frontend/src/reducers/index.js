// combineReducers comvierte las funciones reductoras en un solo objeto
import { combineReducers } from 'redux';
// contact importacion de la funcion reductura contact
import contact from './contact'

// comversion de las funciones reductoras en un solo objeto y se envia al store
export default combineReducers({
    contact // funcion reductora contact
});