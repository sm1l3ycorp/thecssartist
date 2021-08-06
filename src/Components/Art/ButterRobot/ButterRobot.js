import React from "react";
import styled from "styled-components";
import Segment1 from "./Segment1";
import Segment2 from "./Segment2";
import Segment3 from "./Segment3";
import WheelsBase from "./WheelsBase";
import Wheel from "./Wheel";
import Head from "./Head";
import Arm from "./Arm";
import Wires from "./Wires";

const HeadWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: -9rem;
`;

const WheelWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
`;

const ButterRobot = () => {
  return (
    <>
      <Wires />
      <HeadWrapper>
        <Arm />
        <Head />
        <Arm />
      </HeadWrapper>
      <Segment1 />
      <Segment2 />
      <Segment3 />
      <WheelWrapper>
        <Wheel />
        <WheelsBase />
        <Wheel />
      </WheelWrapper>
    </>
  );
};

export default ButterRobot;
