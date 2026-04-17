import React from 'react';

const SecondsCounter = (props) => {
    const unit1 = Math.floor(props.seconds / 1) % 10;
    const unit2 = Math.floor(props.seconds / 10) % 10;
    const unit3 = Math.floor(props.seconds / 100) % 10;
    const unit4 = Math.floor(props.seconds / 1000) % 10;
    const unit5 = Math.floor(props.seconds / 10000) % 10;
    const unit6 = Math.floor(props.seconds / 100000) % 10;

    const boxStyle = {
        background: '#1a1a1a',
        color: 'white',
        fontSize: '60px',
        margin: '5px',
        padding: '10px 20px',
        borderRadius: '5px',
        minWidth: '70px',
        textAlign: 'center'
    };

    return (
        <div style={{ background: 'black', display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <div style={boxStyle}><i className="far fa-clock"></i></div>
            <div style={boxStyle}>{unit6}</div>
            <div style={boxStyle}>{unit5}</div>
            <div style={boxStyle}>{unit4}</div>
            <div style={boxStyle}>{unit3}</div>
            <div style={boxStyle}>{unit2}</div>
            <div style={boxStyle}>{unit1}</div>
        </div>
    );
};

export default SecondsCounter;