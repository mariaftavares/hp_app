import './styles.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
    const {characterInfo} = props;
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            image={characterInfo.image || "https://image.flaticon.com/icons/png/512/121/121693.png"} 
            alt={characterInfo.name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Nome: {characterInfo.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Casa:{characterInfo.house}
            </Typography>
        </CardContent>
        </Card>
    );
}
