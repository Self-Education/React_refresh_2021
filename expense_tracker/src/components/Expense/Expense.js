import { useState } from "react";
import "./styles/Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter.js";
import Chart from "../Chart/Chart";
const Expense = ({ expenses }) => {
	const defaultYear = 2019;
	const [filteredYear, setYear] = useState(defaultYear);
	// const initialFilteredExpenses = expenses.filter(e => e.date.getFullYear() == defaultYear)
	// const [filteredExpenses, setExpenses] = useState(initialFilteredExpenses);
	const filterByYear = (year) => {
		setYear(year);
	};

	const expenseByYear = expenses.filter(
		(e) => e.date.getFullYear() == filteredYear
	);

	const yearOptions = [2019, 2020, 2021, 2022];

	return (
		<Card className="expenses">
			<ExpenseFilter
				filterByYear={filterByYear}
				yearOptions={yearOptions}
				defaultYear={defaultYear}
			/>
			<Chart expenseByYear={expenseByYear} />
			{expenseByYear !== null &&
				expenseByYear.length > 0 &&
				expenseByYear.map((e) => (
					<ExpenseItem key={e.id} expense={e} />
				))}
		</Card>
	);
};
export default Expense;
