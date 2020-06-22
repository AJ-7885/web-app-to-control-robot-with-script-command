import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import robot from '../../assets/robot.png';

import {
  Container,
  AppHeader,
  AppLogo,
  MainContainer,
  ActionContainer,
  Footer,
  RobotLand,
  RobotArea,
  Robot,
  CommandPanel,
  ExplainPanel,
  StartButton,
  CommandsInput
} from './App.style';

function App() {
  const initialCommandsState = [
    'POSITION 1 1 EAST',
    'FORWARD 3',
    'WAIT',
    'TURNAROUND',
    'FORWARD 1',
    'RIGHT',
    'FORWARD 2'
  ];

  const initialRobotPositionState = {
    top: 0,
    left: 0,
    direction: 2
  };

  const [commands, setCommands] = useState(initialCommandsState);
  const [robotPosition, setRobotPosition] = useState(initialRobotPositionState);
  const [values, setValues] = useState({
    step: 0,
    commands: []
  });

  function startHandler() {
    let commandListTemp = [];
    commands.map(
      (command) => (commandListTemp = [...commandListTemp, command.split(' ')])
    );

    setValues({ ...values, step: commands.length, commands: [...commandListTemp] });
  }

  useEffect(() => {
    setTimeout(() =>{
      if (values.commands.length > 0) {
        switch (values.commands[0][0]) {
          case 'POSITION':
            let posX = parseInt(values.commands[0][1]) * 100;
            let posY = parseInt(values.commands[0][2]) * 100;
            let posDirection =
              values.commands[0][3] === 'WEST'
                ? -1
                : values.commands[0][3] === 'EAST'
                ? 1
                : values.commands[0][3] === 'SOUTH'
                ? 2
                : values.commands[0][3] === 'NORTH'
                ? -2
                : 1;
            if (posX > 400 || posY > 400 || posX < 0 || posY < 0) {
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
            let addX = 0;
            let addY = 0;
            if (robotPosition.direction === 1 || robotPosition.direction === -1) {
              addX =
                values.commands[0][1] * robotPosition.direction * 100 +
                robotPosition.left;
              addY = robotPosition.top;
              if (addX > 400) {
                addX = 400;
                alert("Can't move anymore.");
              } else if (addX < 0) {
                addX = 0;
                alert("Can't move anymore.");
              }
            }
            if (robotPosition.direction === 2 || robotPosition.direction === -2) {
              addY =
                (values.commands[0][1] * robotPosition.direction * 100) / 2 +
                robotPosition.top;
              addX = robotPosition.left;
              if (addY > 400) {
                addY = 400;
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
            setRobotPosition({
              ...robotPosition,
              direction: 1
            });
            break;
          case 'LEFT':
            setRobotPosition({
              ...robotPosition,
              direction: -1
            });
            break;
          case 'DOWN':
            setRobotPosition({
              ...robotPosition,
              direction: 2
            });
            break;
          case 'TOP':
            setRobotPosition({
              ...robotPosition,
              direction: -2
            });
            break;
          case '':
            alert('Remove space on Head of Command.');
            break;
          default:
            let warnMessage = 'Insert Correct Command! (' + values.commands[0] + ')';
            alert(warnMessage);
        }
        setValues({
          ...values,
          commands: [...values.commands.slice(1, values.commands.length)]
        });
      }
    }, 1000);
  }, [values, robotPosition]);

  const inputCommand = (value) => {
    let temp = [];
    temp = value.split(/\r?\n/);
    setCommands(temp);
  };

  return (
    <Container>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
      </AppHeader>
      <MainContainer>
        <CommandPanel>
          <CommandsInput
            onChange={(e) => inputCommand(e.target.value)}
            value={commands.join('\r\n')}
            rows="10"
          />
          <StartButton onClick={startHandler}>Start</StartButton>
          <ExplainPanel>
            Commands: <br />
            <br />
            1. FORWARD "NUMBER VALUE"
            <br />
            2. WAIT
            <br />
            3. POSITION "X value" "Y value" "direction (WEST,EAST,NORTH,SOUTH)"
            <br />
            4. LIFT , RIGHT , TOP . DOWN
            <br />
            5. TURNAROUND
          </ExplainPanel>
        </CommandPanel>

        <RobotLand>
          <RobotArea>
            <Robot position={robotPosition} src={robot} alt="robot" />
          </RobotArea>
        </RobotLand>
      </MainContainer>

      <ActionContainer />
      <Footer />
    </Container>
  );
}
export default App;
