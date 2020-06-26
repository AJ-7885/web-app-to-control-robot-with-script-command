import React from 'react';
import robot from '../../assets/robot.png';
import { RobotLand, RobotArea, Robot } from './robotLandSide.style';

export const RobotLandSide = ({robotPosition}) => {
  return (
    <RobotLand>
      <RobotArea>
        <Robot position={robotPosition} src={robot} alt="robot" />
      </RobotArea>
    </RobotLand>
  );
};
