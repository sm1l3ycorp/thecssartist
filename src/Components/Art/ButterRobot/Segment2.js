import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Segment = styled.div`
  width: 3rem;
  height: 7rem;
  background-color: #424E58;
  border-radius: .2rem;
  margin-top: -1rem;
`;

const Segment2 = () => {
    return (
      <>
        <Wrapper>
          <Segment />
        </Wrapper>
      </>
    );
  };
  
  export default Segment2;