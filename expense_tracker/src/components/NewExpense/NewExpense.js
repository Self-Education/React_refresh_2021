import ExpenseForm from "./ExpenseForm.js";
import "./styles/NewExpense.css";
const NewExpense = ({ saveNewExpense }) => {
	return (
		<div className="new-expense">
			<ExpenseForm saveNewExpense={saveNewExpense} />
		</div>
	);
};

export default NewExpense;
