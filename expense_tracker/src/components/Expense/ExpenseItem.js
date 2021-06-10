import "./styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
const ExpenseItem = ({ expense: { id, title, amount, date } }) => {
	const [curTitle, setTitle] = useState(title);

	const clickHandler = (e) => {
		setTitle("title changed");
	};
	return (
		<div className="expense-item">
			<ExpenseDate date={date} />
			<div className="expense-item__description">
				<h2>{curTitle}</h2>
				<div className="expense-item__price">{amount}</div>
			</div>
			<button onClick={clickHandler}>Change title</button>
		</div>
	);
};

export default ExpenseItem;
