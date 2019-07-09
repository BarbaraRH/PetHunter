import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class MyAccount extends React.Component {
	render() {
		return (
			<div className="bg">
				<h1>Mi Cuenta</h1>
				<Link to="/LostPets">
					<button className="btn">Guardar</button>
				</Link>
			</div>
		);
	}
}
