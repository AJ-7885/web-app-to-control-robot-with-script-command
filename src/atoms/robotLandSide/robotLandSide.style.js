import styled from 'styled-components';

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
