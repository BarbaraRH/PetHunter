import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class LostPets extends React.Component {
	render() {
		return (
			<div>
				<h1 className="text-center">BUSCADOS</h1>
				<form>
					<div className="form-row mb-3 px-2">
						<div className="col-8">
							<input type="text" className="form-control" placeholder="Search" />
						</div>
						<div className="col ml-3">
							<button type="button" className="btn btn-primary">
								Añadir
							</button>
						</div>
					</div>
				</form>
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
		);
	}
}
