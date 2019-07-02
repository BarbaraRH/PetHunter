import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export class FindedPets extends React.Component {
	render() {
		return (
			<div className="finded_lostPetsList">
				<Navbar />
				<div className="mt-5 pt-3 stikyHeader">
					<h3 className="text-center stikyHeader">ENCONTRADOS</h3>
					<form>
						<div className="form-row mb-3 px-2 stikyHeader">
							<div className="col-8">
								<input type="text" className="form-control" placeholder="Buscar" />
							</div>
							<div className="col ml-3 stiky">
								<Link to="/AddForm">
									<button type="button" className="btn">
										Informar Hallazgo
									</button>
								</Link>
							</div>
						</div>
					</form>
				</div>
				<div className="ListBody">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.lostPets.map((item, index) => {
								return (
									<Link
										to="/MatchAlert"
										key={index}
										className="card itemList"
										style={{ maxWidth: "100%" }}>
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
													<h5 className="card-title">{item.name}</h5>
													<p className="card-text">
														Raza: {item.breed} <br />
														Tamaño: {item.size} <br />
														Color: {item.color}
													</p>
												</div>
											</div>
										</div>
									</Link>
								);
							});
						}}
					</Context.Consumer>
				</div>
				<Footer />
			</div>
		);
	}
}
