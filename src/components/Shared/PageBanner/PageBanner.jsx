import React from 'react';

const PageBanner = ({image, text}) => {
    return (
      <div
        className="w-full banner-bg text-white relative"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      >
        <h1 className="text-5xl font-bold italic top-1/3 left-1/2 absolute -translate-x-1/2 ">
          {text}
        </h1>
      </div>
    );
};

export default PageBanner;