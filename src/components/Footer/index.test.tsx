import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from './index';

describe('Footer', () => {
  it('renders the label text correctly', () => {
    const label = 'Hello world!';
    render(<Footer label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('renders the title correctly', () => {
    render(<Footer label="Hello world!" />);
    expect(screen.getByText('My test PR')).toBeInTheDocument();
  });
});
