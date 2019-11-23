import React from 'react';
import { Provider } from 'react-redux'
import store from "./store"
import Jugadores from "./components/Jugadores"
import EquipoSeleccionado from "./components/EquipoSeleccionado"
import "./styles/styles.scss"

const App = () => (

  <Provider store={store}>
    <main >
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Jugadores />
          </div>
          <div className="col-sm-8">
            <EquipoSeleccionado />
          </div>

        </div>
      </div>


    </main>
  </Provider>

)

export default App;
