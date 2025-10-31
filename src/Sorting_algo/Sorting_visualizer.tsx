import { useState, useEffect, useRef } from "react";
import Button from "../components/Button";
import { makeNewArray } from "../utils/utils";
import { useSortHandlers } from "../handlers/useSortHandlers";

const Sorting_visualizer = () => {
  const [randomArray, setRandomArray] = useState([0]);
  const [arrayLength, setArrayLength] = useState(100);
  const [arrayLenghtInput, setArrayLengthInput] = useState("100");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const arrayContainerRef = useRef<HTMLDivElement>(null);

  const {
    handleBubbleSort,
    handleCycleSort,
    handleInsertionSort,
    handleMergeSort,
    handleQuickSort,
    handleSelectionSort,
  } = useSortHandlers(arrayContainerRef, setIsDisabled, setIsSorted);

  useEffect(() => {
    setRandomArray(makeNewArray(arrayLength));
  }, [arrayLength]);

  const resetBars = () => {
    const bars = arrayContainerRef.current?.children;
    if (!bars) return;

    randomArray.forEach((value, index) => {
      (bars[index] as HTMLElement).style.height = `${value}px`;
    });

    setIsAnimating(false);
    setIsSorted(false);
  };

  return (
    <>
      <div className="array-wrapper">
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
      </div>
      <Button label="Reset" onClick={() => resetBars()} disabled={!isSorted} />
      <Button
        label="Generate new array"
        onClick={() => {
          setRandomArray(makeNewArray(arrayLength));
          setIsAnimating(false);
          setIsSorted(false);
        }}
        disabled={isDisabled}
      />
      <input
        type="number"
        min={20}
        max={500}
        value={arrayLength}
        onChange={(e) => {
          setArrayLengthInput(e.target.value);
          setArrayLength(Number(e.target.value));
        }}
        onBlur={() => {
          const value = Number(arrayLenghtInput);
          if (isNaN(value) || value < 20) setArrayLength(20);
          else if (value > 500) setArrayLength(500);
          else setArrayLength(value);
        }}
        disabled={isAnimating || isSorted}
      />

      <Button
        label="Bubble Sort"
        onClick={() => {
          setIsAnimating(true);
          handleBubbleSort(randomArray);
        }}
        disabled={isAnimating || isSorted}
      />
      <Button
        label="Selection Sort"
        onClick={() => {
          setIsAnimating(true);
          handleSelectionSort(randomArray);
        }}
        disabled={isAnimating || isSorted}
      />
      <Button
        label="Insertion Sort"
        onClick={() => {
          setIsAnimating(true);
          handleInsertionSort(randomArray);
        }}
        disabled={isAnimating || isSorted}
      />
      <Button
        label="Cycle Sort"
        onClick={() => {
          setIsAnimating(true);
          handleCycleSort(randomArray);
        }}
        disabled={isAnimating || isSorted}
      />
      <Button
        label="Quick Sort"
        onClick={() => {
          setIsAnimating(true);
          handleQuickSort(randomArray);
        }}
        disabled={isAnimating || isSorted}
      />
      <Button
        label="Merge Sort"
        onClick={() => {
          setIsAnimating(true);
          handleMergeSort(randomArray);
        }}
        disabled={isAnimating || isSorted}
      />
    </>
  );
};

export default Sorting_visualizer;
