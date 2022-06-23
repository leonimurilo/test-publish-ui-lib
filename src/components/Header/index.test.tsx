import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from './index';

describe('Header', () => {
  it('renders the logo text correctly', () => {
    const text = 'Red Hat!';
    render(<Header logoText={text} items={[]} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders the items correctly', () => {
    const items = [
      {
        label: 'Cloud',
        id: 'cloud',
      },
      {
        label: 'Community',
        id: 'community',
      },
      {
        label: 'Help',
        id: 'help',
      },
    ];
    render(<Header logoText="Red hat" items={items} />);

    items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it('renders the early access button correctly', () => {
    render(<Header logoText="Red hat" items={[]} />);
    expect(screen.getByRole('button', { name: /Early access/i })).toBeInTheDocument();
  });

  it('renders calls onEarlyAccessClick callback prop on button click', () => {
    const onClickFn = jest.fn();

    render(<Header logoText="Red hat" items={[]} onEarlyAccessClick={onClickFn} />);

    const button = screen.getByRole('button', { name: /Early access/i });
    userEvent.click(button);

    expect(onClickFn).toHaveBeenCalledTimes(1);
  });
});
