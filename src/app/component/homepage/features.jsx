import React from 'react'
import FeatureOpt from './featureopt'

function Features() {
  return (
    <div className='flex items-center flex-wrap md:h-72 gap-4 xl:gap-0 bg-white py-4 xl:py-0 justify-center lg:flex-nowrap lg:justify-normal'>
      <FeatureOpt/>
      <FeatureOpt/>
      <FeatureOpt/>
      <FeatureOpt/>
    </div>
  )
}

export default Features
