import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Footer } from "../component/footer";
import { Context } from "../store/appContext";

export class MatchAlert extends React.Component {
	render() {
		return (
			<div className="container color">
				<div className="row p-3">
					<div className="col-md-12 text-center p-2">
						<h2>Datos de mascota perdida</h2>
					</div>
				</div>
				<Link to="/UserContact" className="row">
					<div className="col-12">
						<button className="btn btn-block my-4 btn-success">La encontré</button>
					</div>
				</Link>
				<div className="row m-2 fondoForm">
					<div className="col-12 text-center">
						<i className="fas fa-paw fa-3x" />
					</div>
					<div className="col-12 text-center">
						<p>Foto de mascota</p>
					</div>
				</div>
				<div className="col 12">
					<p>Buscado por: </p>
					<p>Nombre de mascota: nombre.</p>
					<p>Identificación: ID.</p>
					<p>Raza: nombre de raza.</p>
					<p>Tamaño: Grande.</p>
					<p>Color: Blanca.</p>
					<p>Sexo: Hembra</p>
				</div>
				<div className="row">
					<Footer />
				</div>
			</div>
		);
	}
}
