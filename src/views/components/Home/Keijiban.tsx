import React,{ useState } from "react";
import styled from "styled-components";
import Maps from "../Maps";

const Keijiban:React.FC =props=> {
  const [list,setList]=useState<string[]>([]);
  const [textName, setName]=useState("");
　const a:string="master";


  const textChange=(e:any)=>{
    const newtextName=e.target.value;
    setName(newtextName);
  };


  const submitText=()=>{
    setList([...list,textName]);
  }

  const selectChange=(x:number)=>{
    const a:string[]=list;
    a.splice(x,1);
    setList(a)
  }

  return(
    <Asd>
      <div>ユーザー名:{a}</div>
      <br />
      <BorderLine>
        <form>
          <textarea  cols={80} rows={7} onChange={textChange}></textarea>
          <br />
          <input type="button" value="投稿" onClick={submitText}></input>
      　</form>
      </BorderLine>
      <div>
        {list.map((content,index)=>
          <>
          <Maps text={content} key={index} myFunc={()=>selectChange(index)}/>
          </>
        )}
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
