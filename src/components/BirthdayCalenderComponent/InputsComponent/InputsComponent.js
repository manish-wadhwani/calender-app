import React from 'react';
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'

const inputsComponent = (props) => {



    return (


        <div className="row">
            <div className="col-md-8">
                <textarea className="form-control"
                    onChange={(event) => props.dataChanged(event, "textAreaInput")}
                    value={props.textAreaInput}
                    style={{ height: "400px" }}></textarea>
            </div>
            <div className="col-md-4">
                <div className="row">
                    <div className="col-md-12">
                        <Input type="number" label="Year"
                            changed={(event) => props.dataChanged(event, "year")}
                            value={props.year} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <Button
                            clicked={props.updateClicked}
                            disabled={props.updateButtonDisable}>UPDATE</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default inputsComponent;