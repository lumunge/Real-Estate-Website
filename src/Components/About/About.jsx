export default function About() {
	return (
		<div className="about" id="about">
			<div className="company">
				<p className="heading">Our Company's Statistics</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Aliquam vitae nam a! Consequatur ut veniam iste, temporibus
					eveniet repudiandae quia! Animi quo expedita molestiae
					deleniti soluta in saepe beatae a est. Enim inventore itaque
					ea voluptas quibusdam dolore esse dignissimos?
				</p>
				<br />
				<p>
					{" "}
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Aliquam vitae nam a! Consequatur ut veniam iste, temporibus
					eveniet repudiandae quia! Animi quo expedita molestiae
					deleniti soluta in saepe beatae a est. Enim inventore itaque
					ea voluptas quibusdam dolore esse dignissimos?
				</p>
			</div>
			<div className="stats">
				<div className="apartments">
					<p>
						<span>784</span> <br /> Apartments
					</p>
				</div>
				<div className="clients">
					<p>
						<span>3854</span>
						<br /> Clients
					</p>
				</div>
				<div className="employees">
					<p>
						<span>24</span>
						<br /> Employees
					</p>
				</div>
				<div className="awards">
					<p>
						<span>14</span>
						<br /> Awards
					</p>
				</div>
			</div>
		</div>
	);
}
