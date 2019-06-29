import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export class UserContact extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="container my-5">
					<div className="row p-3">
						<div className="col-md-12 text-center p-2">
							<h2>Aviso de mascota perdida</h2>
						</div>
					</div>
					<div className="row ">
						<div className="col-md-12 text-center p-3">
							<i className="fas fa-user fa-3x m-2" />
							<i className="fas fa-arrows-alt-h fa-3x m-2" />
							<i className="fas fa-paw fa-3x m-2" />
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 text-center">
							<h4>Nombre de Usuario:</h4>
							<h4 className="fondo-destacado rounded-pill">Usuario Juan</h4>
							<h4>Correo de Usuario:</h4>
							<h4 className="fondo-destacado rounded-pill">Usuario@gmail.com</h4>
							<h4>Teléfono de Usuario:</h4>
							<h4 className="fondo-destacado rounded-pill">555-555555</h4>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
