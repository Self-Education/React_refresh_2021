import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense.js";
import { useState } from "react";
function App() {
	const initialExpenses = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: "e2",
			title: "New TV",
			amount: 799.49,
			date: new Date(2021, 2, 12),
		},
		{
			id: "e3",
			title: "Car Insurance",
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: "e4",
			title: "New Desk (Wooden)",
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];

	const [expenses, setExpenses] = useState(initialExpenses);
	const saveNewExpense = (newData) => {
		console.log(newData);
		setExpenses((prevData) => {
			newData["id"] = Math.random();
			const newDate = new Date(newData["date"]);
			newData["date"] = new Date(
				newDate.getTime() + newDate.getTimezoneOffset() * 60000
			);
			return [...prevData, newData];
		});
	};
	return (
		<div className="App">
			<NewExpense saveNewExpense={saveNewExpense} />
			<Expense expenses={expenses} />
		</div>
	);
}

export default App;
