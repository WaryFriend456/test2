import React from 'react'

export default function TextInput(props) {
    return (
        <div className="container my-5">
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Enter Command</label>
                    <textarea className="form-control" id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary">Convert Text To UpperCase</button>
            </div>
        </div>
    )
}
