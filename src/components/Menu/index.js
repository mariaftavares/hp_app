import React from 'react';
import MenuButton from '../MenuButton';
import Stack from '@mui/material/Stack';

function Menu(props) {
    const option = ['Ravenclaw','Slytherin','Gryffindor','Hufflepuff'];
    const staff = ['Administração'];
    const {setData} =props;
    return(
        <Stack direction="row" justifyContent="center" alignItems="center"> 
            <MenuButton setData ={setData} options={option} title='Casas'/>
            {/* <MenuButton options={staff} title='Adminstração'/> */}
        </Stack>
    )
}

export default Menu;