import React from "react";
import { Link } from "react-router-dom";
import "./petStyle.css";
import logo from "../../img/logo.png";
import { Loading } from "./loading";
import { Login2 } from "./login2";

export const Login = () => (
	<div className="bg">
		<div className="row">
			<div className="col-2" />
			<div className="col-8">
				<div className="card-body mt-5">
					<div className="container loadingRemover">
						<Login2 />
					</div>
				</div>
			</div>
			<div className="col-2" />
		</div>
	</div>
);
