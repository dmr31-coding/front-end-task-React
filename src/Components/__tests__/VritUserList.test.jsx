import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserList from '../components/UserList';

//  global fetch function
beforeEach(() => {
  global.fetch = jest.fn();
});

test('renders user names when fetch is successful', async () => {
  // Mock successful fetch response
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ],
  });

  render(<UserList />);

  // Check for loading state
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // Wait for users to be rendered
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });
});

test('displays an error message when fetch fails', async () => {
  // Mock failed fetch response
  global.fetch.mockRejectedValueOnce(new Error('Network Error'));

  render(<UserList />);

  // Check for loading state
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // Wait for error message to be rendered
  await waitFor(() => {
    expect(screen.getByText(/error: network error/i)).toBeInTheDocument();
  });
});
