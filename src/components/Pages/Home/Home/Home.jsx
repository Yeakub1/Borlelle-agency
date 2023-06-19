import React from 'react';
import Banner from '../Banner/Banner';
import Marketing from '../Marketing/Marketing';
import SeoMarkting from '../Seo/SeoMarkting';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='w-full '>
            <Banner />
            <Marketing />
            <SeoMarkting />
            <Services/>
        </div>
    );
};

export default Home;