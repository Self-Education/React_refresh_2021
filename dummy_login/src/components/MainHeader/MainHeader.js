import React, { useContext } from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import { AuthContext } from "../../contexts/authContext";
const MainHeader = () => {
	const authContext = useContext(AuthContext);

	return (
		<header className={classes["main-header"]}>
			<h1>A Typical Page</h1>
			<Navigation
				isLoggedIn={authContext.isLoggedIn}
				onLogout={authContext.logout}
			/>
		</header>
	);
};

export default MainHeader;
