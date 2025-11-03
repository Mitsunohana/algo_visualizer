import { ACTION, animationsType } from "../utils/types";

function cycleSort(array: number[]) {
  const copiedArray = [...array];
  const animations: animationsType = [];

  for (let cycleStart = 0; cycleStart < copiedArray.length - 1; cycleStart++) {
    let item = copiedArray[cycleStart];

    let pos = cycleStart;
    for (let i = cycleStart + 1; i < copiedArray.length; i++) {
      animations.push([cycleStart, i, ACTION.COMPARE]);
      if (copiedArray[i] < item) {
        pos++;
      }
    }

    if (pos === cycleStart) continue;

    while (item === copiedArray[pos]) {
      pos++;
    }

    if (pos !== cycleStart) {
      animations.push([cycleStart, pos, ACTION.SWAP]);
      [copiedArray[pos], item] = [item, copiedArray[pos]];
    }

    while (pos !== cycleStart) {
      pos = cycleStart;

      for (let i = cycleStart + 1; i < copiedArray.length; i++) {
        animations.push([cycleStart, i, ACTION.COMPARE]);
        if (copiedArray[i] < item) {
          pos++;
        }
      }

      while (item === copiedArray[pos]) {
        pos++;
      }

      if (item !== copiedArray[pos]) {
        animations.push([cycleStart, pos, ACTION.SWAP]);
        [copiedArray[pos], item] = [item, copiedArray[pos]];
      }
    }
  }

  return animations;
}

export default cycleSort;
