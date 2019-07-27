import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="fixed-top container-fluid" style={{ backgroundImage: "linear-gradient(#d5ffff, #a1ffce)" }}>
				<div className="row">
					<Link to="/myAccount" className="col-2">
						<i className="fas fa-exclamation-circle fa-2x mt-2 mb-2" style={{ color: "#ce93d8" }} />
					</Link>
					<h3 className="col-9 text-center mt-2 mb-2">{this.props.title}</h3>
				</div>
			</nav>
		);
	}
}

Navbar.propTypes = {
	title: PropTypes.string
};
