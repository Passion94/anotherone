import React from "react";
import Quote from "./Quote";
import Topprojects from "./Topprojects";
import Nimbly from "./Nimbly";
import AfterNimbly from "./AfterNimbly";

function Secondbox() {
  return ( 
    
    <div className="second-box">
    <div className="second-box-phaseone">
    <Quote/>
       <Topprojects />
       <Nimbly/>
       </div>
      <AfterNimbly />
    
    </div>
  );
}

export default Secondbox;
