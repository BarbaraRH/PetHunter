import React from "react";
import { Link } from "react-router-dom";
import "./finderylostPets.css";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import cat1 from "../../img/cat_1.png";

export class LostPets extends React.Component {
	componentDidMount() {
		document.querySelector(".fa-search").parentNode.className += " active ";
		document.querySelector(".fa-bullseye").parentNode.className = "fas fa-bullseye fa-2x";
		document.querySelector(".fa-award").parentNode.className = "fas fa-award fa-2x";
	}

	render() {
		return (
			<div>
				<Navbar title="BUSCADOS" />
				<div className="container-fluid mt-4">
					<div className="row p-3 stikyBackground text-center">
						<div className="col-12" />
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
					<div className="container-fluid">
						<div className="row justify-content-around">
							<Context.Consumer>
								{({ store, actions }) => {
									return store.lostPets.map((item, index) => {
										return (
											<div className="col-12 col-lg-3 m-1" key={index}>
												<Link to={"/LostPets/" + index}>
													<div className="row">
														<div
															className="col-4 img-ch mb-4 shadow-sm"
															style={{
																backgroundImage: "url(" + item.image + ")"
															}}
														/>
														<div className="col-8  p-2 mb-4 grist shadow-sm">
															<h2 className="card-title" style={{ color: "black" }}>
																{item.name}
															</h2>

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
							<div className="row" style={{ zIndex: 0 }}>
								<div className="col-md-12 col-10 fixed-bottom">
									<div className="row">
										<div className="col-md-10 col-10 " />
										<Link to="/addForm" className="col-md-2 col-2 mb-5 pb-4">
											<i
												className="fas fa-plus-circle ml-4 pl-2"
												style={{ color: "#d50000", fontSize: "4em" }}
											/>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-5" />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
