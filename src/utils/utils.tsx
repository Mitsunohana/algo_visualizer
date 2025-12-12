export const makeNewArray = (quantity = 50) => {
  const newArray = [];
  for (let i = 0; i < quantity; i++) {
    newArray.push(randomIntFromIntervals(5, 500));
  }
  return newArray;
};

export const randomIntFromIntervals = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
