import React, { forwardRef, Ref } from 'react';

interface BallProps {
  color: string;
  size: number;
}

const Ball = forwardRef<HTMLDivElement, BallProps>((props, ref) => {
  return (
    <div
    data-testid="ball"
    ref={ref}
    style={{
      width: props.size,
      height: props.size,
      borderRadius: '50%',
      backgroundColor: props.color,
      position: 'absolute'
    }}
  />  
  );
});

export default Ball;
