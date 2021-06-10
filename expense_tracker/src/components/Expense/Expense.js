import "./styles/Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
const Expense = ({ expenses }) => {
	return (
		<Card className="expenses">
			{expenses !== null &&
				expenses.length > 0 &&
				expenses.map((e) => <ExpenseItem key={e.id} expense={e} />)}
		</Card>
	);
};
export default Expense;
