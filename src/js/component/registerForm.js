import React from "react";
import { Link } from "react-router-dom";
import "./petStyle.css";

const FormInputs = () => (
	<div className="register1">
		<input className="input--style-2" type="text" placeholder="  Nombre Usuario" name="usuario" />
		<input className="input--style-2" type="password" placeholder="  contraseña" name="contraseña" />
		<input className="input--style-2" type="password" placeholder="  repite tu contraseña" name="contraseña2" />
		<input className="input--style-2" type="text" placeholder="  correo electrónico" name="correo" />
	</div>
);

export const RegisterForm = () => (
	<div id="body-div" style={{ display: "flex" }}>
		<div className="Panel">aa</div>
		<div style={{ display: "flex" }}>
			<div className="container">
				<div className="d-flex justify-content-center">
					<div className="card">
						<div className="card-body " style={{ display: "inline" }}>
							<div className="card-body">
								<h3 className="title">Por favor cuéntanos sobre ti!</h3>
								<form method="POST" autoComplete="on">
									<div style={{ display: "flex" }}>
										<div style={{ display: "flex" }} className="container-fluid">
											<FormInputs />
										</div>
									</div>
									<div className="form-group container btn-next">
										<input
											id="btnSiguiente"
											type="button"
											onClick={function next() {
												document.querySelector(".register1").style.animation = "next 2s 1";
												document.querySelector(".register1").style.animationFillMode =
													"forwards";
												document.querySelector(".btn-next").style.marginTop = "58%";
												setTimeout(function() {
													document.querySelector("#btnSiguiente").value = "Enviar";
												}, 290);
												setTimeout(function() {
													document.querySelector(".btn-next").style.marginTop = 0;
												}, 290);
												setTimeout(function() {
													document
														.getElementById("btnSiguiente")
														.removeEventListener("click", next);
												}, 290);
											}}
											value="Siguiente"
											className="btn btn-danger"
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="Panel">aa</div>
	</div>
);
