import React from 'react';
import MenuButton from '../MenuButton';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

function Menu(props) {
    const option = ['Ravenclaw','Slytherin','Gryffindor','Hufflepuff'];
    const {setData} =props;
    const handleClick = (event) => {
        setElements(event.currentTarget)
    };
    return(
        <Stack direction="row" justifyContent="center" alignItems="center"> 
            <MenuButton setData ={setData} options={option} title='Casas'/>
            <Button className='menu-button' variant="text" title = 'characters' >Personagens</Button>
            <Button className='menu-button' variant="text" title = 'staff' >Professores</Button>
        </Stack>
    )
}

export default Menu;