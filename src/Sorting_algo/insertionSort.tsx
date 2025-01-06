const insertionSort = (array: number[]) => {
  const copiedArray = [...array];
  const animations = [];

  for (let i = 1; i < copiedArray.length; i++) {
    const key = copiedArray[i];
    let j = i - 1;

    while (j >= 0 && copiedArray[j] > key) {
      animations.push([j, j + 1, 0]); // Compare j and j+1, 0 means compare
      animations.push([j + 1, copiedArray[j], 1]); // Overwrite j+1, 1 means overwrite
      copiedArray[j + 1] = copiedArray[j];
      j--;
    }

    animations.push([j + 1, key, 1]); // Place the key in its correct position
    copiedArray[j + 1] = key;
  }

  return animations;
};

export default insertionSort;
