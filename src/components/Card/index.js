import React from "react";
import './styles.css';

function Card(props){
       const {characterInfo} = props;
    return(
        <>
        {characterInfo.name}
        </>
    );
}