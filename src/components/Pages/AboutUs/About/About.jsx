import React from 'react';
import banner from "../../../../assets/banner/about.png";
import PageBanner from '../../../Shared/PageBanner/PageBanner';

const About = () => {
    return (
        <div>
            <PageBanner
            image={banner}
            />
        </div>
    );
};

export default About;