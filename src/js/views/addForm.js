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
											placeholder="Nombre mascota"
										/>

										<input
											type="number"
											name="chip"
											className="form-control mb-2"
											placeholder="Número de Chip"
										/>

										{/*<input type="text" className="form-control mb-2" placeholder="Lugar" /> no es necesario este dato lo arrojara la sollicitud misma*/}

										<div className="form-group">
											<select
												name="breed1"
												value={store.selectChoice}
												className="form-control"
												onChange={() => actions.handleSelect(event)}>
												<option value="">Selecciona la Raza</option>
												<option value="">A</option>
												<option value="Alano">Alano</option>
												<option value="Alaskan Malamute">Alaskan Malamute</option>
												<option value="American Staffordshire Terrier">
													American Staffordshire Terrier
												</option>
											</select>
										</div>
										<input
											type="submit"
											className="btn my-4 btn-block importantBtn"
											placeholder="Buscar"
										/>
									</form>

									<div className="form-group border border-secondary p-4 rounded">
										<div className="row">
											<div className="col-12 text-center">
												<p>Tamaño</p>
												<select
													name="size"
													value={store.selectChoice}
													className="form-control"
													onChange={() => actions.handleSelect(event)}>
													<option value="">Selecciona el tamaño</option>
													<option value="Chico">Chico</option>
													<option value="Mediano">Mediano</option>
													<option value="Grande">Grande</option>
												</select>
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

										<div className="row">
											<div className="col-12 text-center">
												<select
													name="genero"
													value={store.selectChoice}
													className="form-control"
													onChange={() => actions.handleSelect(event)}>
													<option value="">Selecciona el genero</option>
													<option value="macho">macho</option>
													<option value="hembra">hembra</option>
												</select>
											</div>
										</div>
									</div>
									<div className="form-group border border-secondary p-4 rounded">
										<p className="text-center mb-3">Lugar de extravío</p>
										<select className="form-control mb-2">
											<option value="">Elije tu Ciudad</option>
											<option value="">Santiago</option>
											<option value="">Rancagua</option>
											<option value="">Valparaiso</option>
											<option value="">Viña del Mar</option>
										</select>
										<select className="form-control mb-2">
											<option value="">Elije tu comuna</option>
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
