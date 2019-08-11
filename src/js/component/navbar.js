import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

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
				<div className="row p-3 stikyBackground text-center">
					<div className="col-12" />
					<div className="col-12 text-center">
						<Context.Consumer>
							{({ store, actions }) => {
								return (
									<form onSubmit={() => actions.search(store.statusName, event)}>
										<input
											type="text"
											name="search"
											className="form-control"
											placeholder="Buscar"
										/>
									</form>
								);
							}}
						</Context.Consumer>
					</div>
				</div>
			</nav>
		);
	}
}

Navbar.propTypes = {
	title: PropTypes.string
};
