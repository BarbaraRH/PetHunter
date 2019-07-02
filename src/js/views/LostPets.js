import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import cat1 from "../../img/cat_1.png";

export class LostPets extends React.Component {
	render() {
		return (
			<div>
				<div className="row">
					<Navbar />
				</div>
				<div className="row">
					<div className="col-12 stikyHeader">
						<h3 className="text-center stikyHeader">BUSCADOS</h3>
						<form>
							<div className="row stikyHeader">
								<div className="col-8">
									<input type="text" className="form-control" placeholder="Buscar" />
								</div>
								<div className="col-3 stiky">
									<Link to="/AddForm">
										<button type="button" className="btn">
											Buscar
										</button>
									</Link>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="row">
					<div className=" col-12 ListBody">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.lostPets.map((item, index) => {
									return (
										<Link to="/MatchAlert" key={index} className="" style={{ maxWidth: "100%" }}>
											<div className="card mb-3" style={{ maxWidth: "100px;" }}>
												<div className="row no-gutters">
													<div className="col-4">
														<img src={cat1} className="card-img" alt="Pet" />
													</div>
													<div className="col-8">
														<div className="card-body">
															<h5 className="card-title">{item.name}</h5>
															<p className="card-text">
																{item.breed}
																<br />
																{item.size}
																<br />
																{item.color}
																<br />
																{item.user}
															</p>
															<p className="card-text">
																<small className="text-muted">
																	Last updated 3 mins ago
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
