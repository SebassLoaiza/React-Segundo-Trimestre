import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h5>📚 Biblioteca</h5>
            <p className="text-secondary mb-0">
              Un espacio para descubrir, aprender y disfrutar de la lectura.
            </p>
          </div>

          <div className="col-md-6 text-md-end">
            <h6>Enlaces</h6>
            <a href="/libros" className="text-white text-decoration-none me-3">
              Libros
            </a>
            <a href="/autores" className="text-white text-decoration-none">
              Autores
            </a>
          </div>
        </div>

        <hr />

        <div className="text-center text-secondary">
          <small>
            © {new Date().getFullYear()} Biblioteca. Todos los derechos
            reservados.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
