import React from "react";
import { Link } from "react-router-dom";
import "./petStyle.css";
import logo from "../../img/logo.png";
import { Loading } from "./loading";

export const Login = () => (
	<div className="bg">
		<div className="container-fluid">
			<div className="row">
				<div className="col-2 col-md-4" />
				<div className="col-8 col-md-4 text-center">
					<div>
						<img className="img-fluid" src={logo} />
					</div>
					<form className="text-center">
						<div className="form-group">
							<input id="user" type="text" className="form-control text-center" placeholder="Username" />
						</div>
						<div className="form-group">
							<input
								id="password"
								type="password"
								className="form-control text-center"
								placeholder="password"
							/>
							<Link to={"/lostPets"}>
								<button type="button" className="btn btn-block btn-success mt-3">
									Start Searching
								</button>
							</Link>
							<br />
							<Link to={"/RegisterForm"}>
								<button type="button" className="btn btn-block btn-info">
									Register
								</button>
							</Link>
						</div>
					</form>
				</div>
				<div className="col-2 col-md-4" />
			</div>
		</div>
	</div>
);
