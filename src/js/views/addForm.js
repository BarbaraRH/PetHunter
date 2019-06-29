import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class AddForm extends React.Component {
	render() {
		return (
			<div>
				<h3 className="mt-5 pt-3 text-center">FORMULARIO</h3>
				<Link to="/Coincidences">
					<button className="btn btn-primary">Guardar</button>
				</Link>
			</div>
		);
	}
}
