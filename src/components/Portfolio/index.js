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
import {Project} from '../Project'


function Portfolio() {

    return (
        <Masonry columns={3}
            spacing={2}>
            <Project image= "/assets/images/all-tied-app.png"
                        alt= "all tied app screenshot"
                        title= "All Tied App"
                        description= "All Tied App is a friendship finder application for people with busy schedules!"
                        github="https://github.com/tiffsobczak/all-tied-app"
                        deployed="https://immense-caverns-04136.herokuapp.com/"/>
        <Project image= "/assets/images/budgetSS.png"
                        alt= "budget application"
                        title= "Budget Tracker"
                        description= "Track your withdrawls and deposits and have a dynamic visiual to reprensent your transactions. The budget tracker offers offline functionality."
                        github="https://github.com/tiffsobczak/budget-tracker-w-graph"
                        deployed="https://evening-escarpment-10377.herokuapp.com/"/>
                        
            <Project image= "/assets/images/pokevalue.png"
                        alt= "pokemon card value app"
                        title= "PokeValue"
                        description= "Look up the value of your Pokemon cards! This application was created in collaboration with other teammates using "
                        github="https://github.com/tiffsobczak/Project-One"
                        deployed="https://clairedelargy.github.io/Project-One/"/>


<Project image= "/assets/images/run-buddy.png"
                        alt= "run buddy application"
                        title= "Run Buddy"
                        description= "Application created using HTML and CSS. "
                        github="https://github.com/tiffsobczak/run-buddy"
                        deployed="https://lernantino.github.io/run-buddy/"/>

<Project image= "/assets/images/weather-app.png"
                        alt= "weather dashboard application "
                        title= "Weather Dashboard"
                        description= "Weather Dashboard application built using HTML, CSS, Bootstrap, and JavaScript "
                        github="https://github.com/tiffsobczak/weather-app"
                        deployed="https://tiffsobczak.github.io/weather-app/"/>

<Project image= "/assets/images/schedule-screenshot.png"
                        alt= "daily schedule application"
                        title= "Daily Schedule Application"
                        description= "Daily schedule application built with JavaScript, HTML, and CSS. "
                        github="https://github.com/tiffsobczak/daily-planner"
                        deployed="https://tiffsobczak.github.io/daily-planner/"/>

        <Project image= "/assets/images/noteSS.png"
                        alt= "note taking application"
                        title= "Note Taking Application"
                        description= "Daily schedule application built with JavaScript, HTML, and CSS. "
                        github="https://github.com/tiffsobczak/note-taker"
                        deployed="https://tsob-notetaker.herokuapp.com/notes"/>                
               
               <Project image= "/assets/images/code-quiz.png"
                        alt= "Coding Quiz"
                        title= "JavaScript Quiz"
                        description= "JavaScript quiz created using "
                        github="https://github.com/tiffsobczak/note-taker"
                        deployed="https://tsob-notetaker.herokuapp.com/notes"/> 

<Project image= "/assets/images/horiseonscreenshot.png"
                        alt= "Horiseon"
                        title= "Horiseon"
                        description= "Company webiste created for HTML and CSS basic understanding."
                        github="https://github.com/tiffsobczak/note-taker"
                        deployed="https://tsob-notetaker.herokuapp.com/notes"/> 
            
        
            
        </Masonry>


    );

}

export default Portfolio;

