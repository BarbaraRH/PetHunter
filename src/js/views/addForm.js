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
				<div className="container pt-5 pb-5">
					<div className="row pt-5">
						<div className="col-12 text-center mt-5">
							<h2 className="mb-3">Datos de mascota perdida</h2>
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
									<form onSubmit={() => actions.submitAdvert(event)}>
										<input
											type="text"
											name="petName"
											className="form-control mb-2 mt-4"
											placeholder="Nombre mascota perdida"
										/>

										{/*<input type="text" className="form-control mb-2" placeholder="Lugar" /> no es necesario este dato lo arrojara la sollicitud misma*/}
										<input type="text" className="form-control mb-2" placeholder="Número de Chip" />

										<div className="form-group">
											<select className="form-control" id="exampleFormControlSelect1">
												<option value="">Selecciona la Raza</option>
												<option disabled value="">
													A
												</option>
												<option enabled value="">
													Alano
												</option>
												<option value="">Alaskan Malamute</option>
												<option value="">American Staffordshire Terrier</option>
												<option value="">American Water Spaniel</option>
												<option value="">Antiguo Pastor Inglés</option>

												<option disabled value="">
													B
												</option>
												<option value="">Basset Azul de Gaseogne</option>
												<option value="">Basset Hound </option>
												<option value="">Basset leonado de Bretaña</option>
												<option value="">Beagle</option>
												<option value="">Bearded Collie</option>
												<option value="">Bichón Maltés</option>
												<option value="">Bobtail</option>
												<option value="">Border Collie</option>
												<option value="">Boston Terrier</option>
												<option value="">Boxer</option>
												<option value="">Bull Terrier</option>
												<option value="">Bulldog Americano</option>
												<option value="">Bulldog Francés </option>
												<option value="">Bulldog Inglés</option>
											</select>
										</div>
										<div className="form-group border border-secondary p-4 rounded">
											<div className="row">
												<div className="col-12 text-center">
													<p>Tamaño</p>
												</div>
											</div>
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
										</div>
										{/*<input type="text" className="form-control mb-2" placeholder="Color" /> Esto esta demas s hay foto*/}

										<div className="form-group border border-secondary p-4 rounded">
											<div className="row ">
												<div className="col-12 text-center">
													<p>Género</p>
												</div>
											</div>
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
										</div>
										<div className="form-group border border-secondary p-4 rounded">
											<p className="text-center mb-3">Lugar de extravío</p>
											<select className="form-control mb-2">
												<option enabled value="">
													Elije tu Ciudad
												</option>
												<option value="">Santiago</option>
												<option value="">Rancagua</option>
												<option value="">Valparaiso</option>
												<option value="">Viña del Mar</option>
											</select>
											<select className="form-control mb-2">
												<option enabled value="">
													Elije tu comuna
												</option>
												<option value="">Santiago Centro</option>
												<option value="">Ñuñoa</option>
												<option value="">Providencia</option>
												<option value="">Peñalolén</option>
											</select>
											<p className="text-center mt-4 mb-3">Selecciona cruce de calles</p>
											<input type="text" className="form-control mb-2" placeholder="calle 1" />
											<input type="text" className="form-control mb-2" placeholder="calle 2" />
										</div>
										<Link to="/Coincidences" className="text-center">
											<input
												type="submit"
												className="btn my-4 btn-block importantBtn"
												placeholder="Buscar"
											/>
										</Link>
									</form>
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
