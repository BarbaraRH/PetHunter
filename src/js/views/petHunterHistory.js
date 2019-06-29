import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export class PetHunterHistory extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<h3 className="mt-5 pt-3 text-center">Historias de Exito</h3>
				<Footer />
			</div>
		);
	}
}
