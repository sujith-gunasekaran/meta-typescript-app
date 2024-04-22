import React from 'react';
import { screen, render } from '@testing-library/react';
import App from '../app/components/App';

test('renders learn react link', () => {
  const result = render(<App client={{}} />);
  const linkElement = screen.getByText(/Your first meta react app/i);
  expect(linkElement).toBeInTheDocument();
});
