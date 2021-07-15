import React from "react"
import Button from "./Button"



const App=()=> {
    return ( 
        <div>
           <h1 className = "heading"> Hi Youtube Viewers </h1>
           <h2 className = "subheading"> Welcome to ReactJS </h2>
           <h1 className = "main"> ReactJS</h1>
           <div className = "alignment">
           <Button text = "Introduction" />
           <Button text = "Concepts"/>
           <Button text = "Summary"/>
           <Button text = "Quiz"/>
           </div>

           


        </div>
    )
}

export default App