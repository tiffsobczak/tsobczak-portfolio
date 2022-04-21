import * as React from 'react';
import Masonry from '@mui/lab/Masonry';
import {Project} from '../Project'


function Portfolio() {

    return (
        <Masonry columns={3}
            spacing={2}>
                <Project image= "/assets/images/eatinerary.png"
                        alt= "eatinerary screenshot"
                        title= "Eatinerary"
                        description="Eatinerary is an application for users to submit information about their visits to restaurants, bars, and eateries. This application was part of a group project and utilizes React, Node, MongoDB, Mongoose, and Express."
                        github="https://github.com/tiffsobczak/eatinerary"
                        deployed="https://eatinerary-project.herokuapp.com/"/>
            <Project image= "/assets/images/all-tied-app.png"
                        alt= "all tied app screenshot"
                        title= "All Tied App"
                        description= "All Tied App is a friendship finder application created as part of a group project to produce a full-stack application using Node, Express, Handlebars, MySQL, and Sequelize."
                        github="https://github.com/tiffsobczak/all-tied-app"
                        deployed="https://immense-caverns-04136.herokuapp.com/"/>
        <Project image= "/assets/images/budgetSS.png"
                        alt= "budget application"
                        title= "Budget Tracker"
                        description= "A progressive web application created with intentional focus on using a service worker, a web manifest, and IndexedDB."
                        github="https://github.com/tiffsobczak/budget-tracker-w-graph"
                        deployed="https://evening-escarpment-10377.herokuapp.com/"/>
                        
            <Project image= "/assets/images/pokevalue.png"
                        alt= "pokemon card value app"
                        title= "PokeValue"
                        description= "Look up the value of your Pokemon cards! This application was created in collaboration with other teammates to practice HTML, CSS, Bootstrap, Javascript, and APIs. "
                        github="https://github.com/tiffsobczak/Project-One"
                        deployed="https://tiffsobczak.github.io/Project-One/"/>


<Project image= "/assets/images/run-buddy.png"
                        alt= "run buddy application"
                        title= "Run Buddy"
                        description= "Application created for basic practice using HTML and CSS. "
                        github="https://github.com/tiffsobczak/run-buddy"
                        deployed="https://lernantino.github.io/run-buddy/"/>

<Project image= "/assets/images/weather-app.png"
                        alt= "weather dashboard application "
                        title= "Weather Dashboard"
                        description= "Weather Dashboard application built using HTML, CSS, and JavaScript with intentional practice with server side APIs. "
                        github="https://github.com/tiffsobczak/weather-app"
                        deployed="https://tiffsobczak.github.io/weather-app/"/>

<Project image= "/assets/images/schedule-screenshot.png"
                        alt= "daily schedule application"
                        title= "Daily Schedule Application"
                        description= "Daily schedule application built for intentional practice with third party APIs, HTML, CSS, and jQuery. "
                        github="https://github.com/tiffsobczak/daily-planner"
                        deployed="https://tiffsobczak.github.io/daily-planner/"/>

        <Project image= "/assets/images/noteSS.png"
                        alt= "note taking application"
                        title= "Note Taking Application"
                        description= "Daily schedule application created for practice with Express.js "
                        github="https://github.com/tiffsobczak/note-taker"
                        deployed="https://tsob-notetaker.herokuapp.com/notes"/>                
               
               <Project image= "/assets/images/code-quiz.png"
                        alt= "Coding Quiz"
                        title= "JavaScript Quiz"
                        description= "JavaScript quiz created to practice with APIs. "
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

