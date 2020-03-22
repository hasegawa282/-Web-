import React from "react";


interface Props_a{
    text:any;
};


const Maps:React.FC<Props_a>=props=>{
 

  return(
   <div>
     {props.text}
    </div>

  );
};

export default Maps;