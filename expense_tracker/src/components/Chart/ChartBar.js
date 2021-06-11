import React from "react";

import "./styles/ChartBar.css";

const ChartBar = ({ mExpense, maxValue }) => {
	const height =
		maxValue === 0
			? "0%"
			: Math.round((mExpense.value / maxValue) * 100) + "%";

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div
					className="chart-bar__fill"
					style={{ height: height, backgroundColor: "red" }}
				></div>
			</div>
			<div className="chart-bar__label">{mExpense.label}</div>
		</div>
	);
};

export default ChartBar;
