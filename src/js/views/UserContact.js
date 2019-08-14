import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export class UserContact extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="container my-5 pt-5 mb-5 pb-5">
					<div className="row mt-5">
						<div className="col-md-12  text-center">
							<h3>Contacto</h3>
						</div>
					</div>
					<div clasName="row">
						<div clasName="col-12">
							<div clasName="row ">
								<img
									src="https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg"
									className="fotocontact1 rounded border border-info shadow-sm"
									alt="..."
								/>
								<img
									src="https://www.fundacion-affinity.org/sites/default/files/el-gato-necesita-tener-acceso-al-exterior.jpg"
									className="fotocontact2 rounded border border-info shadow-sm"
									alt="..."
								/>
							</div>
							<div className="card w-100 shadow mt-5">
								<div className="card-body">
									<h5 className="card-title">Nombre de usuario:</h5>
									<p className="card-text">Claudio</p>
								</div>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">Email: claudio@gmail.com</li>
									<li className="list-group-item">Tel: 555-555-555</li>
									<div className="card-body">
										<h5 className="card-title">Encontro/busca a:</h5>
										<p className="card-text">Cachetes</p>
									</div>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
