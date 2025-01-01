const selectionSort = (array: number[]) => {
  const copiedArray = [...array];
  const animations = [];
  for (let i = 0; i < copiedArray.length - 1; i++) {
    let smallestNumberIndex = i;

    for (let j = i + 1; j < copiedArray.length; j++) {
      animations.push([i, smallestNumberIndex, j, 0]);

      if (copiedArray[smallestNumberIndex] > copiedArray[j]) {
        smallestNumberIndex = j;
      }
    }

    if (i !== smallestNumberIndex) {
      [copiedArray[i], copiedArray[smallestNumberIndex]] = [
        copiedArray[smallestNumberIndex],
        copiedArray[i],
      ];
      animations.push([i, smallestNumberIndex, 0, 1]);
    }
  }

  return animations;
};

export default selectionSort;
