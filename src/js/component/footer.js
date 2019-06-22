import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container btn-group" role="group" aria-label="Basic example">
				<Link to="/">
					<button type="button" className="btn btn-secondary">
						Buscados
					</button>
				</Link>
				<Link to="/">
					<button type="button" className="btn btn-secondary">
						Historia
					</button>
				</Link>
				<Link to="/">
					<button type="button" className="btn btn-secondary">
						Encontrados
					</button>
				</Link>
			</div>
		</nav>
	</footer>
);
