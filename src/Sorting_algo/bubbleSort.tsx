import { animationsType } from "../utils/types";

const bubbleSort = (array: number[]) => {
  const copiedArray = [...array];
  const animations: animationsType = [];

  for (let i = 0; i < copiedArray.length - 1; i++) {
    for (let j = 0; j < copiedArray.length - i - 1; j++) {
      if (copiedArray[j] > copiedArray[j + 1]) {
        [copiedArray[j], copiedArray[j + 1]] = [
          copiedArray[j + 1],
          copiedArray[j],
        ];
      }
      animations.push([j, j + 1]);
    }
  }

  return animations;
};

export default bubbleSort;
