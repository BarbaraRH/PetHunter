import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Footer } from "../component/footer";
import { Context } from "../store/appContext";

export class Detail extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row justify-content-around">
					<Context.Consumer>
						{({ store, actions }) => {
							let index = this.props.match.params.theid;
							return (
								<div className="card" style={{ width: "18rem" }}>
									<img
										className="card-img-top"
										src={store.lostPets[index].image}
										alt="Card image cap"
									/>
									<div className="card-body">
										<h5 className="card-title">{store.lostPets[index].name}</h5>
										<p className="card-text">
											raza: {store.lostPets[index].breed} <br />
											tamaño: {store.lostPets[index].size} <br />
											color: {store.lostPets[index].color} <br />
											usuario: {store.lostPets[index].user}
										</p>
										<a href="#" className="btn btn-primary">
											Go somewhere
										</a>
									</div>
								</div>
							);
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

Detail.propTypes = {
	match: PropTypes.object
};
