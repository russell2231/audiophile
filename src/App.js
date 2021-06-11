import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/homepage/homepage.component";

import "./App.scss";

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
		</>
	);
}

export default App;
