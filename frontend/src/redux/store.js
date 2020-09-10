// createStore crea un store que controla los esatdos de la aplicacion este siendo unico en toda la app
// applyMiddleware permite soportar acciones asincronas sin utilizar mucho codigo y registra dichos acciones
import { createStore, applyMiddleware } from 'redux';
// composeWithDevTools permite monitorear las acciones realizadas y los cambios de estado
import { composeWithDevTools } from 'redux-devtools-extension';
// thunk permite escribir los creadores de acciones, permitiendo retrazar una accion hasta que se cumpla una linea de codigo asincrona
import thunk from 'redux-thunk';
// rootReducer  permite controlar los nombres de llaves reductoras(cambia el estado viejo por el actual )
import rootReducer from './reducers';

const initialState = {}; // estado unicial del store, en este caso vacio. Dependiendo de las acciones va a cambiar.

const middleware = [thunk]; // permite llamadas asincronas a la api
/*
    se crear un store unico para controlar los esatdos de la aplicacion
*/
const store = createStore(
    rootReducer, // estado actual
    initialState, // estado inicial 
    composeWithDevTools(applyMiddleware(...middleware)) // se monitorean(composeWithDevTools) las acciones asincronas(applyMiddleware) controlaras(thunk)
);

export default store; // se envia el store creado por defecto