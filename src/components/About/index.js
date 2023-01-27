import React from 'react';
import headshot from "../../assets/Headshot.jpg";

function About(props) {

    const aboutSite = {
        name: 'About the Site',
        description: 'What2Watch is a website designed to keep track of your watch lists across multiple streaming services.',
    };

    const aboutAuthor = {
        name: 'About the Author',
        description: 'The website was created by Alex Courtney. Alex struggled to keep track of all of the various shows and movies he wanted to watch and needed a way to consolidate his watch list.'
    }

    return (
        <section>
            <div>
                <h1>{aboutSite.name}</h1>
                <p>{aboutSite.description}</p>
            </div>
            <div>
                <h1>{aboutAuthor.name}</h1>
                <p>{aboutAuthor.description}</p>
                <div>
                    <img src={headshot} alt="Alex Headshot" className="img-thumbnail mx-1"/>
                </div>
            </div>
        </section>
    );
}

export default About;