import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const WheelDiv = styled.div`
  width: 1.5rem;
  height: 4rem;
  background: repeating-linear-gradient(
    to right,
    #424E58,
    #424E58 0.325rem,
    #d3d3d3 0.325rem,
    #d3d3d3 0.35rem
  );
  border-radius: 1rem;
`;

const Wheel = () => {
    return (
      <>
        <Wrapper>
          <WheelDiv />
        </Wrapper>
      </>
    );
  };
  
  export default Wheel;