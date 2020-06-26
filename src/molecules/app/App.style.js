import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  background: #e6e6e6;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CommandPanel = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

export const CommandsInput = styled.textarea`
  padding: 1rem;
`;

export const StartButton = styled.button`
  background : #444;
  color : white;
  padding; 20px;
  margin : 10px;
  width: 140px;
  font-size: 20px;
  cursor: pointer;
`;

export const ActionContainer = styled.div`
  background: #a0bdda;
  min-height: 8vh;
`;
