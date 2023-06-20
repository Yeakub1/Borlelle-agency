import React from 'react';
import Banner from '../Banner/Banner';
import Marketing from '../Marketing/Marketing';
import SeoMarkting from '../Seo/SeoMarkting';
import Services from '../Services/Services';
import CountUps from '../CountUp/CountUp';

const Home = () => {
    return (
        <div className='w-full '>
            <Banner />
            <Marketing />
            <SeoMarkting />
            <Services />
           <CountUps/>
        </div>
    );
};

export default Home;