import { animationsType } from "../utils/types";

const mergeSort = (array: number[]) => {
  const animations: animationsType = [];
  if (array.length <= 1) return animations;

  const mainArray = [...array]; // Copy of the original array for sorting
  const auxiliaryArray = [...array]; // Auxiliary array for merging
  mergeSortHelper(
    mainArray,
    0,
    mainArray.length - 1,
    auxiliaryArray,
    animations,
  );
  return animations;
};

function mergeSortHelper(
  mainArray: number[],
  startIdx: number,
  endIdx: number,
  auxiliaryArray: number[],
  animations: animationsType,
) {
  if (startIdx === endIdx) return;

  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray: number[],
  startIdx: number,
  middleIdx: number,
  endIdx: number,
  auxiliaryArray: number[],
  animations: number[][],
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;

  while (i <= middleIdx && j <= endIdx) {
    // Record comparisons
    animations.push([i, j]); // Highlight comparison
    animations.push([i, j]); // Revert color

    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]); // Overwrite step
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]); // Overwrite step
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  while (i <= middleIdx) {
    animations.push([i, i]); // Highlight comparison
    animations.push([i, i]); // Revert color
    animations.push([k, auxiliaryArray[i]]); // Overwrite step
    mainArray[k++] = auxiliaryArray[i++];
  }

  while (j <= endIdx) {
    animations.push([j, j]); // Highlight comparison
    animations.push([j, j]); // Revert color
    animations.push([k, auxiliaryArray[j]]); // Overwrite step
    mainArray[k++] = auxiliaryArray[j++];
  }
}

export default mergeSort;
