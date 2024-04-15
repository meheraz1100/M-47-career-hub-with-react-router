import React from 'react';
import Banner from '../Banner/Banner';
import CatagoryList from '../catagoryList/CatagoryList';
import FeaturedJobs from '../FeatureedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CatagoryList></CatagoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;