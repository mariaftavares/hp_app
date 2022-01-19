import React from 'react';
import Button from '@mui/material/Button';
import Box from '@material-ui/core/Box';

import './styles.css'

function ButtonMenu(props) {

    const {apiSufix,title,setData} = props;

    const handleClick = (event) => {
        fetch('http://hp-api.herokuapp.com/api/characters/' +apiSufix)
        .then(response => response.json())
        .then(data => setData(data));
    };
    return(
        <Box id="container-menu-button">
            <Button className='menu-button' aria-controls="menu-button" aria-haspopup="true" onClick={handleClick}>
                {title}
            </Button>
          
        </Box>
    );

}


export default ButtonMenu;