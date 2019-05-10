import React from 'react';
import CalenderComponent from './CalenderComponent/CalenderComponent'
import InputsComponent from './InputsComponent/InputsComponent'

import './BirthdayCalenderComponent.css'

const birthdayCalenderComponent = (props) => {
    return (
        <div className="container-fluid BirthdayCalenderComponent">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center">Birthday Calender</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <CalenderComponent
                            filteredData={props.filteredData} />
                    </div>
                </div>


                <InputsComponent
                    textAreaInput={props.textAreaInput}
                    year={props.year}
                    updateButtonDisable={props.updateButtonDisable}
                    updateClicked={props.updateClicked}
                    dataChanged={props.dataChanged} />

            </div>
        </div>
    );
};

export default birthdayCalenderComponent