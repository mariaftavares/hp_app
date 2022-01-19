import React from 'react';
import MenuButton from '../MenuButton';
import Stack from '@mui/material/Stack';
import ButtonMenu from '../Button';

function Menu(props) {
    const option = ['Ravenclaw','Slytherin','Gryffindor','Hufflepuff'];
    const {setData} =props;
    return(
        <Stack direction="row" justifyContent="center" alignItems="center"> 
            <MenuButton setData ={setData} options={option} title='Casas'/>
            <ButtonMenu   setData ={setData}  title = 'Estudantes'  apiSufix ='students'/>
            <ButtonMenu   setData ={setData}  title = 'Professores'  apiSufix ='staff' />
        </Stack>
    )
}

export default Menu; 