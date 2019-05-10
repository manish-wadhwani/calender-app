import React from 'react';
import './CalenderCard.css'

import PersonInitials from './PersonInitials/PersonInitials'


const calenderCard = (props) => {

    let elementsToBeDisplayed;

    let names;

    if (props.filteredData) {
        elementsToBeDisplayed = props.filteredData.filter((data) => {
            return data.day === props.day
        })

        names = elementsToBeDisplayed.map((data) => {
            return <PersonInitials initials={data.initials} key={data.name} />;
        })
    }


    return (
        <div className="CalenderCard">
            <div className="Header">
                <p>{props.day}</p>

                <div className="Data">
                    {names}
                </div>

            </div>
        </div>
    );
};

export default calenderCard;