import React, { useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import { AuthContext } from "../../contexts/authContext";
const formReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "EMAIL":
			return {
				...state,
				email: payload.email,
				emailValid: payload.email.includes("@"),
			};
		case "EMAIL_BLUR":
			return { ...state, isValid: state.email.includes("@") };
		case "PASSWORD":
			return {
				...state,
				password: payload.password,
				passwordValid: payload.password.trim().length > 6,
			};
		case "PASSWORD_BLUR":
			return { ...state, isValid: state.password.trim().length > 6 };
		default:
			return state;
	}
};
const Login = (props) => {
	const authContext = useContext(AuthContext);
	const initialState = {
		email: "",
		emailValid: false,
		password: "",
		passwordValid: false,
	};
	const [formState, dispatch] = useReducer(formReducer, initialState);

	const changHandler = (e) => {
		console.log(e.target.id);
		const field = e.target.name;
		const value = e.target.value;
		switch (field) {
			case "email":
				dispatch({ type: "EMAIL", payload: { email: value } });
				break;
			case "password":
				dispatch({ type: "PASSWORD", payload: { password: value } });
				break;
			default:
				break;
		}
	};

	const blurHandler = (e) => {
		const field = e.target.name;
		switch (field) {
			case "email":
				dispatch({ type: "EMIAL_VALID" });
				break;
			case "password":
				dispatch({ type: "PASSWORD_VALID" });
				break;
			default:
				break;
		}
	};

	const submitHandler = (event) => {
		event.preventDefault();
		authContext.login(formState.email, formState.password);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						formState.emailValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor="email">E-Mail</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formState.email}
						onChange={changHandler}
						onBlur={blurHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${
						formState.passwordValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						value={formState.password}
						onChange={changHandler}
						onBlur={blurHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button
						type="submit"
						className={classes.btn}
						disabled={
							!formState.emailValid || !formState.passwordValid
						}
					>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
