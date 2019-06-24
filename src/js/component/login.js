import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => (
	<div className="container">
		<div className="d-flex justify-content-center h-100">
			<div className="card">
				<div className="card-header">
					<div className="d-flex justify-content-end social_icon" />
				</div>
				<div className="card-body">
					<form>
						<div className="input-group form-group">
							<div className="input-group-prepend" />
							<input type="text" className="form-control" placeholder="username" />
						</div>

						<div className="input-group form-group">
							<input type="password" className="form-control" placeholder="password" />
						</div>

						<div className="form-group container">
							<input type="submit" value="Login" className="btn login_btn" />
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
);
