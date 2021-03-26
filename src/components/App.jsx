import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

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

    const [notes, setNotes] = useState([]);

    function addNote(note){
      setNotes(prevNote => {
        return [...prevNote, note];
      });
    }

    function deleteNote(id){
        setNotes(prevNotes =>{
            prevNotes.filter((noteITem, index) => {
                return index !== id;
            });
        });
    }


    return (
    <div>
        <Header />   
        <CreateArea onAdd={addNote} />   
        {notes.map((noteItem, index) => <Note 
                key={index} 
                id={index}
                title={noteItem.title} 
                content={noteItem.content}
                onDelete={deleteNote}
            />        
        )}
        <Footer />
    </div>
    );
}


export default App;