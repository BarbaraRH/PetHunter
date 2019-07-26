import React from "react";
import { Link } from "react-router-dom";
import cat from "../../img/cat_1.png";

/* import "./petStyle.css"; */

export const Loading = () => (
	<div className="preloader h-100 position-absolute indexpluss">
		<div className="cat indexpluss">
			<div className="row w-100 indexpluss">
				<div className="col-2 indexpluss" />
				<div className="col-8 indexpluss">
					<div className="loadingAnimal indexpluss" style={{ height: "200px" }} />
				</div>
				<div className="col-2" />
			</div>
		</div>
	</div>
);
