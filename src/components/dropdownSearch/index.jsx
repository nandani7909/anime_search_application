import React, { useState } from "react";
import Dropdown from "../dropdown";
import SearchInput from "../searchInput";
import Label from "../label";

/**
 * @author      Nandani.V.Patel
 * @date        07th Dec 2024
 * @description Implement UI Anime type and serach text
 * @param       
 * @response     
 **/

const DropdownSearch = ({ setType, setSearch, typeOptions, search, activeTab, setActiveTab, animesdata }) => {
	const [selectedType, setSelectedType] = useState("");

	const handleTypeChange = (type) => {
		setSelectedType(type);
		setType(type);
	};

	const handleCancel = (label) => {
		if (label === 'Type') {
			setSelectedType("");
			setType("");
		}
		if (label === 'Status') {
			setActiveTab("All");
		}
		if (label === 'Title') {
			setSearch("");
		}
	};

	const labelsData = [
		{ label: "Title", value: search, onCancel: () => handleCancel("Title") },
		{ label: "Status", value: activeTab, onCancel: () => handleCancel("Status") },
		{ label: "Type", value: selectedType, onCancel: () => handleCancel("Type") },
	];

	const handleDelete = () => {
		setSelectedType("");
		setType("");
		setActiveTab("All");
		setSearch("");
	}

	const showlabels = search !== "" || activeTab !== "All" || selectedType !== "";

	return (
		<div className="bg-white p-3 shadow-sm rounded">
			<div className="row align-items-center pt-0 pb-0 py-4 mb-3">
				<Dropdown
					options={typeOptions}
					selectedValue={selectedType}
					onChange={handleTypeChange}
					label="Type"
				/>
				<SearchInput
					search={search}
					setSearch={setSearch}
				/>
			</div>
			{showlabels && (
				<span>
					{animesdata?.data?.pagination?.items?.total || 0} Result{animesdata?.data?.pagination?.items?.total !== 1 ? 's' : ''} found
				</span>
			)}
			<div style={{ display: 'flex', marginTop: '20px', flexWrap: 'wrap' }}>
				{labelsData.map((labelItem, index) => (
					<Label
						key={index}
						label={labelItem.label}
						value={labelItem.value}
						onCancel={labelItem.onCancel}
					/>
				))}
				{showlabels && (
					<span
						style={{
							display: 'flex',
							alignItems: 'center',
							padding: '10px 10px',
							border: '2px solid rgb(245, 246, 248)',
							borderRadius: '15px',
							backgroundColor: 'rgb(245, 246, 248)',
							fontSize: '16px',
							cursor: 'pointer',
							color: '#e74c3c'
						}}
						onClick={handleDelete}
					>
						<i
							className="fa-solid fa-trash"
							style={{ marginRight: '5px', color: '#e74c3c' }}
						/>
						Clear
					</span>
				)}
			</div>
		</div>
	);
};

export default DropdownSearch;
