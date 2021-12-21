import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';

import './styles.css'
import Logo from '../../images/wwlogo.png';


function MenuComponent() {
    const [elements, setElements] = useState({
        houses:null,
    });

    const handleClick = (event, id) => {
        console.log(id);
        setElements({...elements, id:event.currentTarget})
    };

    const handleClose = () => {
        setElements(null);
    };
    return(
        <Box id='container-header'>
            <Box id="container-logo">
                <img id="logo" src={Logo} alt="Wizarding World"  width="200" height="120"/>              
            </Box>
            <Box id="container-menu">
                <Button className='menu-button' aria-controls="houses-menu" aria-haspopup="true" onClick={e => {handleClick(e, "houses")}}>
                    Casas
                </Button>
                <Menu
                    
                    anchorEl={elements}
                    keepMounted
                    open={Boolean(elements)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Slytherin</MenuItem>
                    <MenuItem onClick={handleClose}>Gryffindor</MenuItem>
                    <MenuItem onClick={handleClose}>Hufflepuff</MenuItem>
                    <MenuItem onClick={handleClose}>Ravenclaw</MenuItem>
                </Menu>
            </Box>
        </Box>
    );
}

export default MenuComponent;
