import React, { useState } from "react";
import apartments from "../../Data/ApartmentData";
import Apartment from "./Apartment";

export default function Apartments() {
	const [allApartments] = useState(apartments);

	return (
		<div className="main-apartment" id="apartments">
			<p className="apartment-heading">
				More Than 500+ <br /> Apartments For Rent
			</p>
			<div className="apartments-container">
				<div className="apartment-list">
					{allApartments.map((oneApartment) => (
						<Apartment
							key={oneApartment.id}
							title={oneApartment.title}
							image={oneApartment.image}
							price={oneApartment.price}
							bedrooms={oneApartment.bedrooms}
							bathrooms={oneApartment.bathrooms}
						/>
					))}
				</div>
			</div>
			<div className="apartment-footer">
				<div className="search-location">
					<input type="text" placeholder="Search Location " />
					<button>Search</button>
				</div>
				<div  className="viewButton">
					<button className="apartment-btn">
						View All Apartments
					</button>
				</div>
			</div>
		</div>
	);
}
