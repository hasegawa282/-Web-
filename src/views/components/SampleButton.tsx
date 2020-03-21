import React from "react";
import styled from "styled-components";

type Props = {
  onClick: () => void;
  num: number;
};

const SampleButton: React.FC<Props> = props => {
  return (
    <>
      <button onClick={props.onClick}>{props.num}</button>
    </>
  );
};

export default SampleButton;
