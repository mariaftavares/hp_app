import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@material-ui/core/Box';

import './style.css'

function MenuButton(props) {

    const {options, title} = props;

    const [elements, setElements] = useState()

    const handleClick = (event) => {
        console.log(event.currentTarget)
        setElements(event.currentTarget)
    };

    const handleClose = () => {
        setElements(null);
    };
    return(
        <Box id="container-menu-button">
            <Button className='menu-button' aria-controls="menu-button" aria-haspopup="true" onClick={handleClick}>
                {title}
            </Button>
            <Menu
                id="menu-button"
                anchorEl={elements}
                keepMounted
                open={Boolean(elements)}
                onClose={handleClose}
            >
            {
                options.map( option => <MenuItem onClick={handleClose}>{option}</MenuItem> )
            }
            </Menu>
        </Box>
    );
}

export default MenuButton;