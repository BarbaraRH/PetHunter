import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import { PostList } from "../component/PostList";

export class FindedPets extends React.Component {
	render() {
		return (
			<div>
				<Navbar title="ENCONTRADOS" />
				<PostList />
				<Footer />
			</div>
		);
	}
}
