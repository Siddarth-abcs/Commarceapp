import React from 'react'
import { Aboutstory } from './Aboutstory'
import { Aboutservices } from './Aboutservices'
import { Aboutfounder } from './Aboutfounder'
import { Services } from '../Services/Services'

export const About = () => {
  return (
    <div>
        <Aboutstory/>
        <Aboutservices/>
        <Aboutfounder/>
        <Services/> 
    </div>
  )
}
