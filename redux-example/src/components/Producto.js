import React from 'react'
import {Link} from 'react-router-dom'

//redux
import {useDispatch} from "react-redux";
import {borrarProductoAction} from "../actions/productoActions";
import Swal from 'sweetalert2';

const Producto = ({producto}) => {
    const {nombre, precio, id} = producto
    const dispatch = useDispatch();
    //confirmar si desea eliminarlo
    const confirmarEliminarProducto = id => {
        Swal.fire({
            title: '¿Desea eliminar el producto?',
            text: "No se puede revertir este cambio",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Entiendo, eliminar'
        }).then((result) => {
            if (result.value) {
                dispatch(borrarProductoAction(id));
            }
        })

    }
    return (
        <tr>
            <td>{nombre}</td>
            <td>
                <span className='font-weight-bold'>$ {precio}</span>
            </td>
            <td className='acciones'>
                {/*<Link to={`productos/editar/${id}`} className='btn btn-primary mr-2'>Editar</Link>*/}
                <button className='btn btn-danger' onClick={ () => confirmarEliminarProducto(id) /*Tomar en cuenta que aqui no se llama
                a la función simplemente como confirmarEliminarProducto sino como confirmarEliminarProducto() porque es necesario enviar el id
                del producto que se va a eliminar. Por ese tipo de llamado es que utilizamos como arrow function porque si solo lo llamaramos
                asi: onChange={confirmarEliminarProducto(id)} cada que el componente Producto se renderiza, esta función se ejecutaría y no solo
                 cuando el usuario de click en el botón*/}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Producto
