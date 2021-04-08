import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { Router, Switch } from "react-router";

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
      setNotes(prevNotes => {
        return [...prevNotes, note];
      });
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    // function editNote(id){
    //     setNotes(prevNotes =>{
    //         prevNotes.filter((noteItem, index) => {

    //         });
    //     });
    // }

    return (
    <div>
        <Header />   
        <CreateArea onAdd={addNote} />   
        {notes.map((noteItem, index) => {
            return (<Note 
                key={index} 
                id={index}
                title={noteItem.title} 
                content={noteItem.content}
                onDelete={deleteNote}
            />        
            );
        })}
        <Footer />
        <Router>
           <Switch>
               <Route />
           </Switch>
        </Router>
    </div>
    );
}


export default App;