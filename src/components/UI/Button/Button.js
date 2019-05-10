import React from 'react';

const button = (props) => {
    return (
        <button
            type="button"
            className="btn btn-primary"
            onClick={props.clicked}
            disabled={props.disabled}>{props.children}</button>
    );
};

export default button;