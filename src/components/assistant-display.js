import React from 'react';
import './assistant-display.css';

export const AssistantDisplay = (props) => {
    return (
        <button onClick={props.click} className="assistant-border">
            <div className="stats">
            
                <p> owned: { props.owned }</p>
                <p> cost: { props.next }</p>
                <p> FPPS: { props.fpps }</p>
            </div>
            
                <img className="assistant-image" src={ props.image } />
                <div>
                    <p className="name">{ props.name } </p>
                    <p>{ props.text }</p>
                </div>
        </button>
    );
}