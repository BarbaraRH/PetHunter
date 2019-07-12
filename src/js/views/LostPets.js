import React from "react";
import { Link } from "react-router-dom";
import "./finderylostPets.css";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import cat1 from "../../img/cat1.png";

export class LostPets extends React.Component {
	render() {
		return (
			<div className="finded_lostPetsList">
				<Navbar />
				<div className="mt-5 pt-3 stikyHeader stikyBackground">
					<h3 className="text-center stikyHeader">BUSCADOS</h3>
					<form>
						<div className="form-row mb-3 px-2 stikyHeader">
							<div className="col-8">
								<input
									type="text"
									className="form-control buscarFind_lost_Pets_responsive"
									placeholder="Buscar"
								/>
							</div>
							<div className="col stiky">
								<Link to="/AddForm">
									<button type="button" className="btn">
										Solicitar Búsqueda
									</button>
								</Link>
							</div>
						</div>
					</form>
				</div>
				<div className="row">
					<div className=" col-12 ListBody">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.lostPets.map((item, index) => {
									return (
										<Link
											to="/MatchAlert"
											key={index}
											className=""
											style={{ maxWidth: "100%", textDecoration: "none" }}>
											<div
												className="card mb-3 ml-5 mt-0"
												style={{ maxWidth: "100px;", borderRadius: "50px" }}>
												<div className="row no-gutters">
													<div className="col-4">
														<img src={cat1} className="card-img" alt="Pet" />
													</div>
													<div className="col-8">
														<div className="card-body">
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
															<h4>
																<span
																	className="badge badge-primary"
																	style={{ borderRadius: "50px" }}>
																	{item.size}
																</span>
															</h4>
															<h4>
																<span
																	className="badge badge-primary"
																	style={{ borderRadius: "50px" }}>
																	{item.color}
																</span>
															</h4>
															<h4>
																<span
																	className="badge badge-primary"
																	style={{ borderRadius: "50px" }}>
																	Dueño: {item.user}
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
				</div>
				<div className="row">
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
