import React from "react"; 
import './FlexContainer.style.css'
const FlexContainer = ({children}) =>{
    return(
        <div className="flex-container">
         {children}
        </div>
    );
}

export default FlexContainer;