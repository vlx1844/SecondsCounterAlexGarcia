import React from 'react';
import ReactDOM from 'react-dom/client';
import SecondsCounter from './SecondsCounter.jsx';

window.counter = 0;
window.isRunning = true;
window.alertTarget = null;

const root = ReactDOM.createRoot(document.getElementById('app'));

function renderApp() {
    root.render(
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
           
            <SecondsCounter seconds={window.counter} />
            
            <div style={{ marginTop: '20px' }}>
                <button onClick={() => window.isRunning = false}>Pausar</button>
                <button onClick={() => window.isRunning = true}>Continuar</button>
                <button onClick={() => window.counter = 0}>Reiniciar</button>
                <input 
                    type="number" 
                    placeholder="Alerta en..." 
                    style={{ marginLeft: '10px' }}
                    onChange={(e) => window.alertTarget = parseInt(e.target.value)} 
                />
            </div>
        </div>
    );
}

setInterval(() => {
    if (window.isRunning) {
        window.counter++;
        if (window.alertTarget !== null && window.counter === window.alertTarget) {
            alert("Atención: Tiempo alcanzado");
            window.alertTarget = null;
        }
        renderApp();
    }
}, 1000);

renderApp();