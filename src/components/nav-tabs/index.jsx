import React from "react";

/**
 * @author      Nandani.V.Patel
 * @date        07th Dec 2024
 * @description navigation comonent
 * @param       tabes name
 * @response     
 **/

const NavTabs = ({ activeTab, setActiveTab }) => {
	const tabs = ["All", "Airing", "Complete", "Upcoming"];

	return (
		<div className="d-flex justify-content-between align-items-center bg-white p-2 mb-2 shadow-sm rounded">
			<nav className="nav">
				{tabs?.map((tab) => (
					<a
						key={tab}
						className={`nav-link fw-normal ${activeTab === tab ? "text-dark fw-bold" : "text-muted"
							}`}
						onClick={() => setActiveTab(tab)}
						style={{ cursor: 'pointer' }}
					>
						{tab}
					</a>
				))}
			</nav>
		</div>
	);
};

export default NavTabs;
