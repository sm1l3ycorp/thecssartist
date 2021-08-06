import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Segment = styled.div`
  border-bottom: 3.25rem solid #424E58;
  border-left: 1.563rem solid transparent;
  border-right: 1.563rem solid transparent;
  width: 3.25rem;
  transform: rotate(180deg);
`;

const Segment1 = () => {
  return (
    <>
      <Wrapper>
        <Segment />
      </Wrapper>
    </>
  );
};

export default Segment1;
