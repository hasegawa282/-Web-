import React,{ useState } from "react";
import styled from "styled-components";
import Maps from "../Maps";

const Keijiban:React.FC =props=> {

  const [list,setList]=useState<string[]>([]);

　const a:string="master";

  const [value,setValue]=useState(<></>)
  const [textName, setName]=useState("");

  const textChange=(e:any)=>{
    const newtextName=e.target.value;
    setName(newtextName);
  };

  const deleteChange=(x:number)=>{
    // 配列は普通にイコールで渡すと'参照渡し'になる(一方を変更するともう一方も変更される状態)
    // 今回はこの参照渡しのせいで、aとlistが内部的に同じ変数になってしまい、setList(a)がsetList(list)
    // と認識されてしまったため、reactが'なんや、変更ないやんレンダリングやめよ'となってしまった
    // 配列.slice()とすることで、配列の中身をそっくりコピー出来る('値渡し')ので、今回はこのように解決した
    
    let a:string[]=list.slice();
    a.splice(x,1);
    console.log(a)
    setList(a)
  }

  const submitText=()=>{
    setList([...list, textName])  
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
          <Maps text={content} key={index} myFunc={()=>deleteChange(index)}/>
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
