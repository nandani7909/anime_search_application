import React, { useState, useEffect } from "react";
import debounce from "debounce";

/**
 * @author      Nandani.V.Patel
 * @date        08th Dec 2024
 * @description animes serach text
 * @param       using debounce search text
 * @response    search text value 
 **/

const SearchInput = ({ search, setSearch }) => {
	const [searchText, setSearchText] = useState("");

	const handleSearchChange = (e) => {
		const query = e.target.value;
		setSearchText(query);
		onSearch(query);
	};

	const onSearch = debounce((query) => {
		setSearch(query);
	}, 1000);

	useEffect(() => {
		setSearchText(search || "");
	}, [search]);

	return (
		<div className="col-md-9">
			<div className="input-group">
				<span className="input-group-text">
					<i className="fa-solid fa-magnifying-glass" />
				</span>
				<input
					type="text"
					className="form-control"
					placeholder="Search..."
					aria-label="Search"
					value={searchText}
					onChange={handleSearchChange}
				/>
			</div>
		</div>
	);
};

export default SearchInput;