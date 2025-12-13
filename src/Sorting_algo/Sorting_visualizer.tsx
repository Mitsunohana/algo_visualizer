import { useState, useEffect, useRef } from "react";
import Button from "../components/Button";
import { makeNewArray } from "../utils/utils";
import { useSortHandlers } from "../handlers/useSortHandlers";
import SortCode from "../components/SortCode";

const Sorting_visualizer = () => {
  const [randomArray, setRandomArray] = useState([0]);
  const [displayName, setDisplayName] = useState("");
  const [language, setLanguage] = useState("Javascript");
  const [speed, setSpeed] = useState(3);
  const [arrayLength, setArrayLength] = useState(50);
  const [arrayLenghtInput, setArrayLengthInput] = useState("50");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [barValue, setBarValue] = useState(500);
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
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setBarValue(250);
      } else {
        setBarValue(500);
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    setRandomArray(makeNewArray(arrayLength, barValue));
  }, [arrayLength, barValue]);

  const resetBars = () => {
    const bars = arrayContainerRef.current?.children;
    if (!bars) return;

    randomArray.forEach((value, index) => {
      (bars[index] as HTMLElement).style.height = `${value}px`;
    });

    setIsAnimating(false);
    setIsSorted(false);
  };

  const quadraticSortsTime = (
    <div className="time-complexity">
      <div className="bold">Best Case</div>
      {(displayName === "Bubble Sort" || displayName === "Insertion Sort") && (
        <div>O(n)</div>
      )}
      {(displayName === "Selection Sort" || displayName === "Cycle Sort") && (
        <div>O(n^2)</div>
      )}

      <div className="bold">Average Case</div>
      <div>O(n^2)</div>
      <div className="bold">Worst CAse</div>
      <div>O(n^2)</div>
    </div>
  );

  const logLinearSortsTime = (
    <div className="time-complexity">
      <div className="bold">Best Case</div>
      <div>O(n log n)</div>
      <div className="bold">Average Case</div>
      <div>O(n log n)</div>
      <div className="bold">Worst CAse</div>
      {displayName === "Merge Sort" && <div>O(n log n)</div>}
      {displayName === "Quick Sort" && (
        <>
          <div>O(n^2) </div>
          <div>if pivots are chosen poorly.</div>
        </>
      )}
    </div>
  );

  return (
    <>
      <div className="main-container">
        <div className="buttons-container">
          <div className="buttons-container-inner-div">
            <label style={{ fontWeight: "bold", marginLeft: "20px" }}>
              Controls:
            </label>
            <div className="controls">
              <Button
                label="Generate new array"
                onClick={() => {
                  setDisplayName("");
                  setRandomArray(makeNewArray(arrayLength, barValue));
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
                <label style={{ fontSize: 12 }}>Array Length</label>
                <input
                  type="number"
                  min={10}
                  max={200}
                  value={arrayLength}
                  onChange={(e) => {
                    setArrayLengthInput(e.target.value);
                    setArrayLength(Number(e.target.value));
                  }}
                  onBlur={() => {
                    const value = Number(arrayLenghtInput);
                    if (isNaN(value) || value < 5) setArrayLength(5);
                    else if (value > 200) setArrayLength(200);
                    else setArrayLength(value);
                  }}
                  disabled={isAnimating || isSorted}
                />
              </div>
              <input
                type="range"
                max={5}
                min={1}
                list="speed-markers"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                disabled={isDisabled}
              ></input>
              <label style={{ fontSize: 12 }}>Speed</label>

              <datalist id="speed-markers">
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
                <option value="5"></option>
              </datalist>
            </div>
            <hr />
            <label
              className="sorting-algorithms-label"
              style={{ fontWeight: "bold", marginLeft: "20px" }}
            >
              Sorting Algorithms:
            </label>
            <div className="sorting-algorithms">
              <Button
                label="Bubble Sort"
                onClick={() => {
                  setDisplayName("Bubble Sort");
                  setIsAnimating(true);
                  handleBubbleSort(randomArray);
                }}
                disabled={isAnimating || isSorted}
                activeSort={displayName}
              />
              <Button
                label="Selection Sort"
                onClick={() => {
                  setDisplayName("Selection Sort");
                  setIsAnimating(true);
                  handleSelectionSort(randomArray);
                }}
                disabled={isAnimating || isSorted}
                activeSort={displayName}
              />
              <Button
                label="Insertion Sort"
                onClick={() => {
                  setDisplayName("Insertion Sort");
                  setIsAnimating(true);
                  handleInsertionSort(randomArray);
                }}
                disabled={isAnimating || isSorted}
                activeSort={displayName}
              />
              <Button
                label="Cycle Sort"
                onClick={() => {
                  setDisplayName("Cycle Sort");
                  setIsAnimating(true);
                  handleCycleSort(randomArray);
                }}
                disabled={isAnimating || isSorted}
                activeSort={displayName}
              />
              <Button
                label="Quick Sort"
                onClick={() => {
                  setDisplayName("Quick Sort");
                  setIsAnimating(true);
                  handleQuickSort(randomArray);
                }}
                disabled={isAnimating || isSorted}
                activeSort={displayName}
              />
              <Button
                label="Merge Sort"
                onClick={() => {
                  setDisplayName("Merge Sort");
                  setIsAnimating(true);
                  handleMergeSort(randomArray);
                }}
                disabled={isAnimating || isSorted}
                activeSort={displayName}
              />
            </div>
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
        {/* TODO: Make the text - Best Case, Average Casce, Worst Case permanently display on screen */}
        <div className="complexity-div">
          <div className="time">
            <div style={{ fontWeight: "bold" }}>Time Complexity</div>
            {(displayName === "Bubble Sort" ||
              displayName === "Selection Sort" ||
              displayName === "Insertion Sort" ||
              displayName === "Cycle Sort") &&
              quadraticSortsTime}
            {(displayName === "Merge Sort" || displayName === "Quick Sort") &&
              logLinearSortsTime}
          </div>
          <hr />
          <div className="space">
            <div style={{ fontWeight: "bold" }}>Space Complexity</div>
            <div className="space-complexity">
              {(displayName === "Bubble Sort" ||
                displayName === "Selection Sort" ||
                displayName === "Insertion Sort" ||
                displayName === "Cycle Sort") && <div>O(1)</div>}
              {displayName === "Merge Sort" && <div>O(n)</div>}
              {displayName === "Quick Sort" && (
                <>
                  <div className="bold">Average Case</div>
                  <div>O(log n)</div>
                  <div className="bold">Worst Case</div>
                  <div>O(n)</div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="code-div">
          <div className="code-box">
            <div className="code-box-tab">
              {/* TODO: Change the language text to a logo */}
              <div className="code-box-tab-options">
                <button
                  className={
                    language === "Javascript"
                      ? "active-code-tab-btn"
                      : "code-tab-btn"
                  }
                  onClick={() => {
                    setLanguage("Javascript");
                  }}
                >
                  JS
                </button>
              </div>
              <div className="code-box-tab-options">
                <button
                  className={
                    language === "Python"
                      ? "active-code-tab-btn"
                      : "code-tab-btn"
                  }
                  onClick={() => {
                    setLanguage("Python");
                  }}
                >
                  Python
                </button>
              </div>
              <div className="code-box-tab-options">
                <button
                  className={
                    language === "Java" ? "active-code-tab-btn" : "code-tab-btn"
                  }
                  onClick={() => {
                    setLanguage("Java");
                  }}
                >
                  Java
                </button>
              </div>
              <div className="code-box-tab-options">
                <button
                  className={
                    language === "C" ? "active-code-tab-btn" : "code-tab-btn"
                  }
                  onClick={() => {
                    setLanguage("C");
                  }}
                >
                  C
                </button>
              </div>
              <div className="code-box-tab-options">
                <button
                  className={
                    language === "C#" ? "active-code-tab-btn" : "code-tab-btn"
                  }
                  onClick={() => {
                    setLanguage("C#");
                  }}
                >
                  C#
                </button>
              </div>
              <div className="code-box-tab-options">
                <button
                  className={
                    language === "C++" ? "active-code-tab-btn" : "code-tab-btn"
                  }
                  onClick={() => {
                    setLanguage("C++");
                  }}
                >
                  C++
                </button>
              </div>
            </div>
            <div className="code-box-codes">
              <SortCode algo={displayName} language={language} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sorting_visualizer;
