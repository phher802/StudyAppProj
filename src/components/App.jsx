import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

//create a function to iterate through the notes array
//createNotes function takes a single noteItem and renders a dynamic custom Note component
// function createNotes(noteItem){
//     return ( <Note 
//         key={noteItem.key}
//         title={noteItem.title}
//         content={noteItem.content}
//         />
//     );
// }
//once this works, pass it into the map() function as an arrow function, with anonymous function


function App(){
    return (
    <div>
        <Header />      
        {notes.map((noteItem) => 
        <Note 
            key={noteItem.key} 
            title={noteItem.title} 
            content={noteItem.content}
            />
        )};
        <Footer />
    </div>
    );
}


export default App;