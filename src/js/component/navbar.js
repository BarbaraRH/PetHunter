import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="fixed-top container-fluid" style={{ backgroundImage: "linear-gradient(#d5ffff, #a1ffce)" }}>
				<Link to="/myAccount">
					<div className="col-md-12">
						<i className="fas fa-exclamation-circle fa-2x mt-2 mb-2" style={{ color: "#ce93d8" }} />
					</div>
				</Link>
			</nav>
		);
	}
}
