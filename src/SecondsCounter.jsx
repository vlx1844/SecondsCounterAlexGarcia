import React from "react";

const SecondsCounter = ({ seconds }) => {
	
	const digits = seconds.toString().padStart(6, "0").split("");

	return (
		<div className="bigCounter d-flex justify-content-center bg-black text-white p-3 rounded">
			<div className="calendar mx-1"><i className="far fa-clock"></i></div>
			{digits.map((digit, index) => (
				<div key={index} className="digit mx-1 bg-dark p-2 rounded" style={{ fontSize: "3rem" }}>
					{digit}
				</div>
			))}
		</div>
	);
};

export default SecondsCounter;