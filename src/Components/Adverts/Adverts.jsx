import React, { useState } from "react";
import ads from "../../Data/AdsData";
import Advert from "./Advert";

export default function Adverts() {
	const [adverts] = useState(ads);

	return (
		<div className="ads-container">
			{adverts.map((ad) => (
				<Advert
					key={ad.id}
					image={ad.image}
					adTitle={ad.title}
					location={ad.location}
					text={ad.text}
				/>
			))}
		</div>
	);
}
