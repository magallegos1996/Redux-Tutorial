import React from 'react'
import Header from "./components/Header";
import Productos from "./components/Productos";
import NuevoProducto from "./components/NuevoProducto";


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EditarProducto from "./components/EditarProducto";

//Redux
import {Provider} from 'react-redux'
import store from "./store";


/*Todo lo que este fuera del Switch se repetirá en todas las páginas o rutas.
   En este caso, estamos en '/'por lo tanto se renderiza el componente Productos*/

function App() {
  return (
      <Router>
          <Provider store={store}>
              <Header/>
              <div className='container mt-5'>
                  <Switch>
                      <Route exact path="/" component={Productos}/>
                      <Route exact path="/productos/nuevo/" component={NuevoProducto}/>
                      {/*<Route exact path="/productos/editar/:id" component={EditarProducto}/>*/}
                  </Switch>
              </div>
          </Provider>
      </Router>
  );
}

export default App;
