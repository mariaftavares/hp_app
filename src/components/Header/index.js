import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import './styles.css'
import Logo from '../../images/wwlogo.png';
import Menu from '../Menu'

function Header() {
    
return(
        <Box id='container-header'>
            <Box id="container-logo">
                <img id="logo" src={Logo} alt="Wizarding World"  width="200" height="120"/>              
            </Box>
            <Box id="container-menu">
             
                <Menu/>
            </Box>
        </Box>
        
    );
}

export default Header;
