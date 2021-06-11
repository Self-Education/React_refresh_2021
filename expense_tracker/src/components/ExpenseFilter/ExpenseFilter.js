import "./styles/ExpenseFilter.css";

const ExpenseFilter = ({ filterByYear, yearOptions, defaultYear }) => {
	const changeHandler = (e) => {
		filterByYear(e.target.value);
	};
	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select onChange={changeHandler}>
					{(yearOptions != null && yearOptions.length) > 0 &&
						yearOptions.map((year, index) =>
							year === defaultYear ? (
								<option key={index} value={year} selected>
									{year}
								</option>
							) : (
								<option key={index} value={year}>
									{year}
								</option>
							)
						)}
				</select>
			</div>
		</div>
	);
};

export default ExpenseFilter;
