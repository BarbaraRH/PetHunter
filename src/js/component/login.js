import React from "react";
import { Link } from "react-router-dom";
import "./petStyle.css";
import logo from "../../img/logo.png";

export const Login = () => (
	<div className="container">
		<div className="d-flex justify-content-center">
			<div className="card">
				<div className="card-body">
					<img src={logo} alt="Pet Hunter" className="logo" />
					<form>
						<div className="input-group form-group">
							<div className="input-group-prepend" />
							<input type="text" className="form-control" placeholder="Pet Lover User" />
						</div>

						<div className="input-group form-group">
							<input type="Your Password" className="form-control" placeholder="password" />
						</div>

						<Link className="form-group container" to={"/LostPets"}>
							<input type="submit" value="Start Searching" className="btn btn-danger" />
						</Link>
					</form>
				</div>
			</div>
		</div>
	</div>
);
