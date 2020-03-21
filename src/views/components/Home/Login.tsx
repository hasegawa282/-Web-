import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { sampleSelector } from "../../../redux/selectors/sampleSelector";
import sampleModule from "../../../redux/modules/sampleModule";

import SampleButton from "../SampleButton";
import SampleInput from "../SampleInput";
import Button from 'react-bootstrap/Button';


const ContentBox = styled.div`
  margin-top:10%;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextLine=styled.div`
  background-color: #fff;
  display:flex;
`;


const Login: React.FC = props => {
  const dispatch = useDispatch();
  const sampleState = useSelector(sampleSelector);
  
  const _handleClick = () => {
    dispatch(sampleModule.actions.changeNum(sampleState.someNum + 1));
  };
  const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(sampleModule.actions.changeStr(e.currentTarget.value));
  };

  return(
    <ContentBox>
      <TextLine>
        <div>ログインID:</div>
        <SampleInput onChange={_handleChange} text={sampleState.someStr} />
      </ TextLine>
      <TextLine style={{margin:"1%"}}>
        <div >パスワード:</div>
        <SampleInput onChange={_handleChange} text={sampleState.someStr} />
      </ TextLine>
      <Button variant="light" style={{marginTop:"2%"}}>ログイン</Button>
    </ContentBox>
  )
}


export default Login;

