import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Temperature title', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Temperature/i);
  expect(textElement).toBeInTheDocument();
});
