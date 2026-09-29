import { useState } from "react"

function Reservar({ libro, reservar, volver }) {

    const [nombre, setNombre] = useState("")

    const enviar = (e) => {

        e.preventDefault()

        if (nombre.trim() === "") return

        reservar(libro.id, nombre)

    }

    return (

        <div>

            <h2>Reservar libro</h2>

            <p>
                <strong>{libro.titulo}</strong> - {libro.autor}
            </p>

            <form onSubmit={enviar} className="mt-3">

                <input
                    className="form-control mb-3"
                    placeholder="Tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <button className="btn btn-success me-2">
                    Reservar
                </button>

                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={volver}
                >
                    Volver
                </button>

            </form>

        </div>

    )

}

export default Reservar
