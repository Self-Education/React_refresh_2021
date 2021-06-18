import React, { useState } from "react";
const AuthContext = React.createContext({
	isLoggedIn: false,
	logout: () => {},
	login: (email, password) => {},
});

const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setLoggedIn] = useState(
		localStorage.getItem("loggedIn") || false
	);

	const loginHandler = (email, password) => {
		console.log("i am here!");
		setLoggedIn(true);
		localStorage.setItem("loggedIn", true);
	};

	const logoutHandler = () => {
		setLoggedIn(false);
		localStorage.removeItem("loggedIn");
	};
	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				logout: logoutHandler,
				login: loginHandler,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthContextProvider };
