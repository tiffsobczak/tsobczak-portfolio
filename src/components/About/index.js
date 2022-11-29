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
          In October of 2021, I left what I thought was my life long career of being a teacher to pursue a Full-Stack Web Development Bootcamp through Washington University in St. Louis. I was not sure what road I was going down but I knew it would be a good one. The challenge, learning opportunity, and potential to make a difference in a different way were all appealing to me. The bootcamp heavily focused on Javascript and we worked on a plethora of projects using Node, Express, SQL, React, HTML, and CSS.
        </p>
        <p>
          Since graduating the bootcamp, I served as an intern for Astral - a start up that creates developer portals as a service. My most recent professional experience is working at H&R Block as a software Engineer. At H&R Block, I worked mostly with C# and .NET frameworks. I created a number of unit tests as well as made significant code changes based on changes the Department of Revenue needed for tax purposes.
        </p>
        <p>
          In addition to education, health and fitness, crafting, and baking are all passions of mine. I love to create.
        </p>
      </div>
    </section>
  );
}

export default About;
