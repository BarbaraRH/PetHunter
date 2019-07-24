import React from "react";
import { Link } from "react-router-dom";
import cat from "../../img/cat_1.png";

/* import "./petStyle.css"; */

export const Loading = () => (
	<div className="bg">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" />
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" />
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" />
		<div className="container d-flex">
			<div className="row w-100 pt-5 mt-5">
				<div className="col-2" />
				<div className="col-8 mt-5 pt-5">
					<div className="cat">
						<div className="row w-100">
							<div className="col-2" />
							<div className="col-8">
								<div className="loadingAnimal" style={{ height: "200px" }} />
							</div>
							<div className="col-2" />
						</div>
					</div>
					<div className="col-2" />
				</div>
			</div>
		</div>
	</div>
);
