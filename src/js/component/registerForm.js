import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "./petStyle.css";

let invalidField = 0;

export const RegisterForm = props => (
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
						<Context.Consumer>
							{({ store, actions }) => {
								return (
									<form className="text-center" onSubmit={() => actions.register(event)}>
										{" "}
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
											<Link to="/">
												<input
													type="button"
													value="Atrás"
													className="btn btn-block commonBtn mt-4 mb-4"
												/>
											</Link>

											<button
												type="submit"
												className="btn importantBtn w-100"
												onClick={props.history.goBack}>
												registrarse
											</button>
										</div>
									</form>
								);
							}}
						</Context.Consumer>
					</div>
				</div>
				<div className="col-2 col-md-3" />
			</div>

			<div id="sideBarRight"> </div>
		</div>
	</div>
);

RegisterForm.propTypes = {
	history: PropTypes.object
};

/*<input
                                            type="button"
                                            onClick={function() {
                                                let user = document.querySelector("#input1").value;
                                                let pass1 = document.querySelector("#input2").value;
                                                let pass2 = document.querySelector("#input3").value;
                                                let mail = document.querySelector("#input4").value;

                                                if (
                                                    document.querySelector("#nextBtn").value == "Inicia la búsqueda" &&
                                                    document.querySelector("#input1").value != "" &&
                                                    document.querySelector("#input2").value != "" &&
                                                    document.querySelector("#input3").value != "" &&
                                                    document.querySelector("#input4").value != ""
                                                ) {
                                                    invalidField == 1;
                                                    document.querySelector(".titleFromForms").parentNode.style.animation = "";
                                                    document.querySelector("#nextBtn").type = "submit";
                                                }

                                                if (pass1 == pass2 && user != "" && mail != "" && mail.includes("@")) {
                                                    document.querySelector(".movileContainer").style.animation =
                                                        "next 1s forwards";
                                                    document.querySelector("#nextBtn").value = "Inicia la búsqueda";
                                                    let advise = document.querySelector("#advise");
                                                    if (advise != null) {
                                                        advise.parentNode.removeChild(advise);
                                                    }
                                                    setTimeout(function() {
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
                                                        invalidField = 0;
                                                    }, 500);
                                                } else {
                                                    if (
                                                        document.querySelector("#input1").value == "" &&
                                                        document.querySelector("#input2").value == "" &&
                                                        document.querySelector("#input3").value == "" &&
                                                        document.querySelector("#input4").value == ""
                                                    ) {
                                                        document.querySelector(".titleFromForms").parentNode.style.animation =
                                                            "invalidForm 0.13s 2 forwards";
                                                    }
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
                                                        node.id = "advise";
                                                        document.querySelector(".movileContainer").appendChild(node);
                                                        invalidField = 1;
                                                        return invalidField;
                                                    }
                                                }
                                            }}
                                            value="Siguiente"
                                            className="btn importantBtn w-100"
                                            id="nextBtn"
                                        />*/
