import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar_3 } from "../component/navbar_3";
import { Footer } from "../component/footer";

export class UserContact extends React.Component {
	render() {
		return (
			<div>
				<Navbar_3 />
				<div className="container pt-5 mt-2 mb-5 pb-5" style={{ width: "22rem" }}>
					<div className="shadow text-center fondo-micuenta">
						<div className="row mt-5">
							<div className="col-md-12  text-center mb-2">
								<h3>Contacto</h3>
							</div>
						</div>
						<div className="row justify-content-center ">
							<div className="col-12 d-block d-sm-block d-md-none mb-5">
								<img
									src="http://trabajoweb.cl/pet/david.jpg"
									className="fotocontact1 rounded border border-info shadow-sm bajo"
									alt="..."
								/>
								<img
									src="http://trabajoweb.cl/pet/perro-s.jpg"
									className="fotocontact2 rounded border border-info shadow-sm sobre"
									alt="..."
								/>
							</div>
							<div className="col-8 justify-content-center d-none d-sm-none d-md-block mb-5">
								<img
									src="http://trabajoweb.cl/pet/david.jpg"
									className="fotocontact1 rounded border border-info shadow-sm bajo"
									alt="..."
								/>
								<img
									src="http://trabajoweb.cl/pet/Otto.jpg"
									className="fotocontact2 rounded border border-info shadow-sm sobre"
									alt="..."
								/>
							</div>
						</div>
						<div className="card-body">
							<h5 className="card-title">Nombre de usuario:</h5>
							<p className="card-text">David</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">Email: david@gmail.com</li>
							<li className="list-group-item">Tel: 555-555-555</li>
							<div className="card-body">
								<h5 className="card-title">Busca a:</h5>
								<p className="card-text">Desconocido</p>
							</div>
						</ul>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
