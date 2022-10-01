import React,{useState} from "react"

export default function Header(){
    const[time, setTime]= useState(new Date().toLocaleTimeString());

    function getTime(){
        setTime(new Date().toLocaleTimeString());
    }

    setInterval(getTime, 1000);
    
    return(
        <header>
            <h1>Keeper</h1>
            <h2>{time}</h2>
        </header>
    )
};