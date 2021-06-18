import React, { useContext, Fragment } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { AuthContext } from "./contexts/authContext";
function App() {
	const authContext = useContext(AuthContext);
	console.log(authContext.isLoggedIn);
	return (
		<Fragment>
			<MainHeader />
			<main>
				{!authContext.isLoggedIn && <Login />}
				{authContext.isLoggedIn && <Home />}
			</main>
		</Fragment>
	);
}

export default App;
