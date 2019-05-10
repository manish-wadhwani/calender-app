import React from 'react';
import CalenderCard from './CalenderCard/CalenderCard'

import './CalenderComponent.css'


const calenderComponent = (props) => {

    const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

    const cards = days.map((day) => {
        return <CalenderCard
            day={day}
            key={day}
            filteredData={props.filteredData} />
    })

    return (
        <div className="CalenderComponent">
            {cards}
        </div>

    );
}

export default calenderComponent;