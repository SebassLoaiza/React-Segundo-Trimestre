import { useState } from "react"
import ListaLibros from "./components/ListaLibros.jsx"
import Reservar from "./components/Reservar.jsx"
import Admin from "./components/Admin.jsx"

function App() {

    const [pagina, setPagina] = useState("lista")
    const [libroSeleccionado, setLibroSeleccionado] = useState(null)

    const [libros, setLibros] = useState([
        {
            id: 1,
            titulo: "Cien años de soledad",
            autor: "Gabriel García Márquez",
            reservado: false,
            reservadoPor: ""
        },
        {
            id: 2,
            titulo: "El principito",
            autor: "Antoine de Saint-Exupéry",
            reservado: false,
            reservadoPor: ""
        }
    ])

    const seleccionarLibro = (libro) => {
        setLibroSeleccionado(libro)
        setPagina("reservar")
    }

    const reservarLibro = (id, nombre) => {

        const nuevos = libros.map(libro => {

            if (libro.id === id) {
                return {
                    ...libro,
                    reservado: true,
                    reservadoPor: nombre
                }
            }

            return libro

        })

        setLibros(nuevos)
        setPagina("lista")
    }

    const agregarLibro = (titulo, autor) => {

        const nuevo = {
            id: Date.now(),
            titulo,
            autor,
            reservado: false,
            reservadoPor: ""
        }

        setLibros([...libros, nuevo])
    }

    const eliminarLibro = (id) => {
        setLibros(libros.filter(libro => libro.id !== id))
    }

    const eliminarReserva = (id) => {

        const nuevos = libros.map(libro => {

            if (libro.id === id) {
                return {
                    ...libro,
                    reservado: false,
                    reservadoPor: ""
                }
            }

            return libro

        })

        setLibros(nuevos)
    }

    const editarLibro = (id, titulo, autor) => {

        const nuevos = libros.map(libro => {

            if (libro.id === id) {
                return {
                    ...libro,
                    titulo,
                    autor
                }
            }

            return libro

        })

        setLibros(nuevos)
    }

    return (

        <div className="container mt-4">

            <nav className="mb-4">

                <button
                    className="btn btn-primary me-2"
                    onClick={() => setPagina("lista")}
                >
                    Inicio
                </button>

                <button
                    className="btn btn-dark"
                    onClick={() => setPagina("admin")}
                >
                    Admin
                </button>

            </nav>

            {pagina === "lista" && (

                <ListaLibros
                    libros={libros}
                    seleccionarLibro={seleccionarLibro}
                />

            )}

            {pagina === "reservar" && libroSeleccionado && (

                <Reservar
                    libro={libroSeleccionado}
                    reservar={reservarLibro}
                    volver={() => setPagina("lista")}
                />

            )}

            {pagina === "admin" && (

                <Admin
                    libros={libros}
                    agregarLibro={agregarLibro}
                    eliminarLibro={eliminarLibro}
                    eliminarReserva={eliminarReserva}
                    editarLibro={editarLibro}
                />

            )}

        </div>

    )

}

export default App