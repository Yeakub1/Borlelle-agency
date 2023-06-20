import React from 'react';
import { Link } from 'react-router-dom';

const ServicesData = ({ service }) => {
  const { _id, name, picture, Title } = service;
    return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            className=" scale-75 hover:scale-90 ease-in duration-500"
            draggable={false}
          />
        </figure>
        <div className="px-5 text-center">
          <h2 className="font-bold text-xl">{name}</h2>
          <p className=" mt-3">{Title}</p>
          <div className="flex justify-center">
            <Link to={`/details/${_id}`}>
              <button className="px-4 mt-2 mb-4 py-2 bg-primary border-0 flex items-center gap-3 rounded-full text-white hover:bg-black hover:text-white">
                Read More.. 
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServicesData;