import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar_3 } from "../component/navbar_3";
import { Footer } from "../component/footer";
import { Context } from "../store/appContext";

export class Detail extends React.Component {
	render() {
		return (
			<div>
				<Navbar_3 title="" />
				<div className="container-fluid mt-5 pt-2">
					<div className="row justify-content-around">
						<Context.Consumer>
							{({ store, actions }) => {
								let index = this.props.match.params.theid;
								return (
									<div className=" mt-5 shadow rounded fondo-micuenta" style={{ width: "18rem" }}>
										<h1 className="card-title text-center mb-4">{store.status[index].name}</h1>
										<img
											className="card-img-top"
											src={store.lostPets[0].image}
											alt="Card image cap"
										/>
										<div className="card-body">
											<div className="card-text">
												<p>
													<strong className="font-weight-bolder">Raza:</strong>
													{" " + store.status[index].breed}
												</p>
												<p>
													<strong className="font-weight-bolder">Nº Chip:</strong>{" "}
													{store.status[index].chip_num}
												</p>
												<p>
													<strong className="font-weight-bolder">Tamaño:</strong>
													{" " + "Chico"}
												</p>
												<p>
													<strong className="font-weight-bolder">Genero:</strong>
													{" " + "Macho"}
												</p>
												<p>
													<strong className="font-weight-bolder">Ciudad:</strong>
													{" " + "Santiago"}
												</p>
												<p>
													<strong className="font-weight-bolder">Comuna:</strong>
													{" " + "Santiago Centro"}
												</p>
												<p>
													<strong className="font-weight-bolder">Cruce de calles:</strong>
													{" " + "Alameda" + " con " + "Bandera"}
												</p>
												<span>
													<strong className="font-weight-bolder">
														usuario: {" " + store.lostPets[0].user}
													</strong>
												</span>
												<span>
													<Link to="/UserContact">
														<button type="button" className="btn btn-danger btn-block">
															Contactar a {" " + store.lostPets[0].user}
														</button>
													</Link>
												</span>
											</div>
										</div>
									</div>
								);
							}}
						</Context.Consumer>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

Detail.propTypes = {
	match: PropTypes.object
};
