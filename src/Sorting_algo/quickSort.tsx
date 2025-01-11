const quickSort = (array: number[]) => {
  // Base case: arrays with 0 or 1 elements are already sorted
  const animations = [];
  if (array.length <= 1) {
    return array;
  }

  // Choose the pivot (here, we use the last element)
  const pivot = array[array.length - 1];
  const left = []; // Elements less than the pivot
  const right = []; // Elements greater than the pivot

  // Partition the array
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // Recursively sort the subarrays and combine them with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
};

export default quickSort;
