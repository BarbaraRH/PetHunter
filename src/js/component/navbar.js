import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav
				className="navbar navbar-light"
				style={{
					position: "fixed",
					top: 0,
					width: "103vw",
					zIndex: 3,
					backgroundColor: "#d5ffff"
				}}>
				<Link to="/myAccount">
					<i className="fas fa-exclamation-circle fa-2x" style={{ color: "#ce93d8" }} />
				</Link>
			</nav>
		);
	}
}
