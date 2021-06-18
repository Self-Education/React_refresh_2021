import React, { Fragment } from "react";
import classes from "./Header.module.css";
import MealPic from "../../../assets/meals.jpg";
import CartButton from "../../cart/CartButton";
function Header(props) {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<CartButton />
			</header>

			<div className={classes["main-image"]}>
				<img src={MealPic} alt="backgroun-image" />
			</div>
		</Fragment>
	);
}

Header.propTypes = {};

export default Header;
