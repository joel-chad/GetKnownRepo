import React from "react";
import GetStartedHero from '../components/sections/GetStartedHero';
import Cta from "../components/sections/Cta";

const GetStarted = ()=>{
    return(
        <div>
           <GetStartedHero className="illustration-section-01" />
           <Cta split/>
        </div>
    )
}

export default GetStarted;