//Las actions son las funciones que modifican el state y son las que se utilizan en la vista (es decir, por algun boton por ejemplo)
//Aqui se deberian colocar las consultas a la base de datos, por ejemplo o mandar a ejecutar el reducer para cambiar el state que se
//maneja en el restore
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    PRODUCTO_ELIMINADO_EXITO,
    OBTENER_PRODUCTO_ELIMINAR
} from '../types';
import clienteAxios from "../config/axios";
import Swal from 'sweetalert2';

export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());
        try{
            //Insertar en la API
            await clienteAxios.post('/productos', producto);
            //Si todo sale bien, actualizar el state
            dispatch(agregarProductoExito(producto));
            await Swal.fire('Correcto', 'El producto se agregó correctamente', 'success');
        }catch (e) {
            //Si hay error, actualizar state con error
            console.log(e);
            dispatch(agregarProductoError(true));
            await Swal.fire('Error', 'Ocurrió un error al agregar el producto', 'error');

        }
    }
}
//Siempre que se tenga la función aquí, se debe tener la misma en el reducer
const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});
//si el producto se guarda en la base de datos
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

//si hay error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});

//Función que descarga los productos de la base de datos y será usado por el componente Productos
export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch(descargarProductos());
        try{
            const respuesta = await clienteAxios.get('/productos');
            dispatch(descargarProductosExitosa(respuesta.data));
        }catch (error) {
            dispatch(descargarProductosError());
        }
    }
}
const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});
const descargarProductosExitosa = productos => ({
        type: DESCARGA_PRODUCTOS_EXITO,
        payload: productos
    })
;
const descargarProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
});

export function borrarProductoAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id));
        try{
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(eliminarProductoExito(id));

            await Swal.fire(
                'Eliminado!',
                'El producto ha sido eliminado',
                'success'
            );
        }catch (error) {
            dispatch(eliminarProductoError())
        }
    }
}
const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
});
const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO,
});
const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})
