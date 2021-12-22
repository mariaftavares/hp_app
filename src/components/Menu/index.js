import React from 'react';
import MenuButton from '../MenuButton';
import Stack from '@mui/material/Stack';

function Menu() {
    const option = ['Sonseria','Lufa-Lufa'];
    const staff = ['Administração'];
    return(
        <Stack direction="row" justifyContent="center" alignItems="center"> 
            <MenuButton options={option} title='Casas'/>
            <MenuButton options={staff} title='Adminstração'/>
        </Stack>
    )
}

export default Menu;