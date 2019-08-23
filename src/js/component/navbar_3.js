import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export class Navbar_3 extends React.Component {
	render() {
		return (
			<nav className="fixed-top container-fluid" style={{ backgroundColor: "#b2ebf2" }}>
				<div className="row">
					<div className="col-2">
						<Link to="/myAccount" className="">
							<img
								src="http://trabajoweb.cl/pet/david.jpg"
								className="rounded-circle fotol mt-2 mb-2"
								alt="..."
							/>
						</Link>
					</div>
					<div className="col-8" />
					<div className="col-4" />
				</div>
				<div className="row p-3 stikyBackground text-center">
					<div className="col-12" />
				</div>
			</nav>
		);
	}
}

Navbar_3.propTypes = {
	title: PropTypes.string
};
