import React from "react";
import './styles.css';

function Main(props){
    const {data} = props; 
    return(
        <p>
            {data && data.length >0 && data.map (character=> <p>{character.name}</p> )}
        </p>
    );
}


export default Main;