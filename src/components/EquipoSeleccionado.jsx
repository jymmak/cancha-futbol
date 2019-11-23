import React from "react"
import Titulares from "./Titulares"
import Suplentes from "./Suplentes"


const EquipoSeleccionado = () => (

    <section >
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <Titulares />
                </div>
                <div className="col-sm-6">
                    <Suplentes />
                </div>

            </div>
        </div>



    </section>
)
export default EquipoSeleccionado