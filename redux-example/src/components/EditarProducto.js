import React from 'react'

const EditarProducto = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>Editar Producto</h2>
                        <form className="form-group">
                            <label>Nombre Producto</label>
                            <input type="text" className="form-control" placeholder="Nombre Producto" name="nombre"/>
                        </form>
                        <form className="form-group">
                            <label>Precio Producto</label>
                            <input type="number" className="form-control" placeholder="Precio Producto" name="precio"/>
                        </form>
                        <button type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditarProducto
