import React, { useState } from "react";
import Agent from "./Agent";
import agents from "../../Data/AgentsData";

export default function Agents() {
	const [allAgents] = useState(agents);

	return (
		<div className="agents" id="agents">
			<div className="agents-intro">
				<p className="agents-heading">Meet Our Agents</p>
				<p className="agents-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
					nemo unde quia recusandae explicabo possimus, tempora
					delectus ex consequatur fuga quam assumenda quibusdam labore
					fugiat facere esse.
				</p>
			</div>
			<div className="agents-container">
				{allAgents.map((agent) => (
					<Agent
						key={agent.id}
						name={agent.name}
						title={agent.title}
						image={agent.image}
					/>
				))}
			</div>
		</div>
	);
}
