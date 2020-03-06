import React from "react";
import * as H from "history";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { sampleSelector } from "../../redux/selectors/sampleSelector";
import sampleModule from "../../redux/modules/sampleModule";

import SampleButton from "../atoms/SampleButton";
import SampleInput from "../atoms/SampleInput";
import Button from 'react-bootstrap/Button';
import { Tab, Tabs } from 'react-bootstrap';
import { headerHeight } from "../../utils/size";


const HeaderBox = styled.div`
  height: ${headerHeight};
  display: flex;
  border-bottom:solid 1px #000;
  margin:0% 2%;
`;

const HeaderTextBox = styled.div`
  height: ${headerHeight};
  display: flex;
  font-size:20;
  margin-top:50px;
  margin-left:80px;
  
`;

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

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - ${headerHeight});
`;



const Home: React.FC = props => {
  // dispatch, state を用意
  const dispatch = useDispatch();
  const sampleState = useSelector(sampleSelector);

  const _handleClick = () => {
    dispatch(sampleModule.actions.changeNum(sampleState.someNum + 1));
  };
  const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(sampleModule.actions.changeStr(e.currentTarget.value));
  };
  const clickChangeHome=()=>{
    state.content=(
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
    </ContentBox>);
  };

  const clickChangeProfile=()=>{
    state.content=(
    <ContentBox>Welcome to the ID</ContentBox>);
  };

  const clickChangeLogin=()=>{
    state.content=(
    <ContentBox>sign in</ContentBox>);
  };

  let state={
    content:　<></>
  };


    return (
      <Wrapper>
        <HeaderBox>
        <div style={{fontSize:60}}>ID</div>
          <HeaderTextBox>
           <a href="/" style={{marginRight:20 ,color:"#000"}} onClick={()=>clickChangeHome()}>Home</a>
           <a href="/" style={{marginRight:20,color:"#000"}}>Profile</a>
           <a href="/" style={{color:"#000"}}>Login</a>
          </HeaderTextBox>
        </HeaderBox>
        <Content>
          {state.content}
        </Content>  
      </Wrapper>
    );
};

export default Home;

