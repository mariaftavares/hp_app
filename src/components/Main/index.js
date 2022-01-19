import React from "react";
import './styles.css';
import MediaCard from "../Card";

function Main(props){
    const {data} = props; 
    return(

        <p>
             {
            data.map( data =><MediaCard characterInfo = {data}/>)
             }
        </p>
    );
}


export default Main;