import React, { Component } from 'react';

import BirthdayCalenderComponent from '../../components/BirthdayCalenderComponent/BirthdayCalenderComponent'

class BirthdayCalender extends Component {

    state = {
        textAreaInput: [],
        year: "",
        parsedData: null,
        filteredData: null,
        updateButtonDisable: true,

    }


    daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

    updateButtonHandler = (event) => {
        event.preventDefault();

        if (this.state.parsedData === null) {
            // Logic to display cards:

            // Parsing data into Objects:
            let parsedData = null;
            try {
                parsedData = JSON.parse(this.state.textAreaInput);
            } catch (e) {
                alert(e)
            }

            // Storing parsed data in state
            this.setState({ parsedData: parsedData }, () => {
                // After Storing parsed data calling function for filtering and finding day
                this.filterData()
            })



        } else {
            // Reset Element
            this.setState({ textAreaInput: [], year: "", parsedData: null, filteredData: null, updateButtonDisable: true })
        }
    }

    filterData = () => {

        let enteredData = [...this.state.parsedData]


        enteredData.forEach((data) => {
            let dateParts = data.birthday.split("/");


            let dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
            data.birthdayObject = dateObject
        })



        let filteredData = enteredData.filter((data) => {
            return data.birthdayObject.getFullYear() === Number(this.state.year);
        });


        filteredData.forEach((data) => {
            data.day = this.daysOfWeek[data.birthdayObject.getDay()];
            // Logic for initials:
            let nameArray = data.name.split(" ");
            let initial = "";
            for (let i = 0; i < nameArray.length; i++) {
                initial += nameArray[i].charAt(0);
            }
            data.initials = initial.toUpperCase();
        });

        // Sort:
        filteredData.sort((a, b) => {
            const date1 = new Date(a.birthday).getTime();
            const date2 = new Date(b.birthday).getTime();

            return date1 - date2
        })
        this.setState({ filteredData: filteredData })
    }

    dataOnChangeHandler = (event, field) => {

        const updatedValue = event.target.value;
        const updatedState = this.state;
        updatedState[field] = updatedValue;
        this.setState(updatedState, () => {
            this.changeButtonStatus();
        });

    }

    changeButtonStatus = () => {
        if (this.state.year !== "" && this.state.textAreaInput.length > 0) {
            this.setState({ updateButtonDisable: false });
        } else {
            this.setState({ updateButtonDisable: true });
        }
    }

    render() {
        return (
            <BirthdayCalenderComponent
                textAreaInput={this.state.textAreaInput}
                year={this.state.year}
                updateClicked={this.updateButtonHandler}
                dataChanged={this.dataOnChangeHandler}
                filteredData={this.state.filteredData}
                updateButtonDisable={this.state.updateButtonDisable}
            />
        );
    };
}

export default BirthdayCalender;