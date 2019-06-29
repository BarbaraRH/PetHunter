import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class MyAccount extends React.Component {
	render() {
		return (
			<div>
				<h1>Mi Cuenta</h1>
				<Link to="/LostPets">
					<button className="btn btn-primary">Guardar</button>
				</Link>
			</div>
		);
	}
}
