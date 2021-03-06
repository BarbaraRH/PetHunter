import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { InputForm } from "./views/InputForm";
import { ConfigurationPanel } from "./component/ConfigurationPanel";

import { Post } from "./component/post";
import { Login } from "./component/login";
import { RegisterForm } from "./component/registerForm";
import { Loading } from "./component/loading";

import { LostPets } from "./views/LostPets";
import { FindedPets } from "./views/FindedPets";

import { MatchAlert } from "./views/MatchAlert";
import { MyPosts } from "./views/myPosts";
import { Detail } from "./views/detail";
import { MyAccount } from "./views/myAccount";
import { PetHunterHistory } from "./views/petHunterHistory";
import { PetHunterEvaluation } from "./views/petHunterEvaluation";

import injectContext from "./store/appContext";
ConfigurationPanel;
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { AddForm } from "./views/addForm";
import { Coincidences } from "./views/coincidences";
import { UserContact } from "./views/UserContact";
import { DetailHistory } from "./views/detailhistory";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className=" flex-column h-100 indexlessForPreloader">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Switch>
							<Route exact path="/" component={Login} />
							<Route exact path="/loading" component={Loading} />

							<Route path="/LostPets/:theid" component={Detail} />
							<Route path="/FindedPets/:theid" component={Detail} />

							<Route path="/LostPets" component={LostPets} />
							<Route path="/RegisterForm" component={RegisterForm} />

							<Route path="/InputForm" component={InputForm} />
							<Route path="/Loading" component={Loading} />

							<Route path="/myAccount" component={MyAccount} />
							<Route path="/petHunterHistory" component={PetHunterHistory} />
							<Route path="/FindedPets" component={FindedPets} />
							<Route path="/AddForm" component={AddForm} />
							<Route path="/Coincidences" component={Coincidences} />

							<Route path="/ConfigurationPanel" component={ConfigurationPanel} />
							<Route path="/post" component={Post} />
							<Route path="/MatchAlert" component={MatchAlert} />
							<Route path="/myPosts" component={MyPosts} />
							<Route path="/Detail" component={Detail} />
							<Route path="/detailhistory" component={DetailHistory} />
							<Route path="/UserContact" component={UserContact} />

							<Route path="/petHunterEvaluation" component={PetHunterEvaluation} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
