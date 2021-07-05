import formatCurrency from "../../utils";

export default function Apartment({
	image,
	title,
	price,
	bathrooms,
	bedrooms,
}) {
	return (
		<div className="single-apartment">
			<div className="apartment-image">
				<img src={image} alt={title} />
			</div>
			<div className="apartment-details">
				<div className="">
					<h4 className="title">{title}</h4>
				</div>
				<div className="apartment-detail">
					<div className="">
						<p className="price">{formatCurrency(price)}</p>
					</div>
					<div className="">
						<p>
							<span className="bath">
								<i class="fa fa-shower" aria-hidden="true"></i>
								{bathrooms}
								<span className="detail"> BA</span>
							</span>
							<span>
								<i class="fa fa-bed" aria-hidden="true"></i>
								{bedrooms}
								<span className="detail"> BD</span>
							</span>
						</p>
					</div>
				</div>
				<button class="checkoutBtn">Check Out</button>
			</div>
			
		</div>
	);
}
