import React from "react";
import { Link } from "react-router-dom";
import "./finderylostPets.css";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import { PostList } from "../component/PostList";

export class LostPets extends React.Component {
	render() {
		return (
			<div>
				<Navbar title="BUSCADOS" />
				<PostList />
				<Footer />
			</div>
		);
	}
}
