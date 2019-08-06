import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="fixed-top container-fluid" style={{ backgroundColor: "#b2ebf2" }}>
				<div className="row">
					<Link to="/myAccount" className="col-2">
						<i className="fas fa-exclamation-circle fa-2x mt-2 mb-2" style={{ color: "#d50000" }} />
					</Link>
					<h3 className="col-9 text-center mt-2 mb-2">{this.props.title}</h3>
				</div>
				<div className="row p-2 stikyBackground text-center">
					<div className="col-12" />
					<div className="col-12 text-center">
						<form>
							<div className="form-row mb-3 px-2">
								<div className="col-12">
									<div className="row">
										<div className="col-6">
											<input type="text" className="form-control" placeholder="Buscar" />
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</nav>
		);
	}
}

Navbar.propTypes = {
	title: PropTypes.string
};
