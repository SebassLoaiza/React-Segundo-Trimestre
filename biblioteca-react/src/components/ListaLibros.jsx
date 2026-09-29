function ListaLibros({ libros, seleccionarLibro }) {

    return (

        <div>
            <h1>Biblioteca - Sebastian</h1>
            <h2>Lista de libros</h2>

            <table className="table">

                <thead>

                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Estado</th>
                        <th></th>
                    </tr>

                </thead>

                <tbody>

                    {libros.map(libro => (

                        <tr key={libro.id}>

                            <td>{libro.titulo}</td>

                            <td>{libro.autor}</td>

                            <td>
                                {libro.reservado
                                    ? `Reservado por: ${libro.reservadoPor}`
                                    : "Disponible"}
                            </td>

                            <td>

                                {!libro.reservado && (

                                    <button
                                        className="btn btn-success btn-sm"
                                        onClick={() => seleccionarLibro(libro)}
                                    >
                                        Reservar
                                    </button>

                                )}

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    )

}

export default ListaLibros
