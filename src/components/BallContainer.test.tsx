import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import BallContainer from './BallContainer';

describe('<BallContainer />', () => {
  afterEach(cleanup); // Clean up on exiting

  it('renders without crashing', () => {
    render(<BallContainer />);
    const mainElement = screen.getByTestId('ball-container');
    expect(mainElement).toBeInTheDocument();
  });

  it('has no balls on initial render', () => {
    render(<BallContainer />);
    const balls = screen.queryAllByTestId('ball');
    expect(balls).toHaveLength(0);
  });

  it('adds a ball on click', () => {
    render(<BallContainer />);
    const mainElement = screen.getByTestId('ball-container');

    fireEvent.click(mainElement);
    const balls = screen.getAllByTestId('ball');
    expect(balls).toHaveLength(1);
  });

  it('adds multiple balls on multiple clicks', () => {
    render(<BallContainer />);
    const mainElement = screen.getByTestId('ball-container');

    fireEvent.click(mainElement);
    fireEvent.click(mainElement);
    fireEvent.click(mainElement);

    const balls = screen.getAllByTestId('ball');
    expect(balls).toHaveLength(3);
  });

});
