import React from 'react';

const CollapseFaq = ({title, subtitle}) => {
    return (
      <div className="collapse collapse-plus bg-base-200 mt-3">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          {title}
        </div>
        <div className="collapse-content">
                <p>{ subtitle}</p>
        </div>
      </div>
    );
};

export default CollapseFaq;