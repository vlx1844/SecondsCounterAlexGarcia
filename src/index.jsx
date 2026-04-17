import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./SecondsCounter";

let count = 0;
let running = true;
let countdownMode = false;
let alertLimit = null;

const root = ReactDOM.createRoot(document.getElementById('app'));

const updateCounter = () => {
    if (running) {
        if (countdownMode && count > 0) {
            count--;
        } else if (!countdownMode) {
            count++;
        }

        if (alertLimit !== null && count === alertLimit) {
            alert("Tiempo alcanzado: " + alertLimit);
            alertLimit = null; 
        }
    }

    root.render(
        <div className="container text-center mt-5">
            <SecondsCounter seconds={count} />
            
            <div className="btn-group mt-3">
                <button className="btn btn-outline-secondary" onClick={() => running = false}>Parar</button>
                <button className="btn btn-outline-secondary" onClick={() => running = true}>Continuar</button>
                <button className="btn btn-outline-secondary" onClick={() => { count = 0; countdownMode = false; }}>Reiniciar</button>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-4">
                <div>
                    <label className="d-block small fw-bold text-secondary">Cuenta atrás desde:</label>
                    <input type="number" className="form-control border-secondary" 
                        onChange={(e) => { 
                            count = parseInt(e.target.value) || 0; 
                            countdownMode = true; 
                        }} />
                </div>
                <div>
                    <label className="d-block small fw-bold text-secondary">Alerta en segundo:</label>
                    <input type="number" className="form-control border-secondary" 
                        onChange={(e) => alertLimit = parseInt(e.target.value)} />
                </div>
            </div>
        </div>
    );
};

setInterval(updateCounter, 1000);