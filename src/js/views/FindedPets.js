import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import cat1 from "../../img/cat_1.png";

export class FindedPets extends React.Component {
	componentDidMount() {
		document.querySelector(".fa-search").parentNode.className = "fas fa-search fa-2x";
		document.querySelector(".fa-bullseye").parentNode.className += " active ";
		document.querySelector(".fa-award").parentNode.className = "fas fa-award fa-2x";
	}

	render() {
		return (
			<div>
				<Navbar title="ENCONTRADOS" />
				<div className="container-fluid mt-4">
					{/* parte superior menu*/}

					<div className="row p-3 stikyBackground text-center">
						<div className="col-12" />
						<div className="col-12 text-center">
							<form>
								<div className="form-row mb-3 px-2 stikyHeader">
									<div className="col-12">
										<input type="text" className="form-control" placeholder="Buscar" />
									</div>
								</div>
								<Link to="/AddForm">
									<button type="button" className="btn">
										Informar Hallazgo
									</button>
								</Link>
							</form>
						</div>
					</div>
					{/* parte media donde se muestran los gatitos*/}
					<div className="container-fluid">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.lostPets.map((item, index) => {
									return (
										<Link to="/MatchAlert" key={index}>
											<div className="row">
												<div
													className="col-4 col-md-4 img-ch mb-2"
													style={{
														backgroundImage: item.image
													}}
												/>
												<div className="col-8 col-md-8 p-2 mb-2 grist">
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
															Se encontró con fecha -1-1-2019
														</small>
													</p>
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
			</div>
		);
	}
}
