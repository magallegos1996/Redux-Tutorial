/*En redux, cada elemento que requiere state lo tiene individualmente (por ejemplo: usuarios, productos, etc)
sin embargo, estos states se manejan en un solo lugar que es el Store, por tal motivo, estos states individuales
hay que combinarlos (usando combineReducers) para que lo maneje el store.*/
import {combineReducers} from "redux";
import productosReducer from "./productosReducer";

export default combineReducers({
    productos: productosReducer
});

