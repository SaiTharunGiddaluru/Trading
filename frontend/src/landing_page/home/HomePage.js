import React from 'react';
import Award from "./Award"
import Hero from "./Hero"
import Stats from "./Stats"
import Pricing from "./Pricing"
import Education from "./Education"

import OpenAccount from "../OpenAccount"

function HomePage() {
    return ( 
        <>
       
         <Hero/>
         <Award/>
         <Stats/>
         <Pricing/>
         <Education/>
         <OpenAccount/>
        
         </>
       
     );
}

export default HomePage;