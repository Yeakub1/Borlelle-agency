import React from 'react';
import Banner from '../Banner/Banner';
import Marketing from '../Marketing/Marketing';
import SeoMarkting from '../Seo/SeoMarkting';

const Home = () => {
    return (
        <div className='w-full '>
            <Banner />
            <Marketing />
            <SeoMarkting/>
        </div>
    );
};

export default Home;