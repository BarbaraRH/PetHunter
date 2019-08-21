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
				<div className="container pt-5 pb-5">
					<Navbar_3 />

					<div className="row pt-5">
						<div className="col-12 text-center mt-5">
							<h2 className="mb-3">Datos de mascota perdida</h2>
						</div>
					</div>

					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div className="row">
									<div className="col-12 mb-5 pb-3 text-center">
										<form name="upload" onSubmit={() => actions.submitAdvert(event)}>
											<div className="border p-2">
												<h4 className="mb-2">Cargar foto</h4>
												<input
													onClick={function() {
														console.log("esto es");
													}}
													id="file-input"
													type="file"
													className="btn btn-info"
													name="file"
												/>
											</div>
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
													<option value="American Water Spaniel ">
														American Water Spaniel{" "}
													</option>
													<option value="American Water Spaniel ">
														American Water Spaniel{" "}
													</option>
													<option value="">B</option>
													<option value="Basset Azul de Gaseogne ">
														Basset Azul de Gaseogne{" "}
													</option>
													<option value="Basset Hound ">Basset Hound </option>
													<option value="Basset leonado de Bretaña">
														Basset leonado de Bretaña
													</option>
													<option value="Beagle ">Beagle </option>
													<option value="Bearded Collie ">Bearded Collie </option>
													<option value="Bichón Maltés ">Bichón Maltés </option>
													<option value="Bobtail ">Bobtail </option>
													<option value="Border Collie ">Border Collie </option>
													<option value="Boston Terrier ">Boston Terrier </option>
													<option value="Boxer ">Boxer </option>
													<option value="Bull Terrier ">Bull Terrier </option>
													<option value="Bulldog Americano ">Bulldog Americano </option>
													<option value="Bulldog Francés ">Bulldog Francés </option>
													<option value="Bulldog Inglés">Bulldog Inglés</option>
													<option value="">C</option>
													<option value="Caniche ">Caniche </option>
													<option value="Carlino">Carlino</option>
													<option value="Chihuahua">Chihuahua</option>
													<option value="Cirneco del Etna">Cirneco del Etna</option>
													<option value="Chow Chow ">Chow Chow </option>
													<option value="Cocker Spaniel Americano ">
														Cocker Spaniel Americano{" "}
													</option>
													<option value="Cocker Spaniel Inglés">Cocker Spaniel Inglés</option>

													<option value="">D</option>
													<option value="Dálmata">Dálmata </option>
													<option value="Dobermann ">Dobermann </option>
													<option value="Dogo Alemán">Dogo Alemán</option>
													<option value="Dogo Argentino">Dogo Argentino</option>
													<option value="Dogo de Burdeos">Dogo de Burdeos</option>
													<option value="">F</option>
													<option value="Finlandés">Finlandés</option>
													<option value="Fox Terrier de pelo liso ">
														Fox Terrier de pelo liso{" "}
													</option>
													<option value="Fox Terrier ">Fox Terrier </option>
													<option value="Foxhound Americano">Foxhound Americano</option>
													<option value="Foxhound Inglés">Foxhound Inglés</option>
													<option value="">G</option>
													<option value="Galgo Afgano ">Galgo Afgano </option>
													<option value="Gigante de los Pirineos">
														Gigante de los Pirineos
													</option>
													<option value="Golden Retriever ">Golden Retriever </option>
													<option value="Gos d-Atura ">Gos d-Atura </option>
													<option value="Gran Danés">Gran Danés</option>
													<option value="">H</option>
													<option value="Husky Siberiano">Husky Siberiano</option>
													<option value="Harrier">Harrier</option>
													<option value="">L</option>
													<option value="Laika de Siberia Occidental">
														Laika de Siberia Occidental
													</option>
													<option value="Laika Ruso-europeo">Laika Ruso-europeo</option>
													<option value="Labrador Retriever">Labrador Retriever</option>

													<option value="">M</option>
													<option value="Mastín del Pirineo">Mastín del Pirineo</option>
													<option value="Mastin del Tibet">Mastin del Tibet</option>
													<option value="Mastín Español">Mastín Español</option>
													<option value="Mastín Napolitano">Mastín Napolitano</option>
													<option value="">P</option>
													<option value="Pastor Alemán">Pastor Alemán</option>

													<option value="Pastor Australiano">Pastor Australiano</option>
													<option value="Pastor Belga ">Pastor Belga </option>
													<option value="Pastor de Brie">Pastor de Brie</option>
													<option value="Pastor de los Pirineos de Cara Rosa ">
														Pastor de los Pirineos de Cara Rosa{" "}
													</option>
													<option value="Pekinés">Pekinés</option>
													<option value="Perdiguero Chesapeake Bay">
														Perdiguero Chesapeake Bay
													</option>
													<option value="Perdiguero de Drentse">Perdiguero de Drentse</option>
													<option value="Perdiguero de Pelo lido">
														Perdiguero de Pelo lido
													</option>
													<option value="Perdiguero de pelo rizado">
														Perdiguero de pelo rizado
													</option>
													<option value="Perdiguero Portugués">Perdiguero Portugués</option>
													<option value="Pitbull ">Pitbull </option>
													<option value="Podenco Ibicenco">Podenco Ibicenco</option>
													<option value="Podenco Portugués">Podenco Portugués</option>
													<option value="presa canario ">presa canario </option>
													<option value="Presa Mallorquin">Presa Mallorquin</option>
													<option value="">R</option>
													<option value="Rottweiler ">Rottweiler </option>
													<option value="Rough Collie">Rough Collie</option>
													<option value="">S</option>
													<option value="Sabueso Español">Sabueso Español</option>
													<option value="Sabueso Hélenico">Sabueso Hélenico</option>
													<option value="Sabueso Italiano">Sabueso Italiano</option>
													<option value="Sabueso Suizo">Sabueso Suizo</option>
													<option value="Samoyedo ">Samoyedo </option>
													<option value="San Bernardo ">San Bernardo </option>
													<option value="Scottish Terrier ">Scottish Terrier </option>
													<option value="Setter Irlandés ">Setter Irlandés </option>
													<option value="Shar Pei ">Shar Pei </option>
													<option value="Shiba Inu ">Shiba Inu </option>
													<option value="Siberian Husky ">Siberian Husky </option>
													<option value="Staffordshire Bull Terrier">
														Staffordshire Bull Terrier
													</option>
													<option value="">T</option>
													<option value="Teckel">Teckel</option>
													<option value="Terranova ">Terranova </option>
													<option value="Terrier Australiano">Terrier Australiano</option>
													<option value="Terrier Escocés ">Terrier Escocés </option>
													<option value="Terrier Irlandés">Terrier Irlandés</option>
													<option value="Terrier Japonés">Terrier Japonés</option>
													<option value="Terrier Negro Ruso">Terrier Negro Ruso</option>
													<option value="Terrier Norfolk">Terrier Norfolk</option>
													<option value="Terrier Norwich">Terrier Norwich</option>
													<option value="">w</option>
													<option value="Whippet">Whippet</option>
													<option value="">Y</option>
													<option value="Yorkshire Terrier">Yorkshire Terrier</option>
												</select>
											</div>
											<div className="form-group grist p-4 rounded">
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
											<div className="form-group grist p-4 rounded">
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

											<div className="form-group grist p-4 rounded">
												<p className="text-center mb-3">Lugar de extravío</p>
												<select
													className="form-control mb-2"
													name="city"
													value={store.city}
													onChange={() => actions.handleSelect(event, "city")}>
													<option value="">Elije tu Ciudad</option>
													<option value="Santiago">Santiago</option>
												</select>
												<select
													className="form-control mb-2"
													name="district"
													value={store.district}
													onChange={() => actions.handleSelect(event, "district")}>
													<option value="">Elije tu comuna</option>
													<option value="Cerrillos">Cerrillos</option>
													<option value="Cerro Navia">Cerro Navia</option>
													<option value="Conchalí">Conchalí</option>
													<option value="El Bosque">El Bosque</option>
													<option value="Estación Central">Estación Central</option>
													<option value="Huechuraba">Huechuraba</option>
													<option value="Independencia">Independencia</option>
													<option value="La Cisterna">La Cisterna</option>
													<option value="La Florida">La Florida</option>
													<option value="La Granja">La Granja</option>
													<option value="La Pintana">La Pintana</option>
													<option value="La Reina">La Reina</option>
													<option value="Las Condes">Las Condes</option>
													<option value="Lo Barnechea">Lo Barnechea</option>
													<option value="Lo Espejo">Lo Espejo</option>
													<option value="Lo Prado">Lo Prado</option>
													<option value="Macul">Macul</option>
													<option value="Maipú">Maipú</option>
													<option value="Ñuñoa">Ñuñoa</option>
													<option value="Padre Hurtado">Padre Hurtado</option>
													<option value="Pedro Aguirre Cerda">Pedro Aguirre Cerda</option>
													<option value="Peñalolén">Peñalolén</option>
													<option value="Providencia">Providencia</option>
													<option value="Pudahuel">Pudahuel</option>
													<option value="Puente Alto">Puente Alto</option>
													<option value="Quilicura">Quilicura</option>
													<option value="Quinta Normal">Quinta Normal</option>
													<option value="Recoleta">Recoleta</option>
													<option value="Renca">Renca</option>
													<option value="San Bernardo">San Bernardo</option>
													<option value="San Joaquín">San Joaquín</option>
													<option value="San Miguel">San Miguel</option>
													<option value="San Ramón">San Ramón</option>
													<option value="Santiago">Santiago</option>
													<option value="Vitacura">Vitacura</option>
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
												<input
													type="submit"
													className="btn my-4 btn-block importantBtn"
													placeholder="Buscar"
												/>
											</div>
										</form>
									</div>
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
