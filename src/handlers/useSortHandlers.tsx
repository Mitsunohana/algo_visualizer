import bubbleSort from "../Sorting_algo/bubbleSort";
import selectionSort from "../Sorting_algo/selectionSort";
import mergeSort from "../Sorting_algo/mergeSort";
import insertionSort from "../Sorting_algo/insertionSort";
import cycleSort from "../Sorting_algo/cycleSort";
import quickSort from "../Sorting_algo/quickSort";
import { delay } from "../utils/utils";
import { ACTION } from "../utils/types";
import { playSound, sounds } from "../utils/audio";

export const useSortHandlers = (
  arrayContainerRef: React.RefObject<HTMLDivElement>,
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>,
  setIsSorted: React.Dispatch<React.SetStateAction<boolean>>,
  animationSpeed: number,
) => {
  switch (animationSpeed) {
    case 1:
      animationSpeed = 500;
      break;
    case 2:
      animationSpeed = 250;
      break;
    case 3:
      animationSpeed = 100;
      break;
    case 4:
      animationSpeed = 50;
      break;
    case 5:
      animationSpeed = 20;
      break;
  }

  const handleBubbleSort = async (array: number[]) => {
    setIsDisabled(true);
    const animations = bubbleSort(array);
    const arrayBars = arrayContainerRef.current!.children;

    for (let i = 0; i < animations.length; i++) {
      const barOne = arrayBars[animations[i][0]] as HTMLElement;
      const barTwo = arrayBars[animations[i][1]] as HTMLElement;
      const barOneHeigth = parseInt(barOne.style.height);
      const barTwoHeigth = parseInt(barTwo.style.height);
      barOne.style.backgroundColor = "yellow";
      barTwo.style.backgroundColor = "yellow";

      playSound(sounds.compare);
      await delay(animationSpeed);

      if (barOneHeigth > barTwoHeigth) {
        const temp = barOneHeigth;
        barOne.style.height = `${barTwoHeigth}px`;
        barTwo.style.height = `${temp}px`;
        barOne.style.backgroundColor = "red";
        barTwo.style.backgroundColor = "red";
        playSound(sounds.swap);
      }

      await delay(animationSpeed);

      barOne.style.backgroundColor = "rgb(3, 125, 125)";
      barTwo.style.backgroundColor = "rgb(3, 125, 125)";

      await delay(animationSpeed);
    }

    setIsSorted(true);
    setIsDisabled(false);
  };

  const handleSelectionSort = async (array: number[]) => {
    setIsDisabled(true);
    const animations = selectionSort(array);
    const arrayBars = arrayContainerRef.current!.children;

    for (let i = 0; i < animations.length; i++) {
      const barToSwap = arrayBars[animations[i][0]] as HTMLElement;
      const barOne = arrayBars[animations[i][1]] as HTMLElement;
      const barTwo = arrayBars[animations[i][2]] as HTMLElement;
      const action = animations[i][3];
      const barOneHeigth = parseInt(barOne.style.height);
      const barToSwapHeigth = parseInt(barToSwap.style.height);
      if (action === ACTION.COMPARE) {
        barOne.style.backgroundColor = "yellow";
        barTwo.style.backgroundColor = "yellow";
      }
      playSound(sounds.compare);
      await delay(animationSpeed);

      barOne.style.backgroundColor = "rgb(3, 125, 125)";
      barTwo.style.backgroundColor = "rgb(3, 125, 125)";

      if (action === ACTION.SWAP && barOneHeigth < barToSwapHeigth) {
        barOne.style.height = `${barToSwapHeigth}px`;
        barToSwap.style.height = `${barOneHeigth}px`;
        playSound(sounds.swap);
      }

      await delay(animationSpeed);
    }

    setIsDisabled(false);
    setIsSorted(true);
  };

  const handleInsertionSort = async (array: number[]) => {
    setIsDisabled(true);
    const animations = insertionSort(array);
    const arrayBars = arrayContainerRef.current!.children;

    for (let i = 0; i < animations.length; i++) {
      const [index1, index2OrValue, action] = animations[i];

      if (action === ACTION.COMPARE) {
        const barOne = arrayBars[index1] as HTMLElement;
        const barTwo = arrayBars[index2OrValue] as HTMLElement;
        barOne.style.backgroundColor = "yellow";
        barTwo.style.backgroundColor = "yellow";
        playSound(sounds.compare);
        await delay(animationSpeed);

        barOne.style.backgroundColor = "rgb(3, 125, 125)";
        barTwo.style.backgroundColor = "rgb(3, 125, 125)";
      } else if (action === ACTION.SWAP) {
        const barOne = arrayBars[index1] as HTMLElement;
        barOne.style.height = `${index2OrValue}px`;
        barOne.style.backgroundColor = "red";
        playSound(sounds.swap);
        await delay(animationSpeed);

        barOne.style.backgroundColor = "rgb(3, 125, 125)";
      }

      await delay(animationSpeed);
    }

    setIsSorted(true);
    setIsDisabled(false);
  };

  const handleCycleSort = async (array: number[]) => {
    setIsDisabled(true);
    const animations = cycleSort(array);
    const arrayBars = arrayContainerRef.current!.children;

    for (let i = 0; i < animations.length; i++) {
      const barOne = arrayBars[animations[i][0]] as HTMLElement;
      const barTwo = arrayBars[animations[i][1]] as HTMLElement;
      const action = animations[i][2];
      const barOneHeigth = parseInt(barOne.style.height);
      const barTwoHeigth = parseInt(barTwo.style.height);
      barOne.style.backgroundColor = "yellow";
      barTwo.style.backgroundColor = "yellow";
      playSound(sounds.compare);
      await delay(animationSpeed);

      if (action === ACTION.SWAP) {
        const temp = barOneHeigth;
        barOne.style.height = `${barTwoHeigth}px`;
        barTwo.style.height = `${temp}px`;
        playSound(sounds.swap);
      }

      await delay(animationSpeed);

      barOne.style.backgroundColor = "rgb(3, 125, 125)";
      barTwo.style.backgroundColor = "rgb(3, 125, 125)";

      await delay(animationSpeed);
    }

    setIsSorted(true);
    setIsDisabled(false);
  };

  const handleQuickSort = async (array: number[]) => {
    setIsDisabled(true);
    const animations = quickSort(array);
    const arrayBars = arrayContainerRef.current!.children;

    for (let i = 0; i < animations.length; i++) {
      const barOne = arrayBars[animations[i][0]] as HTMLElement;
      const barTwo = arrayBars[animations[i][1]] as HTMLElement;
      const action = animations[i][2];
      const barOneHeigth = parseInt(barOne.style.height);
      const barTwoHeigth = parseInt(barTwo.style.height);
      playSound(sounds.compare);
      if (action === ACTION.SWAP) {
        barOne.style.backgroundColor = "yellow";
        playSound(sounds.compare);
      } else {
        barOne.style.backgroundColor = "red";
      }
      barTwo.style.backgroundColor = "yellow";
      await delay(animationSpeed);

      if (action === ACTION.SWAP) {
        barOne.style.height = `${barTwoHeigth}px`;
        barTwo.style.height = `${barOneHeigth}px`;
        playSound(sounds.swap);
      }

      barOne.style.backgroundColor = "rgb(3, 125, 125)";
      barTwo.style.backgroundColor = "rgb(3, 125, 125)";

      await delay(animationSpeed);
    }
    setIsSorted(true);
    setIsDisabled(false);
  };

  const handleMergeSort = async (array: number[]) => {
    setIsDisabled(true);
    const animations = mergeSort(array);
    const arrayBars = arrayContainerRef.current!.children;
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const arrayBar1 = arrayBars[barOneIdx] as HTMLElement;
        const arrayBar2 = arrayBars[barTwoIdx] as HTMLElement;

        const barOneStyle = arrayBar1.style;
        const barTwoStyle = arrayBar2.style;
        const color = i % 3 === 0 ? "yellow" : "rgb(3, 125, 125)";
        playSound(sounds.compare);

        await delay(animationSpeed);

        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      } else {
        await delay(animationSpeed);

        const [barOneIdx, newHeight] = animations[i];
        const arrayBar1 = arrayBars[barOneIdx] as HTMLElement;
        const barOneStyle = arrayBar1.style;
        barOneStyle.height = `${newHeight}px`;
        playSound(sounds.swap);
      }
      await delay(animationSpeed);
    }
    setIsSorted(true);
    setIsDisabled(false);
  };

  return {
    handleBubbleSort,
    handleSelectionSort,
    handleInsertionSort,
    handleCycleSort,
    handleQuickSort,
    handleMergeSort,
  };
};
