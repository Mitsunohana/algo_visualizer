function cycleSort(array: number[]) {
  const copiedArray = [...array];
  const animations = [];
  // Loop through the arrayay
  for (let cycleStart = 0; cycleStart < copiedArray.length - 1; cycleStart++) {
    let item = copiedArray[cycleStart]; // Element to place in its correct position

    // Find the position where the item belongs
    let pos = cycleStart;
    for (let i = cycleStart + 1; i < copiedArray.length; i++) {
      animations.push([cycleStart, i, 0]);
      if (copiedArray[i] < item) {
        pos++;
      }
    }

    // If the item is already in the correct position, continue
    if (pos === cycleStart) continue;

    // Skip duplicates
    while (item === copiedArray[pos]) {
      pos++;
    }

    // Swap the item with the correct position
    if (pos !== cycleStart) {
      animations.push([cycleStart, pos, 1]);
      [copiedArray[pos], item] = [item, copiedArray[pos]];
    }

    // Rotate the rest of the cycle
    while (pos !== cycleStart) {
      pos = cycleStart;

      // Find the new position for the current item
      for (let i = cycleStart + 1; i < copiedArray.length; i++) {
        animations.push([cycleStart, i, 0]);
        if (copiedArray[i] < item) {
          pos++;
        }
      }

      // Skip duplicates
      while (item === copiedArray[pos]) {
        pos++;
      }

      // Swap again
      if (item !== copiedArray[pos]) {
        animations.push([cycleStart, pos, 1]);
        [copiedArray[pos], item] = [item, copiedArray[pos]];
      }
    }
  }

  return animations;
}

export default cycleSort;
