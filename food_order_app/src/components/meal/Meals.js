import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealSummary";
import React, { Fragment } from "react";

function Meals() {
	return (
		<Fragment>
			<MealSummary />

			<AvailableMeals />
		</Fragment>
	);
}

export default Meals;
