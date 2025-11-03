import { ACTION, animationsType } from "../utils/types";

const selectionSort = (array: number[]) => {
  const copiedArray = [...array];
  const animations: animationsType = [];
  for (let i = 0; i < copiedArray.length - 1; i++) {
    let smallestNumberIndex = i;

    for (let j = i + 1; j < copiedArray.length; j++) {
      animations.push([i, smallestNumberIndex, j, ACTION.COMPARE]);

      if (copiedArray[smallestNumberIndex] > copiedArray[j]) {
        smallestNumberIndex = j;
      }
    }

    if (i !== smallestNumberIndex) {
      [copiedArray[i], copiedArray[smallestNumberIndex]] = [
        copiedArray[smallestNumberIndex],
        copiedArray[i],
      ];
      //animation[n][3] here is just a placeholder and does nothing.
      animations.push([i, smallestNumberIndex, 0, ACTION.SWAP]);
    }
  }

  return animations;
};

export default selectionSort;
