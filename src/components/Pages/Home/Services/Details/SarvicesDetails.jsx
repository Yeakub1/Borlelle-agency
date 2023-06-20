import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SarvicesDetails = () => {
    const services = useLoaderData();
    const { Title } = services;
    return (
      <div>
        <h1>{Title}</h1>
      </div>
    );
};

export default SarvicesDetails;