import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../component/footer";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class MyAccount extends React.Component {
	render() {
		return (
			<div className="bg">
				<h1 className="text-center">Mi Cuenta</h1>
				<h3 className="text-center">Nombre Usuario</h3>
				<h3 className="text-center">correo</h3>
				<h6 className="text-center">modificar perfil</h6>
				<Link to="/LostPets">
					<button className="btn btn">Guardar</button>
				</Link>

				<div className="container-fluid">
					<div className="row">
						<Footer />
					</div>
				</div>
			</div>
		);
	}
}
