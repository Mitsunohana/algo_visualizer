function cycleSort(array: number[]) {
  let writes = 0; // Count the number of writes

  // Loop through the arrayay
  for (let cycleStart = 0; cycleStart < array.length - 1; cycleStart++) {
    let item = array[cycleStart]; // Element to place in its correct position

    // Find the position where the item belongs
    let pos = cycleStart;
    for (let i = cycleStart + 1; i < array.length; i++) {
      if (array[i] < item) {
        pos++;
      }
    }

    // If the item is already in the correct position, continue
    if (pos === cycleStart) continue;

    // Skip duplicates
    while (item === array[pos]) {
      pos++;
    }

    // Swap the item with the correct position
    if (pos !== cycleStart) {
      [array[pos], item] = [item, array[pos]];
      writes++;
    }

    // Rotate the rest of the cycle
    while (pos !== cycleStart) {
      pos = cycleStart;

      // Find the new position for the current item
      for (let i = cycleStart + 1; i < array.length; i++) {
        if (array[i] < item) {
          pos++;
        }
      }

      // Skip duplicates
      while (item === array[pos]) {
        pos++;
      }

      // Swap again
      if (item !== array[pos]) {
        [array[pos], item] = [item, array[pos]];
        writes++;
      }
    }
  }

  return array;
}

export default cycleSort;
