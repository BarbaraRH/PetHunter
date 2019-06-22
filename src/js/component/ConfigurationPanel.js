import React from "react";
import { Link } from "react-router-dom";

export const ConfigurationPanel = () => (
	<div className="container">
		<div className="d-flex justify-content-center h-100">
			<div className="card">
				<div className="card-header">
					<div className="d-flex justify-content-end social_icon">
						<span>
							<i className="fab fa-facebook-square" />
						</span>
						<span>
							<i className="fab fa-google-plus-square" />
						</span>
						<span>
							<i className="fab fa-twitter-square" />
						</span>
					</div>
				</div>
				<div className="card-body">
					<form>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fas fa-user" />
								</span>
							</div>
							<input type="text" className="form-control" placeholder="username" />
						</div>

						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fas fa-key" />
								</span>
							</div>
							<input type="password" className="form-control" placeholder="password" />
						</div>

						<div className="row align-items-center remember" />
						<div className="form-group" />
					</form>
				</div>
			</div>
		</div>
	</div>
);
