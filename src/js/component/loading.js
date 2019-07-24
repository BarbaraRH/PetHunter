import React from "react";
import { Link } from "react-router-dom";
import cat from "../../img/cat_1.png";

/* import "./petStyle.css"; */

export const Loading = () => (
	<div className="cat">
		<div className="row w-100">
			<div className="col-2" />
			<div className="col-8">
				<div className="loadingAnimal" style={{ height: "200px" }} />
			</div>
			<div className="col-2" />
		</div>
	</div>
);
