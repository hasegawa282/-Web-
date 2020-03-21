import React,{useState,useCallback} from "react";
import * as H from "history";
import styled from "styled-components";

import { headerHeight } from "../../../utils/size";


interface Props {
  onClickKeijiban: () => void;
  onClickLogin: () => void;
}

const Home: React.FC<Props> = props => {
  return (
    <Wrapper>
      <HeaderBox>
      <div style={{fontSize:50}}>66チャンネル</div>
        <HeaderTextBox>
          <a href="#" style={{marginRight:20 ,color:"#000"}}>Home</a>
          <a href="#" style={{marginRight:20,color:"#000"}} onClick={props.onClickKeijiban}>掲示板</a>
          <a href="#" style={{color:"#000"}} onClick={props.onClickLogin}>Login</a>
        </HeaderTextBox>
      </HeaderBox>
      <Content>
        {props.children}
      </Content>  
    </Wrapper>
  );
};

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

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - ${headerHeight});
`;


export default Home;
