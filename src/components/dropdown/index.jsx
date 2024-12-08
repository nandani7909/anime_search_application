import React from "react";

const Dropdown = ({ options, selectedValue, onChange, label }) => {
	return (
		<div className="col-md-3">
			<select
				className="form-select"
				aria-label={`Select ${label}`}
				value={selectedValue}
				onChange={(e) => onChange(e.target.value)}
			>
				<option value="">{`Select ${label}`}</option>
				{options?.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
