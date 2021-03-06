import React from "react";
import { Link } from "react-router-dom";
import "./petStyle.css";
import logo from "../../img/logo.png";
import { Loading } from "./loading";
import { Context } from "../store/appContext";

export class Login extends React.Component {
	componentDidMount() {
		setTimeout(function() {
			document
				.querySelector(".loading")
				.parentNode.removeChild(document.querySelector(".loading").parentNode.childNodes[0]);
		}, 4000);
	}
	render() {
		return (
			<div className="bg">
				<Loading />
				<div className="container-fluid position-relative indexless">
					{/*intento poner el preloader aqui*/}
					<div className="row">
						<div className="col-2 col-md-4" />
						<div className="col-8 col-md-4 text-center">
							<div>
								<img className="img-fluid mt-5" src={logo} />
							</div>
							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<form className="text-center">
											<div className="form-group">
												<input
													id="user"
													type="text"
													className="form-control text-center"
													placeholder="Username"
												/>
											</div>
											<div className="form-group">
												<input
													id="password"
													type="password"
													className="form-control text-center"
													placeholder="password"
												/>
												<Link to={"/lostPets"} onClick={() => actions.getAdverts("lost")}>
													<button type="button" className="btn btn-block  mt-3 importantBtn">
														Start Searching
													</button>
												</Link>
												<br />
												<Link to={"/RegisterForm"}>
													<button type="button" className="btn btn-block commonBtn">
														Register
													</button>
												</Link>
											</div>
										</form>
									);
								}}
							</Context.Consumer>
						</div>
						<div className="col-2 col-md-4" />
					</div>
				</div>
			</div>
		);
	}
}
