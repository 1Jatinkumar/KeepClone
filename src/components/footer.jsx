import React from "react";

const date = new Date();
const currentYear = date.getUTCFullYear();

export default function Footer(){
    return(
        <footer>
            <p>copyright {currentYear}</p>
        </footer>
    )
};