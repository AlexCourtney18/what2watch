import React from 'react';
import landingImage from "../../assets/landing-image.jpg"

function Landing() {
    return (
        <section className='my-5'>
            <h1 id="title">What To Watch</h1>
            <img src={landingImage} className="my-2" style={{ width: "75%" }} alt="cover" />
        </section>
    );
}

export default Landing;