import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export class AddForm extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div clasName="container my-5">
					<div className="row p-3 mt-4">
						<div className="col-md-12 text-center p-2">
							<h2>Datos de mascota</h2>
						</div>
					</div>

					<div className="row m-2">
						<div className="col-12 text-center">
							<i className="fas fa-paw fa-3x" />
						</div>
						<div className="col-12 text-center">
							<p>cargar foto</p>
						</div>
					</div>
					<div className="col-12 mb-5 pb-3">
						<input type="text" className="form-control mb-2 mt-4" placeholder="Nombre" />
						<input type="text" className="form-control mb-2" placeholder="Lugar" />
						<input type="text" className="form-control mb-2" placeholder="Identificación" />
						<input type="text" className="form-control mb-2" placeholder="Raza" />
						<input type="text" className="form-control mb-2" placeholder="Tamaño" />
						<input type="text" className="form-control mb-2" placeholder="Color" />
						<input type="text" className="form-control mb-2" placeholder="Sexo" />
						<Link to="/Coincidences" className="text-center">
							<button className="btn my-4 btn-block">Buscar</button>
						</Link>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
