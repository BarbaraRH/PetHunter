import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";

export class Coincidences extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="mt-5 pt-3">
					<h3 className="text-center">COINCIDENCIAS</h3>
					<Link to="/MatchAlert" className="card" style={{ maxWidth: "100%" }}>
						<div className="row no-gutters">
							<div className="col-4 p-2">
								<img src="https://via.placeholder.com/60" className="card-img" alt="..." />
							</div>
							<div className="col-8">
								<div className="card-body">
									<h5 className="card-title">Fido</h5>
									<p className="card-text">
										Raza: Mestizo <br />
										Tamaño: Grande <br />
										Color: Café
									</p>
								</div>
							</div>
						</div>
					</Link>
					<div className="card" style={{ maxWidth: "100%" }}>
						<div className="row no-gutters">
							<div className="col-4 p-2">
								<img src="https://via.placeholder.com/60" className="card-img" alt="..." />
							</div>
							<div className="col-8">
								<div className="card-body">
									<h5 className="card-title">Fido</h5>
									<p className="card-text">
										Raza: Mestizo <br />
										Tamaño: Grande <br />
										Color: Café
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
