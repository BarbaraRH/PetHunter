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
				<Navbar title="Historias de Exito" />
				<Footer />
			</div>
		);
	}
}
