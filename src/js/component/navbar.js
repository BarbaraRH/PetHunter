import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav>
				<Link to="/myAccount">
					<i className="fas fa-exclamation-circle fa-2x" style={{ color: "#ce93d8" }} />
				</Link>
			</nav>
		);
	}
}
