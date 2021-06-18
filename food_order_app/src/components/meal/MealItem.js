import React from "react";
import classes from "./MealItem.module.css";
import MealForm from "./MealForm";
function MealItem({ item }) {
	const price = `$${item.price.toFixed(2)}`;
	return (
		<li className={classes.meal}>
			<div>
				<h3>{item.name}</h3>
				<div className={classes.decription}>{item.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealForm id={item.id} />
			</div>
		</li>
	);
}

export default MealItem;
