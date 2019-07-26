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
			<div>
				<Navbar />
				<div className="container-fluid mt-4">
					{/* parte superior menu*/}

					<div className="row p-3 stikyBackground text-center mb-3">
						<div className="col-12">
							<h3 className="text-center">BUSCADOS</h3>
						</div>
						<div className="col-12 text-center">
							<form>
								<div className="form-row mb-3 px-2">
									<div className="col-12">
										<div className="row">
											<div className="col-6">
												<input type="text" className="form-control" placeholder="Buscar" />
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					{/* parte media donde se muestran los gatitos*/}
					<div className="container-fluid">
						<div className="row justify-content-around">
							<Context.Consumer>
								{({ store, actions }) => {
									return store.lostPets.map((item, index) => {
										return (
											<div className="col-12 col-lg-3 m-1" key={index}>
												<Link to="/MatchAlert">
													<div className="row">
														<div
															className="col-4 img-ch mb-4 shadow-sm"
															style={{
																backgroundImage: item.image
															}}
														/>
														<div className="col-8  p-2 mb-4 grist shadow-sm">
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
												</Link>
											</div>
										);
									});
								}}
							</Context.Consumer>
						</div>
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
