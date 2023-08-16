export function getRandomNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  export function getRandomColor(): string {
    return "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 50%)";
  }
  
  export function getRandomSize(): number {
    return getRandomNum(50, 100);
  }
  