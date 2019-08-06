import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export class PetHunterHistory extends React.Component {
	componentDidMount() {
		document.querySelector(".fa-search").parentNode.className = "col-sm-4 col-4 pt-4 pb-3";
		document.querySelector(".fa-bullseye").parentNode.className = "col-sm-4 col-4 pt-4 pb-3";
		document.querySelector(".fa-award").parentNode.className += " active ";
	}

	render() {
		return (
			<div>
				<Navbar title="Historias de Exito" />

				<div className="container-fluid mt-4 pt-5">
					<div className="container-fluid pt-5">
						<div className="row" id="Historystiky">
							<div className="col-4" />
							<div className="col-4">
								<h5 className="text-center">
									<i className="fas fa-binoculars fa-5x pt-5 gold" />
								</h5>
							</div>
							<div className="col-4" />
							<div className="row w-100 pl-5">
								<div className="col-12 text-center">
									<i className="far fa-star fa-2x gold" />
									<i className="far fa-star fa-2x gold" />
									<i className="far fa-star fa-2x gold" />
									<i className="far fa-star fa-2x gold" />
									<i className="far fa-star fa-2x gold" />
								</div>
							</div>
						</div>
						<div className="row justify-content-around pt-5">
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
						</div>
						<div className="row mt-5" />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
