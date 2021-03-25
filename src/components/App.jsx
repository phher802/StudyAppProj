import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App(){
    return (
    <div>
        <Header />
        <Note 
            title="Study Term"
            content="This is the Content"
        />
        <Footer />
    </div>
    );
}


export default App;