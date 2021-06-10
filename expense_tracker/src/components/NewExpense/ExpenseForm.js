import "./styles/ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = ({ saveNewExpense }) => {
	const initialData = {
		title: "",
		amount: "",
		date: "",
	};
	const [formData, setData] = useState(initialData);
	const { title, amount, date } = formData;
	const changeHandler = (e) => {
		const target = e.target.name;
		// use function to make sure the prevState is always latest when we have a lot state to udpdate
		setData((prevState) => ({
			...prevState,
			[target]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		saveNewExpense(formData);
	};
	return (
		<form onSubmit={onSubmit}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={title}
						onChange={changeHandler}
						name="title"
						required
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={amount}
						name="amount"
						onChange={changeHandler}
						required
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={date}
						name="date"
						onChange={changeHandler}
						required
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
