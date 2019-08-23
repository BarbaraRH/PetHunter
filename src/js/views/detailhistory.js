import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar_3 } from "../component/navbar_3";
import { Footer } from "../component/footer";
import { Context } from "../store/appContext";

export class DetailHistory extends React.Component {
	render() {
		return (
			<div>
				<Navbar_3 title="" />
				<div className="container-fluid mt-5 pt-2">
					<div className="row justify-content-around">
						<Context.Consumer>
							{({ store, actions }) => {
								let index = this.props.match.params.theid;
								return (
									<div className=" mt-5" style={{ width: "18rem" }}>
										<h3 className="card-title text-center mb-4">
											Cuentanos en una frase tu historia de éxito
										</h3>
										<div className="form-group">
											<textarea className="form-control" rows="3" placeholder="Tu historia..." />
										</div>
										<Link to="/petHunterHistory">
											<button
												type="button"
												className="btn  btn-block"
												style={{ backgroundColor: "#d50000", color: "white" }}>
												Publicar
											</button>
										</Link>
									</div>
								);
							}}
						</Context.Consumer>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

DetailHistory.propTypes = {
	match: PropTypes.object
};
