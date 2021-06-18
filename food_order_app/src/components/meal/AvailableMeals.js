import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import React from "react";
import { DUMMY_MEALS } from "./dummy_data";
import MealItem from "./MealItem";
function AvailableMeals() {
	const mealList = DUMMY_MEALS.map((data) => (
		<MealItem key={data.id} item={data} />
	));
	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealList}</ul>
			</Card>
		</section>
	);
}

export default AvailableMeals;
