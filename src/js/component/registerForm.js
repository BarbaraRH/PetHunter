import React from "react";
import { Link } from "react-router-dom";
import "./petStyle.css";

let invalidField = 0;

export const RegisterForm = () => (
	<div className="bg">
		<div className="container">
			<div id="sideBarLeft" />

			<div className="row">
				{/*<!--<div className="central"> dsfdffgfdgfd</div>-->*/}
				<div className="col-2 col-md-3" />
				<div className="col-8 col-md-6 mt-5">
					<div className="">
						<h3 className="titleFromForms">
							Por favor, <br /> cuéntanos sobre ti!
						</h3>
						<form className="text-center" action="/">
							<div className="col-12 movileContainer">
								<div className="input-group form-group">
									<div className="input-group-prepend" />
									<input
										id="input1"
										type="text"
										className="form-control text-center"
										placeholder="Usuario"
										name="user"
									/>
								</div>
								<div className="input-group form-group">
									<input
										id="input4"
										type="text"
										className="form-control text-center"
										placeholder="correo electronico"
										name="mail"
									/>
								</div>
								<div className="input-group form-group">
									<input
										id="input2"
										type="password"
										className="form-control text-center"
										placeholder="contraseña"
										name="password1"
									/>
								</div>
								<div className="input-group form-group">
									<input
										id="input3"
										type="password"
										className="form-control text-center"
										placeholder="repite contraseña"
										name="password2"
									/>
								</div>
								<input
									type="button"
									onClick={function() {
										let user = document.querySelector("#input1").value;
										let pass1 = document.querySelector("#input2").value;
										let pass2 = document.querySelector("#input3").value;
										let mail = document.querySelector("#input4").value;

										if (pass1 == pass2 && user != "" && mail != "" && mail.includes("@")) {
											document.querySelector(".movileContainer").style.animation =
												"next 1s forwards";
											document.querySelector("#nextBtn").value = "Become a Pet Hunter";
											setTimeout(function() {
												document.querySelector("#nextBtn").type = "submit";
												document.querySelector("#input1").placeholder = "Cuenta Bancaria";
												document.querySelector("#input2").placeholder = "Banco Comercial";
												document.querySelector("#input3").placeholder = "tipo de cuenta";
												document.querySelector("#input4").placeholder = "Cédula de identidad";
												document.querySelector("#input1").name = "acount";
												document.querySelector("#input2").name = "Bank";
												document.querySelector("#input3").name = "acountType";
												document.querySelector("#input4").name = "socialNumber";
												document.querySelector("#input1").value = "";
												document.querySelector("#input2").value = "";
												document.querySelector("#input3").value = "";
												document.querySelector("#input4").value = "";
											}, 500);
										} else {
											document.querySelector(".titleFromForms").parentNode.style.animation =
												"invalidForm 0.13s 2 forwards";
											setTimeout(function() {
												document.querySelector(".titleFromForms").parentNode.style.animation =
													"";
											}, 260);
											if (invalidField == 0) {
												var node = document.createElement("SPAN");
												var textnode = document.createTextNode(
													`Ops...olvidaste
                                                llenar campos`
												);
												node.appendChild(textnode);
												node.style =
													"background-color: #fff176; border-radius: 25px; padding: 5px;";
												document.querySelector(".movileContainer").appendChild(node);
												invalidField = 1;
												return invalidField;
											}
										}
									}}
									value="Next"
									className="btn importantBtn w-100"
									id="nextBtn"
								/>
								<Link to={"/"}>
									<input type="button" value="Back" className="btn btn-block commonBtn mt-4 mb-4" />
								</Link>
							</div>
						</form>
					</div>
				</div>
				<div className="col-2 col-md-3" />
			</div>

			<div id="sideBarRight"> </div>
		</div>
	</div>
);
