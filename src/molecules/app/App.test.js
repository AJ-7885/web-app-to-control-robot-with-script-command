import React from 'react';
import renderer from 'react-test-renderer';
// import { mount } from 'enzyme/build';
import App from './App';

//TODO: Fix the issue of unit test for useCustomHook
// import { useRobotState } from './hooks';

// import {
//   initialCommandsState,
//   initialRobotPositionState,
//   initialProcessQueue
// } from './initialData';

// describe('useCustomHook', () => {
//   let results;
//   const renderHook = (hook) => {
//     function HookWrapper() {
//       results = hook();
//       return null;
//     }
//     mount(<HookWrapper />);
//     return results;
//   };

// it('works', () => {
//   renderHook(
//     useRobotState(
//       initialCommandsState,
//       initialRobotPositionState,
//       initialProcessQueue
//     )
//   )
// expect(results).toEqual(0);

// act(() => {
// });
// });
// });

test('renders correctly', () => {
  const component = renderer.create(<App />).toJSON();
  expect(component).toMatchSnapshot();
});
