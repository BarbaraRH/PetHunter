import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar_3 } from "../component/navbar_3";
import { Footer } from "../component/footer";

export class AddForm extends React.Component {
	render() {
		return (
			<div>
				<Navbar_3 />
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
												value={store.breed}
												className="form-control"
												onChange={() => actions.handleSelect(event, "breed")}>
												<option value="">Selecciona la Raza</option>
												<option value="">A</option>
												<option value="Alano">Alano</option>
												<option value="Alaskan Malamute">Alaskan Malamute</option>
												<option value="American Staffordshire Terrier">
													American Staffordshire Terrier
												</option>
											</select>
										</div>
										<div className="form-group border-secondary p-4 rounded">
											<div className="row">
												<div className="col-12 text-center">
													<p>Tamaño</p>
													<select
														name="size"
														value={store.size}
														className="form-control"
														onChange={() => actions.handleSelect(event, "size")}>
														<option value="">Selecciona el tamaño</option>
														<option value="Chico">Chico</option>
														<option value="Mediano">Mediano</option>
														<option value="Grande">Grande</option>
													</select>
												</div>
											</div>
										</div>
										<div className="form-group border-secondary p-4 rounded">
											<div className="row ">
												<div className="col-12 text-center">
													<p>Género</p>
												</div>
											</div>

											<div className="row">
												<div className="col-12 text-center">
													<select
														name="gender"
														value={store.gender}
														className="form-control"
														onChange={() => actions.handleSelect(event, "gender")}>
														<option value="">Selecciona el genero</option>
														<option value="macho">macho</option>
														<option value="hembra">hembra</option>
													</select>
												</div>
											</div>
										</div>
										<div className="form-group border-secondary p-4 rounded">
											<p className="text-center mb-3">Lugar de extravío</p>
											<select
												className="form-control mb-2"
												name="city"
												value={store.city}
												onChange={() => actions.handleSelect(event, "city")}>
												<option value="">Elije tu Ciudad</option>
												<option value="Santiago">Santiago</option>
												<option value="Rancagua">Rancagua</option>
												<option value="Valparaiso">Valparaiso</option>
												<option value="Viña del Mar">Viña del Mar</option>
											</select>
											<select
												className="form-control mb-2"
												name="district"
												value={store.district}
												onChange={() => actions.handleSelect(event, "district")}>
												<option value="">Elije tu comuna</option>
												<option value="Santiago Centro">Santiago Centro</option>
												<option value="Ñuñoa">Ñuñoa</option>
												<option value="Providencia">Providencia</option>
												<option value="Peñalolén">Peñalolén</option>
											</select>
											<p className="text-center mt-4 mb-3">Selecciona cruce de calles</p>
											<input
												type="text"
												name="street1"
												className="form-control mb-2"
												placeholder="calle 1"
											/>
											<input
												type="text"
												name="street2"
												className="form-control mb-2"
												placeholder="calle 2"
											/>
										</div>
										<input
											type="submit"
											className="btn my-4 btn-block importantBtn"
											placeholder="Buscar"
										/>
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
