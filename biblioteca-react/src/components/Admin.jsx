import { useState } from "react"

function Admin({ libros, agregarLibro, eliminarLibro, eliminarReserva, editarLibro }) {

    const [titulo, setTitulo] = useState("")
    const [autor, setAutor] = useState("")

    const [editandoId, setEditandoId] = useState(null)
    const [tituloEdit, setTituloEdit] = useState("")
    const [autorEdit, setAutorEdit] = useState("")

    const crearLibro = (e) => {

        e.preventDefault()

        if (titulo.trim() === "" || autor.trim() === "") return

        agregarLibro(titulo, autor)

        setTitulo("")
        setAutor("")
    }

    const iniciarEdicion = (libro) => {

        setEditandoId(libro.id)
        setTituloEdit(libro.titulo)
        setAutorEdit(libro.autor)

    }

    const guardarEdicion = (id) => {

        editarLibro(id, tituloEdit, autorEdit)

        setEditandoId(null)

    }

    return (

        <div>
            <h1>Biblioteca - Sebastian</h1>
            <h2>Panel de administración</h2>

            <form onSubmit={crearLibro} className="mb-4">

                <div className="row">

                    <div className="col">

                        <input
                            className="form-control"
                            placeholder="Título"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />

                    </div>

                    <div className="col">

                        <input
                            className="form-control"
                            placeholder="Autor"
                            value={autor}
                            onChange={(e) => setAutor(e.target.value)}
                        />

                    </div>

                    <div className="col-auto">

                        <button className="btn btn-success">
                            Agregar
                        </button>

                    </div>

                </div>

            </form>

            <table className="table">

                <thead>

                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>

                </thead>

                <tbody>

                    {libros.map(libro => {

                        const editando = libro.id === editandoId

                        return (

                            <tr key={libro.id}>

                                <td>

                                    {editando ? (

                                        <input
                                            className="form-control"
                                            value={tituloEdit}
                                            onChange={(e) => setTituloEdit(e.target.value)}
                                        />

                                    ) : libro.titulo}

                                </td>

                                <td>

                                    {editando ? (

                                        <input
                                            className="form-control"
                                            value={autorEdit}
                                            onChange={(e) => setAutorEdit(e.target.value)}
                                        />

                                    ) : libro.autor}

                                </td>

                                <td>

                                    {libro.reservado
                                        ? `Reservado por: ${libro.reservadoPor}`
                                        : "Disponible"}

                                </td>

                                <td>

                                    {editando ? (

                                        <>

                                            <button
                                                className="btn btn-primary btn-sm me-2"
                                                onClick={() => guardarEdicion(libro.id)}
                                            >
                                                Guardar
                                            </button>

                                            <button
                                                className="btn btn-secondary btn-sm"
                                                onClick={() => setEditandoId(null)}
                                            >
                                                Cancelar
                                            </button>

                                        </>

                                    ) : (

                                        <>

                                            <button
                                                className="btn btn-warning btn-sm me-2"
                                                onClick={() => iniciarEdicion(libro)}
                                            >
                                                Editar
                                            </button>

                                            {libro.reservado && (

                                                <button
                                                    className="btn btn-info btn-sm me-2"
                                                    onClick={() => eliminarReserva(libro.id)}
                                                >
                                                    Quitar reserva
                                                </button>

                                            )}

                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => eliminarLibro(libro.id)}
                                            >
                                                Eliminar
                                            </button>

                                        </>

                                    )}

                                </td>

                            </tr>

                        )

                    })}

                </tbody>

            </table>

        </div>

    )

}

export default Admin
