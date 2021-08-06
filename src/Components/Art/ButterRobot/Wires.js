import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-bottom: -2rem;
  margin-right: 6rem;
`;

const YellowWire = styled.div`
  width: 1rem;
  height: 0.5rem;
  border-top-left-radius: 1.1rem;
  border-top-right-radius: 1.1rem;
  border: 0.2rem solid yellow;
  border-bottom: 0;
  margin-right: 0.25rem;
  margin-left: 6rem;
`;

const RedWire = styled.div`
  width: 1rem;
  height: 0.5rem;
  border-top-left-radius: 1.1rem;
  border-top-right-radius: 1.1rem;
  border: 0.2rem solid red;
  border-bottom: 0;
  margin-right: 5.8rem;
`;

const RedBulb = styled.div`
  width: 0.25rem;
  height: 0.5rem;
  border: 0.2rem solid red;
  background-color: red;
  border-bottom: 0;
`;

const Wires = () => {
  return (
    <>
      <Wrapper>
        <YellowWire />
        <RedWire />
        <RedBulb />
      </Wrapper>
    </>
  );
};

export default Wires;
