import { useState, useEffect } from 'react';

export const useRobotState = (
  initialCommandsState,
  initialRobotPositionState,
  initialProcessQueue
) => {
  const [commands, setCommands] = useState(initialCommandsState || []);
  const [robotPosition, setRobotPosition] = useState(
    initialRobotPositionState || {}
  );
  const [processQueue, setProcessQueue] = useState(initialProcessQueue || {});

  useEffect(() => {
    commandProcessEngine(
      processQueue,
      setProcessQueue,
      robotPosition,
      setRobotPosition
    );
  }, [processQueue]);

  return [commands, setCommands, robotPosition, processQueue, setProcessQueue];
};

function commandProcessEngine(
  processQueue,
  setProcessQueue,
  robotPosition,
  setRobotPosition
) {
  let posX, posY, posDirection, addX, addY, warnMessage;
  const gridSize = 400;
  const gridGab = 100;
  const robotSpeed = 1000;
  setTimeout(() => {
    if (processQueue.commands.length > 0) {
      switch (processQueue.commands[0][0]) {
        case 'POSITION':
          processQueue.commands[0].filter((item) => item !== '');
          posX = parseInt(processQueue.commands[0][1]) * gridGab;
          posY = parseInt(processQueue.commands[0][2]) * gridGab;
          posDirection =
            processQueue.commands[0][3] === 'WEST'
              ? -1
              : processQueue.commands[0][3] === 'EAST'
              ? 1
              : processQueue.commands[0][3] === 'SOUTH'
              ? 2
              : processQueue.commands[0][3] === 'NORTH'
              ? -2
              : 1;
          if (posX > gridSize || posY > gridSize || posX < 0 || posY < 0) {
            posX = posY = 0;
            posDirection = 1;
            alert('Input Correct Position!');
          }
          setRobotPosition({ top: posX, left: posY, direction: posDirection });
          break;
        case 'WAIT':
          break;
        case 'TURNAROUND':
          setRobotPosition({
            ...robotPosition,
            direction: robotPosition.direction * -1
          });
          break;
        case 'FORWARD':
          addX = 0;
          addY = 0;
          if (robotPosition.direction === 1 || robotPosition.direction === -1) {
            addX =
              processQueue.commands[0][1] * robotPosition.direction * gridGab +
              robotPosition.left;
            addY = robotPosition.top;
            if (addX > gridSize) {
              addX = gridSize;
              alert("Can't move anymore.");
            } else if (addX < 0) {
              addX = 0;
              alert("Can't move anymore.");
            }
          }
          if (robotPosition.direction === 2 || robotPosition.direction === -2) {
            addY =
              (processQueue.commands[0][1] * robotPosition.direction * gridGab) / 2 +
              robotPosition.top;
            addX = robotPosition.left;
            if (addY > gridSize) {
              addY = gridSize;
              alert("Can't move anymore.");
            } else if (addY < 0) {
              addY = 0;
              alert("Can't move anymore.");
            }
          }
          setRobotPosition({
            ...robotPosition,
            left: addX,
            top: addY
          });
          break;
        case 'RIGHT':
          setRobotLocationOnMap(robotPosition, 1, setRobotPosition);
          break;
        case 'LEFT':
          setRobotLocationOnMap(robotPosition, -1, setRobotPosition);
          break;
        case 'DOWN':
          setRobotLocationOnMap(robotPosition, 2, setRobotPosition);
          break;
        case 'UP':
          setRobotLocationOnMap(robotPosition, -2, setRobotPosition);
          break;
        case '':
          alert('Remove space on Head of Command.');
          break;
        default:
          warnMessage = 'Insert Correct Command! (' + processQueue.commands[0] + ')';
          alert(warnMessage);
      }
      setProcessQueue({
        ...processQueue,
        commands: [...processQueue.commands.slice(1, processQueue.commands.length)]
      });
    }
  }, robotSpeed);
}

function setRobotLocationOnMap(
  currentRobotPosition,
  robotDirection,
  setRobotPosition
) {
  setRobotPosition({
    ...currentRobotPosition,
    direction: robotDirection
  });
}
