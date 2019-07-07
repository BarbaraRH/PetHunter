import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer
		className="footer"
		style={{
			position: "fixed",
			bottom: 0,
			width: "100%",
			zIndex: 1
		}}>
		<div className="row p-3 text-center footer" style={{ backgroundImage: "linear-gradient(#d5ffff,#a1ffce)" }}>
			<Link to="/LostPets" className="col-sm-4 col-4" style={{ color: "rgb(206, 147, 216)" }}>
				<i className="fas fa-search fa-2x blanco" />
			</Link>
			<Link to="/FindedPets" className="col-sm-4 col-4 blanco" style={{ color: "rgb(206, 147, 216)" }}>
				<i className="fas fa-bullseye fa-2x" />
			</Link>
			<Link to="/petHunterHistory" className="col-sm-4 col-4 blanco" style={{ color: "rgb(206, 147, 216)" }}>
				<i className="fas fa-award fa-2x" />
			</Link>
		</div>
	</footer>
);
