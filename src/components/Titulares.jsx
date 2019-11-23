import React from "react"
import { connect } from "react-redux"

const Titulares = ({ titulares, quitarTitular }) => (
    <section>
        <h2><strong>Titulares</strong></h2>

        <div className="cancha">
            {
                titulares.map(j => (
                    <article className="titular" key={j.id}>
                        <h3>{j.nombre}</h3>
                        <img src={j.foto} alt={j.nombre} />
                        <button onClick={() => quitarTitular(j)}>X</button>

                        <hr />
                    </article>

                ))
            }
        </div>
    </section>
)

const mapStateProps = state => ({
    titulares: state.titulares
})


const mapDispatchToProps = dispatch => ({
    quitarTitular(jugador) {
        dispatch({
            type: "QUITAR_TITULAR",
            jugador
        })
    }


})

export default connect(mapStateProps, mapDispatchToProps)(Titulares)