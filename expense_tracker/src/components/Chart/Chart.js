import ChartBar from "./ChartBar";
import "./styles/Chart.css";
const Chart = ({ expenseByYear }) => {
	const monthlyExpenses = [
		{ label: "Jan", value: 0 },
		{ label: "Feb", value: 0 },
		{ label: "Mar", value: 0 },
		{ label: "Apr", value: 0 },
		{ label: "May", value: 0 },
		{ label: "Jun", value: 0 },
		{ label: "Jul", value: 0 },
		{ label: "Aug", value: 0 },
		{ label: "Sep", value: 0 },
		{ label: "Oct", value: 0 },
		{ label: "Nov", value: 0 },
		{ label: "Dec", value: 0 },
		,
	];
	let maxValue = 0;
	for (const e of expenseByYear) {
		const index = e.date.getMonth();
		monthlyExpenses[index].value += parseInt(e.amount);
		maxValue = Math.max(maxValue, monthlyExpenses[index].value);
	}
	console.log(monthlyExpenses);
	return (
		<div className="chart">
			{monthlyExpenses.map((e, index) => (
				<ChartBar key={index} mExpense={e} maxValue={maxValue} />
			))}
		</div>
	);
};

export default Chart;
