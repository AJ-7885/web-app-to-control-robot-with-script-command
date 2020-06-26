export const initialCommandsState = [
  'POSITION 1 1 EAST',
  'FORWARD 3',
  'WAIT',
  'TURNAROUND',
  'FORWARD 1',
  'RIGHT',
  'FORWARD 2'
];

export const initialRobotPositionState = {
  top: 0,
  left: 0,
  direction: 2
};

export const initialProcessQueue = {
  step: 0,
  commands: []
};
