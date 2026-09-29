import { useState } from "react"
import ListaLibros from "./components/ListaLibros"
import Reservar from "./components/Reservar"

function App() {

  const [pagina, setPagina] = useState("lista")

  const [libroSeleccionado, setLibroSeleccionado] = useState(null)

  const [libros, setLibros] = useState([
    { id: 1, titulo: "El principito", autor: "Antoine de Saint-Exupéry", reservado: false },
    { id: 2, titulo: "1984", autor: "George Orwell", reservado: false },
    { id: 3, titulo: "Don Quijote", autor: "Miguel de Cervantes", reservado: false }
  ])

  const reservarLibro = (id, nombre) => {

    const nuevosLibros = libros.map(libro => {

      if (libro.id === id) {

        return { ...libro, reservado: true, reservadoPor: nombre }

      }

      return libro

    })

    setLibros(nuevosLibros)

    setPagina("lista")

  }

  return (

    <div className="container mt-4">

      {pagina === "lista" && (

        <ListaLibros
          libros={libros}
          irReservar={(libro) => {
            setLibroSeleccionado(libro)
            setPagina("reservar")
          }}
        />

      )}

      {pagina === "reservar" && (

        <Reservar
          libro={libroSeleccionado}
          reservar={reservarLibro}
          volver={() => setPagina("lista")}
        />

      )}

    </div>

  )

}

export default App
