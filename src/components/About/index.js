import React from 'react';
import Avatar from '@mui/material/Avatar';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me.</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
      <Avatar alt="Tiffany" src={process.env.PUBLIC_URL+"/assets/images/christmas-photo.jpeg"} sx={{ width: 100, height: 100, marginBottom: 2 }} />
        <p>
          Professional: In April of 2022, I completed a Full-Stack Web Development Bootcamp through Washington University in St. Louis (WashU). The program focused heavily on JavaScript. We created a plethora of projects using Node, Express, SQL, React, HTML, and CSS. There were weekly assignments and three group projects throughout the 24 week course.
        </p>
        <p>Personal: After moving from Wisconsin to Missouri, I left teaching in public schools after five years.
          Health and fitness is a big passion of mine - as much as finding the best local ice cream shop. My life long dream is to own a dessert bakery - but I have no idea how to bake. I love dogs, high ropes courses, and watching The Office. I love a good challenge whether it be teaching myself to sew or doing 100 burpees.</p>
      </div>
    </section>
  );
}

export default About;
