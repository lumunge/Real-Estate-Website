export default function Advert({ image, location, adTitle, text }) {
	return (
		<div className="advert">
			<div className="adImage">
				<img src={image} alt={adTitle} />
				<p className="apartment-location">
					<i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
					{location}
				</p>
			</div>
			<div className="advert-details">
				<p className="advertTitle">{adTitle}</p>
				<p className="text">{text}</p>
			</div>
		</div>
	);
}
