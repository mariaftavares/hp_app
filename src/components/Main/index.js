import React from "react";
import './styles.css';

function Main(props){
    const {data} = props; 
    return(
        <p>
            {data && data.length >0 && <p>{data[0].name}</p>}
        </p>
    );
}

export default Main;