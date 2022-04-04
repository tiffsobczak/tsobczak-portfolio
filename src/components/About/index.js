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
          Professional: Full Stack Web Developer with a certificate from Washington University in St. Louis. 
        </p>
        <p>Personal: After moving from Wisconsin to Missouri, I left teaching in public schools after five years.
          Health and fitness are a big passion of mine - as much as finding the best local ice cream shops. My life long dream is to own a dessert bakery - but I have no idea how to bake. </p>
      </div>
    </section>
  );
}

export default About;
