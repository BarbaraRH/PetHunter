import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export class PetHunterHistory extends React.Component {
	componentDidMount() {
		document.querySelector(".fa-search").parentNode.className += "fas fa-search fa-2x";
		document.querySelector(".fa-bullseye").parentNode.className = "fas fa-bullseye fa-2x";
		document.querySelector(".fa-award").parentNode.className = " active ";
	}

	render() {
		return (
			<div>
				<Navbar title="Historias de Exito" />
				<Footer />
			</div>
		);
	}
}
