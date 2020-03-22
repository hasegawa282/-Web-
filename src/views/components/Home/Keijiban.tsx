import React,{ useState } from "react";
import styled from "styled-components";
import Maps from "../Maps";

const Keijiban:React.FC =props=> {
  // var list:string[]=[];        <- 変数だけ変えてもレンダリングされないよ！めっっ！
  const [value,setValue]=useState(<></>)
  const [textName, setName]=useState("");
  const [list, setList] = useState<string[]>([])



  const textChange=(e:any)=>{
    const newtextName=e.target.value;
    setName(newtextName);
  };

  // const resultMap=()=>{
  //   if(list.length===1){
  //     return(<Maps text={list[0]}/>);
  //   }else{list.map((item)=>{
  //       return(<Maps text={item} />);
  //     })
  //   }
  // };

  const submitText=()=>{
    // list.push(textName)
    setList([...list, textName])    // <- ...list はlistの中身全部を意味する
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
        {/* resultMap()    ↓<Maps ~~ />を中括弧でくくるとエラーになる / map使うときはユニークなkeyを設定しないといけない*/}
        {
          list.map((content, index) => 
            <Maps text={content} key={index}/>
          )
        }
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
