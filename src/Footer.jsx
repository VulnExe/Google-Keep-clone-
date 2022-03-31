import { render } from "@testing-library/react";
import React from "react";
import "./styles.css"

var CurrentYear = new Date().getFullYear()
function Footer(){
    render()
    return (
    // <div className="footer">
    // <footer className="footer p"></footer>
    // </div>
    <footer>
        <p>copyrights @ {CurrentYear}</p>
    </footer>
    )
}
export default Footer