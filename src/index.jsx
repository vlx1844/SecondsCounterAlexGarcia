import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SecondsCounter from "./SecondsCounter";

const App = () => {
	const [timer, setTimer] = useState(0);
	const [active, setActive] = useState(true);
	const [isCountdown, setIsCountdown] = useState(false);
	const [alertTime, setAlertTime] = useState(null);

	useEffect(() => {
		let interval = null;
		if (active) {
			interval = setInterval(() => {
				setTimer(prev => {
					const nextValue = isCountdown ? prev - 1 : prev + 1;
					
					// Lógica de Alerta
					if (nextValue === alertTime) {
						alert(`¡Se ha alcanzado el tiempo programado: ${alertTime}!`);
					}

					// Detener si llega a 0 en cuenta regresiva
					if (isCountdown && nextValue <= 0) {
						setActive(false);
						return 0;
					}
					return nextValue;
				});
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [active, isCountdown, alertTime]);

	return (
		<div className="text-center mt-5">
			<SecondsCounter seconds={timer} />
			
			<div className="controls mt-4">
				<button className="btn btn-danger m-1" onClick={() => setActive(false)}>Parar</button>
				<button className="btn btn-success m-1" onClick={() => setActive(true)}>Resumir</button>
				<button className="btn btn-warning m-1" onClick={() => { setTimer(0); setIsCountdown(false); }}>Reiniciar</button>
			</div>

			<div className="inputs mt-4 p-3 border rounded d-inline-block bg-light">
				<div className="mb-2">
					<input type="number" placeholder="Cuenta regresiva desde..." 
						onChange={(e) => { 
							setTimer(parseInt(e.target.value)); 
							setIsCountdown(true); 
						}} />
				</div>
				<div>
					<input type="number" placeholder="Alerta en el segundo..." 
						onChange={(e) => setAlertTime(parseInt(e.target.value))} />
				</div>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#app"));