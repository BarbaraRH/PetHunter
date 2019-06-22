import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { InputForm } from "./views/InputForm";
import { ConfigurationPanel } from "./component/ConfigurationPanel";

import { Post } from "./component/post";

import { LostPets } from "./views/LostPets";
import { FindedPets } from "./views/FindedPets";
import { MatchAlert } from "./views/MatchAlert";
import { MyAccount } from "./views/myAccount";
import { PetHunterHistory } from "./views/petHunterHistory";
import { PetHunterEvaluation } from "./views/petHunterEvaluation";

import injectContext from "./store/appContext";
ConfigurationPanel;
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/InputForm" component={InputForm} />
							<Route path="/" component={LostPets} />
							<Route path="/FindedPets" component={FindedPets} />
							<Route path="/ConfigurationPanel" component={ConfigurationPanel} />
							<Route path="/post" component={Post} />
							<Route path="/MatchAlert" component={MatchAlert} />
							<Route path="/myAccount" component={MyAccount} />
							<Route path="/petHunterHistory" component={PetHunterHistory} />
							<Route path="/petHunterEvaluation" component={PetHunterEvaluation} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
