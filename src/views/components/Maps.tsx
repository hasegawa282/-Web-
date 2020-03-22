import React from "react";
import styled from "styled-components";

interface Props_a{
    text:any;
    myFunc:()=>void;
};

const KeijibanStyle=styled.div`
  margin-bottom:15px;
`;



const Maps:React.FC<Props_a>=props=>{
 

  return(
    <KeijibanStyle>
      <div>
        {props.text}
      </div>
      <input type="button" value="選択" style={{marginLeft:"50%"}} onClick={props.myFunc}/>
      
    </KeijibanStyle>
  );
};

export default Maps;