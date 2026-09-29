import { useState } from "react"

function Reservar({ libro, reservar, volver }) {

    const [nombre, setNombre] = useState("")

    return (

        <div className="row justify-content-center">

            <div className="col-md-6">

                <div className="card">

                    <div className="card-body">

                        <h2>Reservar libro</h2>

                        <h4 className="text-muted mb-3">
                            {libro.titulo}
                        </h4>

                        <div className="mb-3">

                            <label className="form-label">
                                Tu nombre
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />

                        </div>

                        <button
                            className="btn btn-success"
                            onClick={() => reservar(libro.id, nombre)}
                        >

                            Reservar

                        </button>

                        <button
                            className="btn btn-secondary ms-2"
                            onClick={volver}
                        >

                            Volver

                        </button>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Reservar
