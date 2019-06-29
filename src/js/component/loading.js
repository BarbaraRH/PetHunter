import React from "react";
import { Link } from "react-router-dom";
import cat from "../../img/cat_1.png";
import cat2 from "../../img/cat_2.png";
/* import "./petStyle.css"; */

export const Loading = () => (
	<div className="bodySuperseder">
		<div id="spinerContainer" className="container">
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" />
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" />
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" />
			<div className="cat" style={{ height: "70%" }} />
			<div
				className="spinner-border color"
				role="status"
				style={{ margin: "20% 20% 20% 20%", width: "5rem", height: "5rem" }}>
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	</div>
);
