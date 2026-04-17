import React from "react";

const SecondsCounter = (props) => {
    let s = props.seconds;
    let d1 = Math.floor(s / 1) % 10;
    let d2 = Math.floor(s / 10) % 10;
    let d3 = Math.floor(s / 100) % 10;
    let d4 = Math.floor(s / 1000) % 10;
    let d5 = Math.floor(s / 10000) % 10;
    let d6 = Math.floor(s / 100000) % 10;

    return (
        <div className="d-flex justify-content-center bg-black p-3 rounded my-4 mx-auto" style={{ width: "fit-content" }}>
            <div className="bg-dark text-white p-4 m-1 rounded border border-secondary"><i className="far fa-clock fa-2x"></i></div>
            <div className="bg-dark text-white p-4 m-1 rounded border border-secondary" style={{ fontSize: "3rem" }}>{d6}</div>
            <div className="bg-dark text-white p-4 m-1 rounded border border-secondary" style={{ fontSize: "3rem" }}>{d5}</div>
            <div className="bg-dark text-white p-4 m-1 rounded border border-secondary" style={{ fontSize: "3rem" }}>{d4}</div>
            <div className="bg-dark text-white p-4 m-1 rounded border border-secondary" style={{ fontSize: "3rem" }}>{d3}</div>
            <div className="bg-dark text-white p-4 m-1 rounded border border-secondary" style={{ fontSize: "3rem" }}>{d2}</div>
            <div className="bg-dark text-white p-4 m-1 rounded border border-secondary" style={{ fontSize: "3rem" }}>{d1}</div>
        </div>
    );
};

export default SecondsCounter;