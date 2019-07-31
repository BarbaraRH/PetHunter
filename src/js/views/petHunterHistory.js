import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export class PetHunterHistory extends React.Component {
	componentDidMount() {
		document.querySelector(".fa-search").parentNode.className = "col-sm-4 col-4 pt-4 pb-3";
		document.querySelector(".fa-bullseye").parentNode.className = "col-sm-4 col-4 pt-4 pb-3";
		document.querySelector(".fa-award").parentNode.className += " active ";
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
