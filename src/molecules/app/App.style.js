import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AppHeader = styled.div`
  background-color: #0c2f4e;
  display: flex;
  height: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppLogo = styled.img``;

export const Robot = styled.img`
  position: absolute;
  height: 100px;
  width: 100px;
  top: ${(props) => props.position.top}px;
  left: ${(props) => props.position.left}px;
  transform: rotateY(${(props) => (props.position.direction === -1 ? 0 : '180deg')});
  transform: rotate(
    ${(props) =>
      props.position.direction === -2
        ? '90deg'
        : (props) => (props.position.direction === 2 ? '-90deg' : 'none')}
  );
  transition: left 0.5s, top 0.5s, transform 0.5s;
`;

export const MainContainer = styled.div`
  background: #e6e6e6;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RobotLand = styled.div`
  flex: 1;
  background: white;
  position: relative;
  width: 500px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

export const RobotArea = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  background-color: #f1f1f1;
  border: 1px solid #555;
`;

export const CommandPanel = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

export const CommandsInput = styled.textarea`
  // width: 40%;
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

export const ExplainPanel = styled.div`
  flex: 1;
  padding: 20px;
  color: #666;
`;

export const ActionContainer = styled.div`
  background: #a0bdda;
  min-height: 8vh;
`;

export const Footer = styled.div`
  background: #0f3c64;
  flex: 1;
  min-height: 80px;
`;
