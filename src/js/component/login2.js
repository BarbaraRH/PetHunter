import React from "react";
import { Link } from "react-router-dom";
import "./petStyle.css";
import logo from "../../img/logo.png";

export const Login2 = () => (
	<div>
		<div className="row">
			<div className="col-2" />
			<div className="col-8">
				<div alt="Pet Hunter" className="logo" />
			</div>
			<div className="col-2" />
		</div>

		<form>
			<div className="form-group">
				<label className="sr-only" htmlFor="user">
					User
				</label>
				<input id="user" type="text" className="form-control" placeholder="Pet Lover User" />
			</div>
			<div className="form-group">
				<label className="sr-only" htmlFor="password">
					Password
				</label>
				<input id="password" type="password" className="form-control" placeholder="password" />
			</div>

			<Link to={"/lostPets"}>
				<button type="submit" className="btn">
					Start Searching
				</button>
			</Link>
			<br />
			<br />
			<Link to={"/RegisterForm"}>
				<button type="submit" className="btn">
					Register
				</button>
			</Link>
		</form>
	</div>
);
