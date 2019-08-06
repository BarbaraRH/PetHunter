import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../component/footer";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class MyAccount extends React.Component {
	render() {
		return (
			<div className="bg">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<h1 className="text-center">Mi Cuenta</h1>
							<h1 className="text-center">
								<i className="fas fa-user fa-4x" />
							</h1>
							<h3 className="text-center">Nombre Usuario</h3>
							<h3 className="text-center">correo</h3>
							<Link to={"/myPosts"}>
								<h6 className="text-center">Mis Publicaciones</h6>
							</Link>
							<Link to={"/"}>
								<h6 className="text-center">Cerrar Sesión</h6>
							</Link>
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row">
						<Footer />
					</div>
				</div>
			</div>
		);
	}
}
