import React from "react";

const Feature = ({id,title}) => {

const changeFeature = () => {
    alert(`You clicked on ${title} feature`)
}

  return (
    <div className='singleFeature' onClick={changeFeature}>
      <div className="feature">
        <div className={`icon-${title}`}/>
      </div>
      <div className="featureText">{title}</div>
    </div>
  );
};

export default Feature;
