import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Footer = () => (
	<footer
		className="footer container-fluid"
		style={{
			position: "fixed",
			bottom: 0,
			width: "100%",
			zIndex: 1
		}}>
		<div className="row p-3 text-center" style={{ backgroundImage: "linear-gradient(#b2ebf2, #e5ffff)" }}>
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="w-100">
							<Link
								to="/LostPets"
								className="col-sm-4 col-4 pt-3 pb-2"
								style={{ color: "#81b9bf" }}
								onClick={() => actions.active()}>
								<i className="fas fa-search fa-2x" id="target1" />
							</Link>
							<Link
								to="/FindedPets"
								className="col-sm-4 col-4 pt-3 pb-2"
								style={{ color: "#81b9bf" }}
								onClick={() => actions.active()}>
								<i className="fas fa-bullseye fa-2x" id="target2" />
							</Link>
							<Link
								to="/petHunterHistory"
								className="col-sm-4 col-4 pt-3 pb-2"
								style={{ color: "#81b9bf" }}
								onClick={() => actions.active()}>
								<i className="fas fa-award fa-2x" id="target3" />
							</Link>
						</div>
					);
				}}
			</Context.Consumer>
		</div>
	</footer>
);
