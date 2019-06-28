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
		<nav className="navbar navbar-light bg-light pl-0">
			<div className="btn-group" role="group" aria-label="Basic example">
				<Link to="/">
					<button type="button" className="btn btn-secondary ml-1">
						Buscados
					</button>
				</Link>
				<Link to="/">
					<button type="button" className="btn btn-secondary ml-1">
						Historias
					</button>
				</Link>
				<Link to="/">
					<button type="button" className="btn btn-secondary ml-1">
						Encontrados
					</button>
				</Link>
			</div>
		</nav>
	</footer>
);
