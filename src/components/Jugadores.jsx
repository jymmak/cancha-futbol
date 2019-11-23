import React from "react"
import { connect } from "react-redux"

const Jugadores = ({ jugadores, agregarTitular, agregarSuplente }) => (
    <div>
        <h2><strong>Jugadores</strong></h2>
        <div className="contenedor-jugadores">
            {jugadores.map(j => (
                <article className="p-3" className="jugador" key ={j.id}>
                    <h3>{j.nombre}</h3>
                    <img src={j.foto} alt="" />
                    
                    <div className="mt-2">
                        <button type="button" className="btn btn-primary mr-3" onClick={() => agregarTitular(j)}>Titular</button>
                        <button type="button" className="btn btn-success" onClick={() =>  agregarSuplente(j)}>Suplente</button>
                    </div>
                    <hr />
                </article>
            ))}

        </div>
    </div>
)

const mapStateProps = state => ({
    jugadores: state.jugadores
})


const mapDispatchToProps = dispatch => ({

    agregarTitular(jugador) {
        dispatch({
            type: "AGREGAR_TITULAR",
            jugador
        })
    },

    agregarSuplente(jugador){
        dispatch({
            type: "AGREGAR_SUPLENTE",
            jugador

        })
    }
})

export default connect(mapStateProps, mapDispatchToProps)(Jugadores)