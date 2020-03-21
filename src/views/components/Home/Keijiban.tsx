import React,{ useState } from "react";
import styled from "styled-components";


const Keijiban: React.FC = props => {
  const [value, setValue]=useState("aiueo");
  const [textName, setName]=useState("");

  const textChange=(e:any)=>{
    const newtextName=e.target.value;
    console.log(newtextName)
    setName(newtextName);
  };

  const submitText=()=>{
    const newValue=textName;
    console.log(textName);
    setValue(newValue);
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
          {value}
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
