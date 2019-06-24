import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import logo from "../../img/logo.png";

export const Login = () => (
	<div className="container">
		<div className="d-flex justify-content-center h-100">
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

						<div className="form-group container">
							<input type="submit" value="start Searching" className="btn btn-danger" />
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
);
