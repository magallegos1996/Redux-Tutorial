//Cada reducer tiene su propio state
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITO,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_ELIMINAR
} from '../types'
const initialState = {
    productos: [],
    error: null,
    loading: false,
    productoEliminar: null,
}
//Si a la funcion no se le pasa nada, toma el state inicial
export default function (state = initialState, action) {
    switch (action.type) {
        //Estos dos case (COMENZAR_DESCARGA_PRODUCTOS Y AGREGAR_PRODUCTO) reciben lo mismo, por lo tanto se realiza una cosa para los dos
        case COMENZAR_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTO:
            return {
             ...state, //retornamos una copia del state
             loading: action.payload
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            }
        case DESCARGA_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: action.payload
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                productoEliminar: action.payload,
            }
        case PRODUCTO_ELIMINADO_EXITO:
            return {
                ...state,
                productos: state.productos.filter(producto => producto.id !== state.productoEliminar),
                productoEliminar: null,
            }
        case PRODUCTO_ELIMINADO_ERROR:
            return {
                ...state,
                error: action.payload,
                productoEliminar: null,
            }
        default:
            return state /*En caso de que no coincida con ninguna action.type se regresa el state sin cambios*/

    }
}
