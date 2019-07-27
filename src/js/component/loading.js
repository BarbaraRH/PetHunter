import React from "react";
import { Link } from "react-router-dom";
import cat from "../../img/cat_1.png";
import logo2 from "../../img/logo2.png";

/* import "./petStyle.css"; */

export const Loading = () => (
	<div className="preloader h-100 w-100 position-absolute indexpluss loading">
		<div className="cat indexpluss">
			<div className="row w-100 ">
				<div className="col-2 " />
				<div className="col-8  mt-5 pt-5">
					<div className="row float-rigth">
						<div className="col-12" style={{ width: "300px" }}>
							<div className="loadingAnimal indexpluss" style={{ height: "200px", width: "100%" }} />
						</div>
					</div>
					<div className="row float-rigth">
						<div className="col-12" style={{ top: "400px" }}>
							<img className="img-fluid d-block mx-auto pl-5" src={logo2} />
						</div>
					</div>
				</div>
				<div className="col-2" />
			</div>
		</div>
	</div>
);
