import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import { Navbar_2 } from "../component/navbar_2";
import { Footer } from "../component/footer";

export class PetHunterHistory extends React.Component {
	componentDidMount() {
		document.querySelector(".fa-search").parentNode.className = "col-sm-4 col-4 pt-4 pb-3";
		document.querySelector(".fa-bullseye").parentNode.className = "col-sm-4 col-4 pt-4 pb-3";
		document.querySelector(".fa-award").parentNode.className += " active ";
	}

	render() {
		return (
			<div>
				<Navbar_2 title="HISTORIAS DE EXITO" />

				<div className="container-fluid mt-4 pt-5">
					<div className="container-fluid pt-5">
						<div className="row justify-content-around pt-5">
							<Context.Consumer>
								{({ store, actions }) => {
									return store.history.map((item, index) => {
										return (
											<div className="col-12 col-lg-3 m-1" key={index}>
												<div className="row">
													<div
														className="col-4 img-ch mb-4 shadow-sm"
														style={{
															backgroundImage: "url(" + item.url + ")"
														}}
													/>
													<div className="col-8  p-2 mb-4 grist shadow-sm">
														<h4 className="card-title" style={{ color: "black" }}>
															{item.user}
														</h4>
														<h5 className="card-text font-italic ml-3">
															&quot;
															{item.description}
															... &quot;
														</h5>
													</div>
												</div>
											</div>
										);
									});
								}}
							</Context.Consumer>
						</div>
						<div className="row mt-5" />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
