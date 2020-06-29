import React from 'react';
import robot from '../../assets/robot.png';
import { RobotLand, RobotArea, Robot } from './robotLandSide.style';

// eslint-disable-next-line react/prop-types
export const RobotLandSide = ({ robotPosition }) => {
  return (
    <RobotLand>
      <RobotArea>
        {robotPosition && <Robot position={robotPosition} src={robot} alt="robot" />}
      </RobotArea>
    </RobotLand>
  );
};
