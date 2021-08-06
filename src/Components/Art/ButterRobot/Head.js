import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const HeadDiv = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: #d3d3d3;
  display: flex;
  align-content: center;
  justify-content: center;
  box-shadow: 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.2),
    0 0.5rem 1rem 0 rgba(0, 0, 0, 0.19);
  margin-top: 2rem;
`;

const Eye = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 4rem;
  border: 0.4rem solid #424E58;
  margin-top: 1.5rem;
`;

const OutterEye = styled.div`
  width: 5.4rem;
  height: 5.4rem;
  border-radius: 3rem;
  border: 0.3rem solid #000000;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const InnerEye = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 6rem;
  border: 0.5rem solid #000000;
  margin-top: 1rem;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Pupil = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #BEF3FC;
  border-radius: 60%;
`;

const Head = () => {
    return (
      <Wrapper>
        <HeadDiv>
          <Eye>
            <OutterEye>
              <InnerEye>
                <Pupil />
              </InnerEye>
            </OutterEye>
          </Eye>
        </HeadDiv>
      </Wrapper>
    );
  };
  
  export default Head;