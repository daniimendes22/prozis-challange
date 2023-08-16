import React, { useState, useEffect, useCallback } from "react";
import { useViewportSize } from "../hooks/useViewportSize";
import { getRandomColor, getRandomNum, getRandomSize } from "../utils";

interface Ball {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  color: string;
  size: number;
}

const BallContainer: React.FC = () => {
  const { width, height } = useViewportSize();
  const [balls, setBalls] = useState<Ball[]>([]);

  const addBall = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const size = getRandomSize();
    const newBall: Ball = {
      id: Date.now(),
      x: e.clientX - size / 2,
      y: e.clientY - size / 2,
      dx: getRandomNum(-6, 6),
      dy: getRandomNum(-6, 6),
      color: getRandomColor(),
      size: size
    };
    setBalls((balls) => [...balls, newBall]);
  }, []);

  useEffect(() => {
    const moveBalls = () => {
      setBalls((balls) =>
        balls.map((ball) => {
          let { x, y, dx, dy, size } = ball;

        // Check if the ball hits the horizontal edges and invert its horizontal velocity if it does
          if (x + dx > width - size || x + dx < 0) {
            dx = -dx * 0.9;
            if (Math.abs(dx) < 1) dx = dx < 0 ? -1 : 1;
          }

        // Check if the ball hits the vertical edges and invert its vertical velocity if it does
          if (y + dy > height - size || y + dy < 0) {
            dy = -dy * 0.9;
            if (Math.abs(dy) < 1) dy = dy < 0 ? -1 : 1;
          }

          return { ...ball, x: x + dx, y: y + dy, dx, dy };
        })
      );
    };

    const interval = setInterval(moveBalls, 20);
    return () => clearInterval(interval);
  }, [width, height, balls]);

  return (
    <main
    data-testid="ball-container"
    onClick={addBall}
    style={{
      position: "relative",
      width: "100vw",
      height: "100vh"
    }}
  >
    {balls.map((ball) => (
      <div
        key={ball.id}
        data-testid="ball"
        style={{
          position: "absolute",
          width: ball.size,
          height: ball.size,
          borderRadius: "50%",
          backgroundColor: ball.color,
          left: ball.x,
          top: ball.y
        }}
      ></div>
    ))}
  </main>
  );
};

export default BallContainer;
