import React from 'react';

import './PersonInitials.css'

const personInitials = (props) => {

    const stl = {
        backgroundColor: getRandomColor(),
       
        
    }

    return (
        <div style={stl} className="PersonInitials">
            {props.initials}
        </div>
    );
};


let getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default personInitials