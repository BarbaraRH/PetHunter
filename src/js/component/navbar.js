import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav
				className="navbar navbar-light bg-white"
				style={{
					position: "fixed",
					top: 0,
					width: "100%",
					zIndex: 1
				}}>
				<Link to="/myAccount">
					<i className="fas fa-circle fa-2x" style={{ color: "grey" }} />
				</Link>
			</nav>
		);
	}
}
