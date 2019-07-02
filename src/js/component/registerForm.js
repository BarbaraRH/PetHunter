import React from "react";
import { Link } from "react-router-dom";
import "./petStyle.css";

export const RegisterForm = () => (
	<div className="container greenBackground">
		<div id="sideBarLeft" />
		<div className="row">
			<div className="col-2" />
			<div className="col-8">
				<div className="card-body card">
					<h3 className="titleFromForms">
						Por favor, <br /> cuéntanos sobre ti!
					</h3>
					<form>
						<div className="col-12 movileContainer">
							<div className="input-group form-group">
								<div className="input-group-prepend" />
								<input
									id="input1"
									type="text"
									className="form-control"
									placeholder="Usuario Pet Lover"
									name="user"
								/>
							</div>

							<div className="input-group form-group">
								<input
									id="input2"
									type="password"
									className="form-control"
									placeholder="contraseña"
									name="password1"
								/>
							</div>

							<div className="input-group form-group">
								<input
									id="input3"
									type="password"
									className="form-control"
									placeholder="repite contraseña"
									name="password2"
								/>
							</div>

							<div className="input-group form-group">
								<input
									id="input4"
									type="text"
									className="form-control"
									placeholder="correo electronico"
									name="mail"
								/>
							</div>
							<input
								type="button"
								onClick={function() {
									document.querySelector(".movileContainer").style.animation = "next 3s forwards";
									document.querySelector("#nextBtn").value = "Become a Pet Hunter";
									setTimeout(function() {
										document.querySelector("#input1").placeholder = "número de Cuenta Bancaria";
										document.querySelector("#input2").placeholder = "Banco Comercial";
										document.querySelector("#input3").placeholder = "tipo de cuenta";
										document.querySelector("#input4").placeholder = "Cédula de identidad";

										document.querySelector("#input1").name = "acount";
										document.querySelector("#input2").name = "Bank";
										document.querySelector("#input3").name = "acountType";
										document.querySelector("#input4").name = "socialNumber";
									}, 1000);
								}}
								value="Next"
								className="btn"
								id="nextBtn"
							/>
						</div>
					</form>
				</div>
			</div>
			<div className="col-2" />
		</div>
		<div id="sideBarRight"> </div>
	</div>
);
