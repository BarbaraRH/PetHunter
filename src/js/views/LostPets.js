import React from "react";
import { Link } from "react-router-dom";
import "./finderylostPets.css";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import cat1 from "../../img/cat_1.png";

export class LostPets extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				{/* parte superior menu*/}
				<div className="row p-3 stikyBackground text-center">
					<Navbar />
					<div className="col-12">
						<h3 className="text-center">BUSCADOS</h3>
					</div>
					<div className="col-12 text-center">
						<form>
							<div className="form-row mb-3 px-2 stikyHeader">
								<div className="col-12">
									<input type="text" className="form-control" placeholder="Buscar" />
								</div>
							</div>
							<Link to="/AddForm">
								<button type="button" className="btn">
									Solicitar Búsqueda
								</button>
							</Link>
						</form>
					</div>
				</div>
				{/* parte media donde se muestran los gatitos*/}
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.lostPets.map((item, index) => {
								return (
									<Link to="/MatchAlert" key={index}>
										<div className="container-fluid">
											<div className="row">
												<div className="col-4">
													<img src={cat1} className="img-ch" alt="Pet" />
												</div>
												<div className="col-8">
													<div className="">
														<h2 className="card-title" style={{ color: "black" }}>
															{item.name}
														</h2>
														<h4>
															<span
																className="badge badge-primary"
																style={{ borderRadius: "50px" }}>
																{item.breed}
															</span>
														</h4>
														<p className="card-text">
															<small className="text-muted">
																Se perdió con fecha -1-1-2019
															</small>
														</p>
													</div>
												</div>
											</div>
										</div>
									</Link>
								);
							});
						}}
					</Context.Consumer>
				</div>
				{/* parte Footer*/}
				<div className="row mt-5">
					<Footer />
				</div>
			</div>
		);
	}
}

/*

return store[lostPets].map((item, index) => {
								return (
									<div key={index} className="card" style={{ maxWidth: "100%" }}>
										<div className="row no-gutters">
											<div className="col-4 p-2">
												<img
													src="https://via.placeholder.com/60"
													className="card-img"
													alt="..."
												/>
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
								);
							});

 */
