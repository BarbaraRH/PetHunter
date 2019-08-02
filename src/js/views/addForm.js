import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export class AddForm extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="container">
					<div className="row">
						<div className="col-12 text-center mt-5">
							<i className="fas fa-paw fa-3x pt-3" />
						</div>
						<div className="col-12 text-center">
							<p>cargar foto</p>
						</div>
					</div>

					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div className="col-12 mb-5 pb-3">
									<input
										type="text"
										className="form-control mb-2 mt-4"
										placeholder="Nombre mascota perdida"
									/>
									{/*<input type="text" className="form-control mb-2" placeholder="Lugar" /> no es necesario este dato lo arrojara la sollicitud misma*/}
									<input type="text" className="form-control mb-2" placeholder="Número de Chip" />
									<input type="text" className="form-control mb-2" placeholder="Raza" />
									<div className="row" role="group" aria-label="Basic example">
										<div className="col-4 col-md-4">
											<button
												type="button"
												className="btn btn-block commonBtn w-60 h-100 "
												onClick={actions.changeColorAddFormDogBtn}>
												<i className="fas fa-dog fa-2x" />
											</button>
										</div>
										<div className="col-4 col-md-4">
											<button
												type="button"
												className="btn btn-block commonBtn w-60 h-100 "
												onClick={actions.changeColorAddFormDogBtn}>
												<i className="fas fa-dog fa-3x" />
											</button>
										</div>
										<div className="col-4 col-md-4">
											<button
												type="button"
												className="btn btn-block commonBtn w-60 h-100 "
												onClick={actions.changeColorAddFormDogBtn}>
												<i className="fas fa-dog fa-4x" />
											</button>
										</div>
									</div>
									{/*<input type="text" className="form-control mb-2" placeholder="Color" /> Esto esta demas s hay foto*/}
									<div className="row mt-2" role="group" aria-label="Basic example">
										<div className="col-2 col-md-2" />
										<div className="col-4 col-md-4">
											<button
												type="button"
												name=""
												className="btn btn-block commonBtn w-60 h-100"
												onClick={actions.changeColorAddFormDogBtn}>
												<i className="fas fa-mars fa-3x" />
											</button>
										</div>
										<div className="col-4 col-md-4">
											<button
												type="button"
												name=""
												className="btn btn-block commonBtn w-60 h-100"
												onClick={actions.changeColorAddFormDogBtn}>
												<i className="fas fa-venus fa-3x " />
											</button>
										</div>
										<div className="col-2 col-md-2" />
									</div>
									<Link to="/Coincidences" className="text-center">
										<button className="btn my-4 btn-block importantBtn">Buscar</button>
									</Link>
								</div>
							);
						}}
					</Context.Consumer>
				</div>
				<Footer />
			</div>
		);
	}
}
