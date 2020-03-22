import React,{ useState } from "react";
import styled from "styled-components";
import Maps from "../Maps";

const Keijiban:React.FC =props=> {
  var list:string[]=[];
  const [value,setValue]=useState(<></>)
  const [textName, setName]=useState("");



  const textChange=(e:any)=>{
    const newtextName=e.target.value;
    setName(newtextName);
  };

  const resultMap=()=>{
    if(list.length===1){
      return(<Maps text={list[0]}/>);
    }else{list.map((item)=>{
        return(<Maps text={item} />);
      })
    }
  };

  const submitText=()=>{
    list.push(textName)
  }

  return(
    <Asd>
      <div>ユーザー名:<></></div>
      <br />
      <BorderLine>
        <form>
          <textarea  cols={80} rows={7} onChange={textChange}></textarea>
          <br />
          <input type="button" value="投稿" onClick={submitText}></input>
      　</form>
      </BorderLine>
      <div>
        {resultMap()}
      </div>
    </Asd>
  )
}

const Asd=styled.div`
  margin:0% 2%;
`;

const BorderLine=styled.div`
  border-bottom:solid 1px black;
`;


export default Keijiban;
