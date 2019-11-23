import { createStore } from "redux"

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Aramis Knight",
            foto: "https://i.imgur.com/TL21LbA.png)"
        },
        {
            id: 2,
            nombre: "Bill Milner",
            foto: "https://i.imgur.com/kwyq1pU.png)"
        },

        {
            id: 3,
            nombre: "Callan McAuliffe",
            foto: "https://i.imgur.com/RCYD219.png)"
        },


    ],
    titulares: [],
    suplentes: []

}
const reducerEntrenador = (state = initialState, action) => {
    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id),
        }
    }
    
    if(action.type === "AGREGAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "QUITAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if(action.type === "QUITAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }
    return state
}

export default createStore(reducerEntrenador)