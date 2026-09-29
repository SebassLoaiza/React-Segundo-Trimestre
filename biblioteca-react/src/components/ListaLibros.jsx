function ListaLibros({ libros, irReservar }) {

    return (

        <div>

            <h1 className="mb-4">Biblioteca</h1>

            <div className="row">

                {libros.map(libro => (

                    <div className="col-md-4 mb-4" key={libro.id}>

                        <div className="card">

                            <div className="card-body">

                                <h4>{libro.titulo}</h4>

                                <p className="text-muted">
                                    {libro.autor}
                                </p>

                                {libro.reservado ? (

                                    <p className="text-danger">
                                        Libro reservado
                                    </p>

                                ) : (

                                    <button
                                        className="btn btn-primary"
                                        onClick={() => irReservar(libro)}
                                    >

                                        Reservar libro

                                    </button>

                                )}

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    )

}

export default ListaLibros
