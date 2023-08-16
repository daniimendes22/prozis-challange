import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Ball from './Ball';

describe('<Ball />', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    render(<Ball color="red" size={50} />);
  });

  it('applies color prop correctly', () => {
    render(<Ball color="red" size={50} />);
    const ballElement = screen.getByTestId('ball');
    expect(ballElement).toHaveStyle('background-color: red');
  });

  it('applies size prop correctly', () => {
    render(<Ball color="red" size={50} />);
    const ballElement = screen.getByTestId('ball');
    expect(ballElement).toHaveStyle('width: 50px');
    expect(ballElement).toHaveStyle('height: 50px');
  });

  it('attaches ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Ball color="red" size={50} ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('has correct styles', () => {
    render(<Ball color="red" size={50} />);
    const ballElement = screen.getByTestId('ball');
    expect(ballElement).toHaveStyle('border-radius: 50%');
    expect(ballElement).toHaveStyle('position: absolute');
  });
});
