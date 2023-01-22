import React from 'react';
import Feature from './Feature';

const TopFeatures = () => {

  return (
    <div className='top-features'>
      <div className="featureWrap"><Feature id= '1' title={'Firewall'}/></div>
      <div className="featureWrap"><Feature id= '2' title={'Content Checker'}/></div>
      <div className="featureWrap"><Feature id= '3' title={'Darknet'}/></div>
      <div className="featureWrap"><Feature id= '4' title={'News'}/></div>
      <div className="featureWrap"><Feature id= '5' title={'Problems & Errors'}/></div>
    </div>
  )
}

export default TopFeatures;