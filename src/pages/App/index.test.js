import React from 'react';
import { render } from '@testing-library/react';
import App from './index';

test('renders App', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/YouTube Player/i);
  expect(linkElement).toBeInTheDocument();
});