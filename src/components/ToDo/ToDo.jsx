import React from "react"; 
const ToDo = ({title ,description ,onClickUpdate=() =>undefined,onClick =() => undefined}) =>{
    return(
        <div>
            <h1>{title}</h1>
            <h1>{description}</h1>
            <button onClick={onClick}>delete me!</button>
            <button onClickUpdate={onClickUpdate}> update</button>
        </div>
    );
}

export default ToDo;