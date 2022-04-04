import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';


export const Project = (props) => (
    <Card sx={
        {maxWidth: 345}
    }>
        <CardMedia component="img" height="140" image={process.env.PUBLIC_URL+props.image} alt={props.alt}/>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.description}
            </Typography>
        </CardContent>
        <CardActions>
        <IconButton color="primary" href={props.github} target='_blank' >
            <GitHubIcon />
        </IconButton>
        <IconButton color="primary" href={props.deployed} target='_blank' >
            <PublicIcon />
        </IconButton>

        </CardActions>
    </Card>
)