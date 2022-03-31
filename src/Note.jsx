import { render } from "@testing-library/react";
import React from "react";
import "./styles.css"


function Note(props){
    render()
    return (
    <div className="note">
        <h1 >{props.title}</h1>
        <p>{props.description}</p>
    </div>
    )
}
export default Note