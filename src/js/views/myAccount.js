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
					<div className="row justify-content-center">
						<div className="" style={{ width: "18rem" }}>
							<div className="text-center  rounded shadow fondo-micuenta mt-4">
								<h1 className="text-center">Mi Cuenta</h1>
								<img
									src="https://ponss.blogs.uv.es/files/2013/05/Foto-carnet-Estefan%C3%ADa-Mestre.jpg"
									className=" fotocontact rounded mt-3 shadow"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Carolina Proaño</h5>
									<p className="card-text">carol01@gmail.com</p>
									<Link to={"/"}>
										<p className="card-tex mb-1 badge badge-info">Editar mis datos</p>
									</Link>
								</div>
								<div className="p-2">
									<Link to={"/myPosts"}>
										<button type="button" className="btn btn-danger btn-block mb-3">
											Mis Publicaciones
										</button>
									</Link>
									<Link to={"/"}>
										<button type="button" className="btn btn-danger btn-block mb-3">
											Cerrar Sesión
										</button>
									</Link>
								</div>
							</div>
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
