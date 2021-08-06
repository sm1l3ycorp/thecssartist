import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-top: 6rem;
`;

const Segment1 = styled.div`
  width: 1.75rem;
  height: 1rem;
  background-color: #d3d3d3;
  border-radius: 0.2rem;
`;

const Segment2 = styled.div`
  width: 1.75rem;
  height: 5rem;
  background-color: #424e58;
  border-radius: 0.2rem;
`;

const Segment3 = styled.div`
width: 1.75rem;
height: 1rem;
background-color: #d3d3d3;
border-radius: 0.2rem;
`;

const Segment4 = styled.div`
  width: 1.75rem;
  height: 7rem;
  background-color: #424e58;
  border-radius: 0.2rem;
`;

const Hand = styled.div`
  width: 1.75rem;
  height: 1rem;
  background-color: #d3d3d3;
  border-radius: 0.2rem;
`;

const Arm = () => {
  return (
    <>
      <Wrapper>
        <Segment1 />
        <Segment2 />
        <Segment3 />
        <Segment4 />
        <Hand />
      </Wrapper>
    </>
  );
};

export default Arm;
