import { useState, useEffect, useRef } from "react";
import Button from "../components/Button";
import { makeNewArray } from "../utils/utils";
import { useSortHandlers } from "../handlers/useSortHandlers";

const Sorting_visualizer = () => {
  const [randomArray, setRandomArray] = useState([0]);
  const [displayName, setDisplayName] = useState("");
  const [speed, setSpeed] = useState(4);
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
  } = useSortHandlers(arrayContainerRef, setIsDisabled, setIsSorted, speed);

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
      <div className="main-container">
        <div className="buttons-container">
          <div className="controls">
            <label>Controls:</label>
            <Button
              label="Generate new array"
              onClick={() => {
                setDisplayName("");
                setRandomArray(makeNewArray(arrayLength));
                setIsAnimating(false);
                setIsSorted(false);
              }}
              disabled={isDisabled}
            />
            <Button
              label="Reset Array"
              onClick={() => {
                setDisplayName("");
                resetBars();
              }}
              disabled={!isSorted}
            />

            <div className="array-length-input">
              <label style={{ fontSize: "12px" }}>Array Length</label>
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
            </div>
            <input
              type="range"
              max={7}
              min={1}
              list="speed-markers"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              disabled={isDisabled}
            ></input>
            <label style={{ fontSize: "12px" }}>Speed</label>

            <datalist id="speed-markers">
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
              <option value="4"></option>
              <option value="5"></option>
              <option value="6"></option>
              <option value="7"></option>
            </datalist>
          </div>
          <hr />
          <div className="sorting-algorithms">
            <label>Sort</label>

            <Button
              label="Bubble Sort"
              onClick={() => {
                setDisplayName("Bubble Sort");
                setIsAnimating(true);
                handleBubbleSort(randomArray);
              }}
              disabled={isAnimating || isSorted}
            />
            <Button
              label="Selection Sort"
              onClick={() => {
                setDisplayName("Selection Sort");
                setIsAnimating(true);
                handleSelectionSort(randomArray);
              }}
              disabled={isAnimating || isSorted}
            />
            <Button
              label="Insertion Sort"
              onClick={() => {
                setDisplayName("Insertion Sort");
                setIsAnimating(true);
                handleInsertionSort(randomArray);
              }}
              disabled={isAnimating || isSorted}
            />
            <Button
              label="Cycle Sort"
              onClick={() => {
                setDisplayName("Cycle Sort");
                setIsAnimating(true);
                handleCycleSort(randomArray);
              }}
              disabled={isAnimating || isSorted}
            />
            <Button
              label="Quick Sort"
              onClick={() => {
                setDisplayName("Quick Sort");
                setIsAnimating(true);
                handleQuickSort(randomArray);
              }}
              disabled={isAnimating || isSorted}
            />
            <Button
              label="Merge Sort"
              onClick={() => {
                setDisplayName("Merge Sort");
                setIsAnimating(true);
                handleMergeSort(randomArray);
              }}
              disabled={isAnimating || isSorted}
            />
          </div>
          <hr />
        </div>
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
          <div className="display-name">{displayName}</div>
        </div>

        <div className="complexity-div">TIME AND SPACE COMPLEXITY</div>
        <div className="code-div">CODE</div>
      </div>
    </>
  );
};

export default Sorting_visualizer;
