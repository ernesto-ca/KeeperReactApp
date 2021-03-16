import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Note";
import notes from "../Notes";


function createCards(note){
    return (
        <Notes 
            key = {note.title}
            title = {note.title}
            content={note.content}
        />
    )
}

function App(){
    return(
        <div>
            <Header />
            {notes.map(createCards)}
            <Footer />
        </div>
    );
}

export default App;
