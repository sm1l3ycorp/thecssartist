import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`;

const WheelsBaseDiv = styled.div`
  width: 7rem;
  height: 4rem;
  background-color: #d3d3d3;
  border-radius: 1rem;
`;

const WheelsBase = () => {
    return (
      <>
        <Wrapper>
          <WheelsBaseDiv />
        </Wrapper>
      </>
    );
  };
  
  export default WheelsBase;