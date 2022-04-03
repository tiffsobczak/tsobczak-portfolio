import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Masonry from '@mui/lab/Masonry';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';


function Portfolio() {

    return (
        <Masonry columns={3}
            spacing={2}>
            <Card sx={
                {maxWidth: 345}
            }>
                <CardMedia component="img" height="140" image={process.env.PUBLIC_URL+"/assets/images/all-tied-app.png"} alt="all tied app screenshot"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        All Tied App
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        All Tied App is a friendship finder application for people with busy schedules!
                    </Typography>
                </CardContent>
                <CardActions>
                <IconButton color="primary" href="https://github.com/tiffsobczak/all-tied-app" target='_blank' >
                    <GitHubIcon />
                </IconButton>
                <IconButton color="primary" href="https://immense-caverns-04136.herokuapp.com/" target='_blank' >
                    <PublicIcon />
                </IconButton>

                </CardActions>
            </Card>
            <Card sx={
                {maxWidth: 345}
            }>
                <CardMedia component="img" height="140" image={process.env.PUBLIC_URL+"/assets/images/budgetSS.png"} alt="budget application"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Budget Tracker
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Track your withdrawls and deposits and have a dynamic visiual to reprensent your transactions. The budget tracker offers offline functionality.
                    </Typography>
                </CardContent>
                <CardActions>
                <IconButton color="primary" href="https://github.com/tiffsobczak/all-tied-app" target='_blank' >
                    <GitHubIcon />
                </IconButton>
                <IconButton color="primary" href="https://immense-caverns-04136.herokuapp.com/" target='_blank' >
                    <PublicIcon />
                </IconButton>
                </CardActions>
            </Card>
            <Card sx={
                {maxWidth: 345}
            }>
                <CardMedia component="img" height="140" image={process.env.PUBLIC_URL+"/assets/images/pokevalue.png"} alt="pokevalue app"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        PokeValue
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Look up the value of your Pokemon cards! Created as a class project to tackle: 
                    </Typography>
                </CardContent>
                <CardActions>
                <IconButton color="primary" href="https://github.com/tiffsobczak/all-tied-app" target='_blank' >
                    <GitHubIcon />
                </IconButton>
                <IconButton color="primary" href="https://immense-caverns-04136.herokuapp.com/" target='_blank' >
                    <PublicIcon />
                </IconButton>
                </CardActions>
            </Card>
            <Card sx={
                {maxWidth: 345}
            }>
                <CardMedia component="img" height="140" image={process.env.PUBLIC_URL+"/assets/images/run-buddy.png"} alt="budget application"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Run Buddy
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Application created as a way to learn 
                    </Typography>
                </CardContent>
                <CardActions>
                <IconButton color="primary" href="https://github.com/tiffsobczak/all-tied-app" target='_blank' >
                    <GitHubIcon />
                </IconButton>
                <IconButton color="primary" href="https://immense-caverns-04136.herokuapp.com/" target='_blank' >
                    <PublicIcon />
                </IconButton>
                </CardActions>
            </Card><Card sx={
                {maxWidth: 345}
            }>
                <CardMedia component="img" height="140" image={process.env.PUBLIC_URL+"/assets/images/weather-app.png"} alt="weather application screenshot"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Weather Dashboard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Weather Dashboard Application created to learn xxxxx
                    </Typography>
                </CardContent>
                <CardActions>
                <IconButton color="primary" href="https://github.com/tiffsobczak/all-tied-app" target='_blank' >
                    <GitHubIcon />
                </IconButton>
                <IconButton color="primary" href="https://immense-caverns-04136.herokuapp.com/" target='_blank' >
                    <PublicIcon />
                </IconButton>
                </CardActions>
            </Card>
            <Card sx={
                {maxWidth: 345}
            }>
                <CardMedia component="img" height="140" image={process.env.PUBLIC_URL+"/assets/images/schedule-screenshot.png"} alt="scheduling application"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Daily Schedule Application
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Daily schedule application created to gain experience with 
                    </Typography>
                </CardContent>
                <CardActions>
                <IconButton color="primary" href="https://github.com/tiffsobczak/all-tied-app" target='_blank' >
                    <GitHubIcon />
                </IconButton>
                <IconButton color="primary" href="https://immense-caverns-04136.herokuapp.com/" target='_blank' >
                    <PublicIcon />
                </IconButton>
                </CardActions>
            </Card>
        </Masonry>


    );

}

export default Portfolio;

