import React from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import Note from "./components/note"
import notes from "./notes"


export default function App(){
    return(
        <div>
            <Header/>
            {notes.map(note=>{return(<Note title= {note.title} content= {note.content}/>)})}
            <Footer/>
        </div>
    )
};