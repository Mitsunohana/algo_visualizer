export default function insertionSort(array: number[]) {
  const animations: number[][] = [];
  const copiedArray = [...array];
  for (let i = 1; i < copiedArray.length; i++) {
    const key = copiedArray[i];
    let j = i - 1;

    while (j >= 0 && copiedArray[j] > key) {
      animations.push([i, j]);
      copiedArray[j + 1] = copiedArray[j];
      j--;
    }

    copiedArray[j + 1] = key;
  }

  return animations;
}
