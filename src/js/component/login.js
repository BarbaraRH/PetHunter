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
				<div className="col-8 col-md-4">
					<div className="mt-5">
						<div className="container loadingRemover">
							<div className="row">
								<div className="col-2" />
								<div className="col-8 col-md-12">
									<div alt="Pet Hunter" className="logo" />
								</div>
								<div className="col-2" />
							</div>

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
									<Link to={"/lostPets"}>
										<button type="button" className="btn btn-block mt-3">
											Start Searching
										</button>
									</Link>
									<br />
									<Link to={"/RegisterForm"}>
										<button type="button" className="btn btn-block">
											Register
										</button>
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="col-2 col-md-4" />
			</div>
		</div>
	</div>
);
