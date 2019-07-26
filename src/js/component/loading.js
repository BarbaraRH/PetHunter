import React from "react";
import { Link } from "react-router-dom";
import cat from "../../img/cat_1.png";
import logo2 from "../../img/logo2.png";

/* import "./petStyle.css"; */

export const Loading = () => (
	<div className="preloader h-100 w-100 position-absolute indexpluss loading">
		<div className="row">
			<div className="cat indexpluss">
				<div className="row w-100 indexpluss">
					<div className="col-2 indexpluss" />
					<div className="col-8 indexpluss mt-5 pt-5">
						<div className="loadingAnimal indexpluss" style={{ height: "200px" }} />
					</div>
					<div className="col-2" />
				</div>
			</div>
		</div>
		<div className="row mt-5">
			<div className="col-2" />
			<div className="col-8">
				<div>
					<img className="img-fluid mt-5" src={logo2} />
				</div>
			</div>
			<div className="col-2" />
		</div>
	</div>
);
