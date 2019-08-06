import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Context } from "../store/appContext";

export class Detail extends React.Component {
	render() {
		return (
			<div>
				<Navbar title="" />
				<div className="container-fluid mt-5 pt-5">
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
											<div className="card-text">
												<p>raza: {store.lostPets[index].breed}</p>
												<p>tamaño: {store.lostPets[index].size}</p>
												<p>color: {store.lostPets[index].color}</p>
												<span>usuario:</span>
												<span>
													<Link to="/UserContact"> {store.lostPets[index].user}</Link>
												</span>
											</div>
										</div>
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

Detail.propTypes = {
	match: PropTypes.object
};
