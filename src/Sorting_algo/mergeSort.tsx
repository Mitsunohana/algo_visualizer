const mergeSort = (
  array: number[],
): { animations: number[][]; sortedArray: number[] } => {
  const animations: number[][] = [];
  const auxiliaryArray = [...array];

  const mergeSortHelper = (mainArray: number[], start: number, end: number) => {
    if (start >= end) return;

    const middle = Math.floor((start + end) / 2);
    mergeSortHelper(mainArray, start, middle);
    mergeSortHelper(mainArray, middle + 1, end);
    merge(mainArray, auxiliaryArray, start, middle, end);
  };

  const merge = (
    mainArray: number[],
    auxiliaryArray: number[],
    start: number,
    middle: number,
    end: number,
  ) => {
    let k = start;
    let i = start;
    let j = middle + 1;

    while (i <= middle && j <= end) {
      animations.push([i, j]); // Compare i and j
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]); // Overwrite value at index k with auxiliaryArray[i]
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]); // Overwrite value at index k with auxiliaryArray[j]
        mainArray[k++] = auxiliaryArray[j++];
      }
    }

    while (i <= middle) {
      animations.push([i, i]); // Compare i with itself (visualization step)
      animations.push([k, auxiliaryArray[i]]); // Overwrite value at index k with auxiliaryArray[i]
      mainArray[k++] = auxiliaryArray[i++];
    }

    while (j <= end) {
      animations.push([j, j]); // Compare j with itself (visualization step)
      animations.push([k, auxiliaryArray[j]]); // Overwrite value at index k with auxiliaryArray[j]
      mainArray[k++] = auxiliaryArray[j++];
    }

    for (let x = start; x <= end; x++) {
      auxiliaryArray[x] = mainArray[x];
    }
  };

  mergeSortHelper(array, 0, array.length - 1);
  return { animations, sortedArray: array };
};

export default mergeSort;
