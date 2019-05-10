import React from 'react';

const input = (props) => {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input
                className="form-control"
                type={props.type}
                onChange={props.changed}
                value={props.value}></input>

        </div>
    );
};

export default input;