import bubbleSort from "../Sorting_algo/bubbleSort";
import selectionSort from "../Sorting_algo/selectionSort";
import mergeSort from "../Sorting_algo/mergeSort";
import insertionSort from "../Sorting_algo/insertionSort";
import cycleSort from "../Sorting_algo/cycleSort";
import quickSort from "../Sorting_algo/quickSort";
import { delay } from "../utils/utils";

const ANIMATION_SPEED = 10;

export const useSortHandlers = (
  arrayContainerRef: React.RefObject<HTMLDivElement>,
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>,
  setIsSorted: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const handleBubbleSort = async (array: number[]) => {
    setIsDisabled(true);
    const animations = bubbleSort(array);
    const array_bars = arrayContainerRef.current!.children;

    for (let i = 0; i < animations.length; i++) {
      const barOne = array_bars[animations[i][0]] as HTMLElement;
      const barTwo = array_bars[animations[i][1]] as HTMLElement;
      const barOneHeigth = parseInt(barOne.style.height);
      const barTwoHeigth = parseInt(barTwo.style.height);
      barOne.style.backgroundColor = "yellow";
      barTwo.style.backgroundColor = "yellow";

      await delay(ANIMATION_SPEED);

      if (barOneHeigth > barTwoHeigth) {
        const temp = barOneHeigth;
        barOne.style.height = `${barTwoHeigth}px`;
        barTwo.style.height = `${temp}px`;
        barOne.style.backgroundColor = "red";
        barTwo.style.backgroundColor = "red";
      }

      await delay(ANIMATION_SPEED);

      barOne.style.backgroundColor = "gray";
      barTwo.style.backgroundColor = "gray";
    }

    setIsSorted(true);
    setIsDisabled(false);
  };

  const handleSelectionSort = async (array: number[]) => {
    setIsDisabled(true);
    const animations = selectionSort(array);
    const array_bars = arrayContainerRef.current!.children;

    for (let i = 0; i < animations.length; i++) {
      const barToSwap = array_bars[animations[i][0]] as HTMLElement;
      const barOne = array_bars[animations[i][1]] as HTMLElement;
      const barTwo = array_bars[animations[i][2]] as HTMLElement;
      const barOneHeigth = parseInt(barOne.style.height);
      const barToSwapHeigth = parseInt(barToSwap.style.height);
      if (!animations[i][3]) {
        barOne.style.backgroundColor = "yellow";
        barTwo.style.backgroundColor = "yellow";
      }
      await delay(ANIMATION_SPEED / 2);

      barOne.style.backgroundColor = "gray";
      barTwo.style.backgroundColor = "gray";
      await delay(ANIMATION_SPEED / 2);

      if (animations[i][3] && barOneHeigth < barToSwapHeigth) {
        barOne.style.height = `${barToSwapHeigth}px`;
        barToSwap.style.height = `${barOneHeigth}px`;
      }
    }

    setIsDisabled(false);
    setIsSorted(true);
  };

  const handleInsertionSort = async (array: number[]) => {
    setIsDisabled(true);
    const animations = insertionSort(array);
    const array_bars = arrayContainerRef.current!.children;

    for (let i = 0; i < animations.length; i++) {
      const [index1, index2OrValue, action] = animations[i];

      if (action === 0) {
        const barOne = array_bars[index1] as HTMLElement;
        const barTwo = array_bars[index2OrValue] as HTMLElement;
        barOne.style.backgroundColor = "yellow";
        barTwo.style.backgroundColor = "yellow";

        await delay(ANIMATION_SPEED);

        barOne.style.backgroundColor = "gray";
        barTwo.style.backgroundColor = "gray";
      } else if (action === 1) {
        const bar = array_bars[index1] as HTMLElement;
        bar.style.height = `${index2OrValue}px`;
        bar.style.backgroundColor = "red";

        await delay(ANIMATION_SPEED);

        bar.style.backgroundColor = "gray";
      }

      await delay(ANIMATION_SPEED);
    }

    setIsSorted(true);
    setIsDisabled(false);
  };

  const handleCycleSort = async (array: number[]) => {
    setIsDisabled(true);
    const animations = cycleSort(array);
    const array_bars = arrayContainerRef.current!.children;

    for (let i = 0; i < animations.length; i++) {
      const barOne = array_bars[animations[i][0]] as HTMLElement;
      const barTwo = array_bars[animations[i][1]] as HTMLElement;
      const swap = animations[i][2];
      const barOneHeigth = parseInt(barOne.style.height);
      const barTwoHeigth = parseInt(barTwo.style.height);
      barOne.style.backgroundColor = "yellow";
      barTwo.style.backgroundColor = "yellow";

      await delay(ANIMATION_SPEED);

      if (swap) {
        const temp = barOneHeigth;
        barOne.style.height = `${barTwoHeigth}px`;
        barTwo.style.height = `${temp}px`;
      }

      await delay(ANIMATION_SPEED);

      barOne.style.backgroundColor = "gray";
      barTwo.style.backgroundColor = "gray";

      await delay(ANIMATION_SPEED);
    }

    setIsSorted(true);
    setIsDisabled(false);
  };

  const handleQuickSort = async (array: number[]) => {
    setIsDisabled(true);
    const animations = quickSort(array);
    const array_bars = arrayContainerRef.current!.children;

    for (let i = 0; i < animations.length; i++) {
      const barOne = array_bars[animations[i][0]] as HTMLElement;
      const barTwo = array_bars[animations[i][1]] as HTMLElement;
      const barOneHeigth = parseInt(barOne.style.height);
      const barTwoHeigth = parseInt(barTwo.style.height);

      if (animations[i][2] === 3) {
        barOne.style.backgroundColor = "yellow";
      } else {
        barOne.style.backgroundColor = "red";
      }
      barTwo.style.backgroundColor = "yellow";
      await delay(ANIMATION_SPEED);

      if (animations[i][2] === 1) {
        barOne.style.height = `${barTwoHeigth}px`;
        barTwo.style.height = `${barOneHeigth}px`;
      }

      barOne.style.backgroundColor = "gray";
      barTwo.style.backgroundColor = "gray";

      await delay(ANIMATION_SPEED);
    }
    setIsSorted(true);
    setIsDisabled(false);
  };

  const handleMergeSort = async (array: number[]) => {
    setIsDisabled(true);
    const animations = mergeSort(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const arrayBar1 = arrayBars[barOneIdx] as HTMLElement;
        const arrayBar2 = arrayBars[barTwoIdx] as HTMLElement;

        const barOneStyle = arrayBar1.style;
        const barTwoStyle = arrayBar2.style;
        const color = i % 3 === 0 ? "yellow" : "gray";

        await delay(ANIMATION_SPEED);

        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      } else {
        await delay(ANIMATION_SPEED);

        const [barOneIdx, newHeight] = animations[i];
        const arrayBar1 = arrayBars[barOneIdx] as HTMLElement;
        const barOneStyle = arrayBar1.style;
        barOneStyle.height = `${newHeight}px`;
      }
      await delay(ANIMATION_SPEED);
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
