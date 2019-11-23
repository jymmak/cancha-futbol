import React from "react"
import { connect } from "react-redux"

const Suplentes = ({ suplentes, quitarSuplente }) => (
    <section>
        <h2><strong> Suplentes </strong></h2>

        <div className="cancha">
            {
                suplentes.map(j => (
                    <article className="suplente" key ={j.id}>
                        <h3>{j.nombre}</h3>
                        <img src={j.foto} alt={j.nombre} />
                        <button onClick={() => quitarSuplente(j)}>X</button>

                        <hr />
                    </article>

                ))
            }
        </div>
    </section>
)

const mapStateProps = state => ({
    suplentes: state.suplentes
})


const mapDispatchToProps = dispatch => ({
quitarSuplente(jugador){
    dispatch({
        type: "QUITAR_SUPLENTE",
        jugador
    })

}


})

export default connect(mapStateProps, mapDispatchToProps)(Suplentes)