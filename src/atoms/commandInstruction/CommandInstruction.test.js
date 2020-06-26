import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { CommandInstruction } from './CommandInstruction';

test('renders component and check the content', () => {
  const { getByText } = render(<CommandInstruction />);
  const element = getByText(/4. LEFT , RIGHT , UP . DOWN/i);
  expect(element).toBeInTheDocument();
});

test('renders correctly', () => {
  const component = renderer.create(<CommandInstruction />).toJSON();
  expect(component).toMatchSnapshot();
});
