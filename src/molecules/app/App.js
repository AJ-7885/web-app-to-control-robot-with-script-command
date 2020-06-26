import React from 'react';
import logo from '../../assets/logo.svg';

import { useRobotState } from './hooks';
import { Header, Footer, CommandInstruction, RobotLandSide } from './../../atoms';

import {
  Container,
  MainContainer,
  ActionContainer,
  CommandPanel,
  StartButton,
  CommandsInput
} from './App.style';

import {
  initialCommandsState,
  initialRobotPositionState,
  initialProcessQueue
} from './initialData';

function App() {
  const [
    commands,
    setCommands,
    robotPosition,
    processQueue,
    setProcessQueue
  ] = useRobotState(
    initialCommandsState,
    initialRobotPositionState,
    initialProcessQueue
  );

  function startHandler() {
    const commandListTemp = commands.map((command) => command.split(' '));
    setProcessQueue({
      ...processQueue,
      step: commands.length,
      commands: [...commandListTemp]
    });
  }

  const inputCommand = (newUserCommands) => {
    const newCommadlist = newUserCommands.split(/\r?\n/);
    setCommands(newCommadlist);
  };

  return (
    <Container>
      <Header logo={logo} />
      <MainContainer>
        <CommandPanel>
          <CommandsInput
            onChange={(e) => inputCommand(e.target.value)}
            value={commands.join('\r\n')}
            rows="10"
          />
          <StartButton onClick={startHandler}>Start</StartButton>
          <CommandInstruction />
        </CommandPanel>
        <RobotLandSide robotPosition={robotPosition} />
      </MainContainer>
      <ActionContainer />
      <Footer />
    </Container>
  );
}
export default App;
