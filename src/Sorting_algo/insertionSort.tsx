import { ACTION, animationsType } from "../utils/types";

const insertionSort = (array: number[]) => {
  const copiedArray = [...array];
  const animations: animationsType = [];

  for (let i = 1; i < copiedArray.length; i++) {
    const key = copiedArray[i];
    let j = i - 1;

    while (j >= 0 && copiedArray[j] > key) {
      animations.push([j, j + 1, ACTION.COMPARE]);
      animations.push([j + 1, copiedArray[j], ACTION.SWAP]);
      copiedArray[j + 1] = copiedArray[j];
      j--;
    }

    animations.push([j + 1, key, ACTION.SWAP]);
    copiedArray[j + 1] = key;
  }

  return animations;
};

export default insertionSort;
