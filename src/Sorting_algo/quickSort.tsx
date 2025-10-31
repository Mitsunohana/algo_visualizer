const quickSort = (array: number[]) => {
  const animation: number[][] = [];
  const copiedArray = [...array];

  const partition = (arr: number[], low: number, high: number): number => {
    const pivotIndex = Math.floor((low + high) / 2);
    const pivot = arr[pivotIndex];
    let i = low - 1;
    let j = high + 1;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      do {
        i++;
        animation.push([pivotIndex, i, 0]);
      } while (arr[i] < pivot);

      do {
        j--;
        animation.push([pivotIndex, j, 0]);
      } while (arr[j] > pivot);

      if (i >= j) {
        animation.push([i, j, 0]);
        return j;
      }

      animation.push([i, j, 1]);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  const recursionCall = (arr: number[], low = 0, high = arr.length - 1) => {
    if (low < high) {
      const partitionIndex = partition(arr, low, high);
      recursionCall(arr, low, partitionIndex);
      recursionCall(arr, partitionIndex + 1, high);
    }
  };

  recursionCall(copiedArray);
  return animation;
};

export default quickSort;
