import { useState, useEffect, useRef } from "react";
import bubbleSort from "./bubbleSort";
import selectionSort from "./selectionSort";
import mergeSort from "./mergeSort";

const makeNewArray = () => {
  const newArray = [];
  for (let i = 0; i < 100; i++) {
    newArray.push(randomIntFromIntervals(5, 500));
  }
  return newArray;
};

const randomIntFromIntervals = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Sorting_visualizer = () => {
  const [randomArray, setRandomArray] = useState([0]);
  const [isDisabled, setIsDisabled] = useState(false);
  const arrayContainerRef = useRef<HTMLDivElement>(null);

  const handleSelectionSort = (array: number[]) => {
    setIsDisabled(true);
    const animations = selectionSort(array);
    const array_bars = arrayContainerRef.current!.children;

    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        const barToSwap = array_bars[animations[i][0]] as HTMLElement;
        const barOne = array_bars[animations[i][1]] as HTMLElement;
        const barTwo = array_bars[animations[i][2]] as HTMLElement;
        const barOneHeigth = parseInt(barOne.style.height);
        const barToSwapHeigth = parseInt(barToSwap.style.height);
        if (!animations[i][3]) {
          barOne.style.backgroundColor = "yellow";
          barTwo.style.backgroundColor = "yellow";
        }
        setTimeout(() => {
          barOne.style.backgroundColor = "turquoise";
          barTwo.style.backgroundColor = "turquoise";

          if (animations[i][3] && barOneHeigth < barToSwapHeigth) {
            barOne.style.height = `${barToSwapHeigth}px`;
            barToSwap.style.height = `${barOneHeigth}px`;
          }
        }, 5);
      }, i * 10);

      if (i == animations.length - 1) {
        setTimeout(
          () => {
            setIsDisabled(false);
          },
          i * 10 + 10,
        );
      }
    }
  };

  const handleBubbleSort = (array: number[]) => {
    setIsDisabled(true);
    const animations = bubbleSort(array);
    const array_bars = arrayContainerRef.current!.children;
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        const barOne = array_bars[animations[i][0]] as HTMLElement;
        const barTwo = array_bars[animations[i][1]] as HTMLElement;
        const barOneHeigth = parseInt(barOne.style.height);
        const barTwoHeigth = parseInt(barTwo.style.height);
        barOne.style.backgroundColor = "yellow";
        barTwo.style.backgroundColor = "yellow";

        if (barOneHeigth > barTwoHeigth) {
          const temp = barOneHeigth;
          barOne.style.height = `${barTwoHeigth}px`;
          barTwo.style.height = `${temp}px`;
          barOne.style.backgroundColor = "red";
          barTwo.style.backgroundColor = "red";
        }

        setTimeout(() => {
          barOne.style.backgroundColor = "turquoise";
          barTwo.style.backgroundColor = "turquoise";
        }, 5);
      }, i * 10);

      if (i == animations.length - 1) {
        setTimeout(
          () => {
            setIsDisabled(false);
          },
          i * 10 + 10,
        );
      }
    }
  };

  const handleMergeSort = (array: number[]) => {
    setIsDisabled(true);
    const { animations } = mergeSort(array);
    const array_bars = arrayContainerRef.current!.children;

    for (let i = 0; i < animations.length; i++) {
      const isComparison = animations[i].length === 2; // Check if it's a comparison or an overwrite
      const [index1, index2OrValue] = animations[i];

      setTimeout(() => {
        if (isComparison) {
          // Highlight the bars being compared
          const barOne = array_bars[index1] as HTMLElement;
          const barTwo = array_bars[index2OrValue] as HTMLElement;

          barOne.style.backgroundColor = "yellow";
          barTwo.style.backgroundColor = "yellow";

          setTimeout(() => {
            barOne.style.backgroundColor = "turquoise";
            barTwo.style.backgroundColor = "turquoise";
          }, 5);
        } else {
          // Overwrite the height of the bar at index1
          const bar = array_bars[index1] as HTMLElement;
          bar.style.height = `${index2OrValue * 10}px`;
          bar.style.backgroundColor = "red";

          setTimeout(() => {
            bar.style.backgroundColor = "turquoise";
          }, 5);
        }
      }, i * 10);

      if (i === animations.length - 1) {
        setTimeout(
          () => {
            setIsDisabled(false);
          },
          i * 10 + 10,
        );
      }
    }
  };

  useEffect(() => {
    setRandomArray(makeNewArray());
  }, []);

  return (
    <>
      <div className="array-container" ref={arrayContainerRef}>
        {randomArray.map((value, index) => {
          return (
            <div
              key={index}
              className="array-bar"
              style={{ height: `${value}px` }}
            />
          );
        })}
      </div>
      <button
        onClick={() => {
          setRandomArray(makeNewArray());
        }}
        disabled={isDisabled}
      >
        Generate new array
      </button>
      <button
        onClick={() => {
          setIsDisabled(true);
          handleBubbleSort(randomArray);
        }}
        disabled={isDisabled}
      >
        Bubble sort
      </button>
      <button
        onClick={() => {
          setIsDisabled(true);
          handleSelectionSort(randomArray);
        }}
        disabled={isDisabled}
      >
        Selection sort
      </button>
      <button
        onClick={() => {
          setIsDisabled(true);
          handleMergeSort(randomArray);
        }}
        disabled={isDisabled}
      >
        Merge sort
      </button>
    </>
  );
};

export default Sorting_visualizer;
