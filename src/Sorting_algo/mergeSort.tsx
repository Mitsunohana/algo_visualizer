const mergeSort = (array: number[]): number[] => {
  if (array.length <= 1) return array;
  const copiedArray = [...array];

  const mid = Math.floor(copiedArray.length / 2);
  const left = copiedArray.slice(0, mid);
  const right = copiedArray.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left: number[], right: number[]): number[] => {
  const newArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      newArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      newArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return newArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};
