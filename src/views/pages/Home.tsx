import React,{useState} from "react";

import Keijiban from "../components/Home/Keijiban";
import Login from "../components/Home/Login";
import HomeWrapper from "../components/Home/HomeWrapper";


const Home: React.FC = props => {
  const [state, setState] = useState(<></>)

  const clickChangeHome=()=>{
    setState(<Login />);
  };

  const clickChangeBulletin=()=>{
    setState(<Keijiban />)
  };

    return (
      <HomeWrapper
        onClickKeijiban={clickChangeBulletin}
        onClickLogin={clickChangeHome}
      >
        { state }
      </HomeWrapper>
    );
};

export default Home;

