import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme/build';
import { RobotLandSide } from './RobotLandSide';

const mockRobotPosition = { top: 0, left: 0, direction: 2 };

test('renders component and check the content', () => {
  const component = mount(<RobotLandSide robotPosition={mockRobotPosition} />);
  expect(component.find('div').length).toBe(2);
});

test('renders correctly', () => {
  const component = renderer
    .create(<RobotLandSide robotPosition={mockRobotPosition} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
