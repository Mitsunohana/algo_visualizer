import { BubbleCodeStringJS } from "./BubbleSort/BubbleCodeStringJS";
import { BubbleCodeStringPY } from "./BubbleSort/BubbleCodeStringPY";
import { BubbleCodeStringJAVA } from "./BubbleSort/BubbleCodeStringJAVA";
import { BubbleCodeStringC } from "./BubbleSort/BubbleCodeStringC";
import { BubbleCodeStringCPP } from "./BubbleSort/BubbleCodeStringCPP";
import { BubbleCodeStringCS } from "./BubbleSort/BubbleCodeStringCS";
import { SelectionCodeStringJS } from "./SelectionSort/SelectionCodeStringJS";
import { SelectionCodeStringPY } from "./SelectionSort/SelectionCodeStringPY";
import { SelectionCodeStringJAVA } from "./SelectionSort/SelectionCodeStringJAVA";
import { SelectionCodeStringC } from "./SelectionSort/SelectionCodeStringC";
import { SelectionCodeStringCPP } from "./SelectionSort/SelectionCodeStringCPP";
import { SelectionCodeStringCS } from "./SelectionSort/SelectionCodeStringCS";
import { InsertionCodeStringC } from "./InsertionSort/InsertionCodeStringC";
import { InsertionCodeStringCPP } from "./InsertionSort/InsertionCodeStringCpp";
import { InsertionCodeStringCS } from "./InsertionSort/InsertionCodeStringCS";
import { InsertionCodeStringJS } from "./InsertionSort/InsertionCodeStringJS";
import { InsertionCodeStringPY } from "./InsertionSort/InsertionCodeStringPY";
import { InsertionCodeStringJAVA } from "./InsertionSort/InsertionCodeStringJAVA";
import { CycleCodeStringJS } from "./CycleSort/CycleCodeStringJS";
import { CycleCodeStringPY } from "./CycleSort/CycleCodeStringPY";
import { CycleCodeStringJAVA } from "./CycleSort/CycleCodeStringJAVA";
import { CycleCodeStringC } from "./CycleSort/CycleCodeStringC";
import { CycleCodeStringCPP } from "./CycleSort/CycleCodeStringCPP";
import { CycleCodeStringCS } from "./CycleSort/CycleCodeStringCS";
import { MergeCodeStringJS } from "./MergeSort/MergeCodeStringJS"
import { MergeCodeStringPY } from "./MergeSort/MergeCodeStringPy";
import { MergeCodeStringJAVA } from "./MergeSort/MergeCodeStringJAVA"
import { MergeCodeStringC } from "./MergeSort/MergeCodeStringC";
import { MergeCodeStringCPP } from "./MergeSort/MergeCodeStringCPP";
import { MergeCodeStringCS } from "./MergeSort/MergeCodeStringCS";
 
interface SortCodeProps {
  algo: string;
  language: string;
}

const SortCode: React.FC<SortCodeProps> = ({ algo, language }) => {
  const components: Record<string, Record<string, JSX.Element>> = {
    BubbleSort: {
      Javascript: <BubbleCodeStringJS />,
      Python: <BubbleCodeStringPY />,
      Java: <BubbleCodeStringJAVA />,
      C: <BubbleCodeStringC />,
      CPP: <BubbleCodeStringCPP />,
      CS: <BubbleCodeStringCS />,
    },
    SelectionSort: {
      Javascript: <SelectionCodeStringJS />,
      Python: <SelectionCodeStringPY />,
      Java: <SelectionCodeStringJAVA />,
      C: <SelectionCodeStringC />,
      CPP: <SelectionCodeStringCPP />,
      CS: <SelectionCodeStringCS />,
    },
    InsertionSort: {
      Javascript: <InsertionCodeStringJS />,
      Python: <InsertionCodeStringPY />,
      Java: <InsertionCodeStringJAVA />,
      C: <InsertionCodeStringC />,
      CPP: <InsertionCodeStringCPP />,
      CS: <InsertionCodeStringCS />,
    },
    CycleSort: {
      Javascript: <CycleCodeStringJS />,
      Python: <CycleCodeStringPY />,
      Java: <CycleCodeStringJAVA />,
      C: <CycleCodeStringC />,
      CPP: <CycleCodeStringCPP />,
      CS: <CycleCodeStringCS />,
    },
    MergeSort: {
      Javascript: <MergeCodeStringJS />,
      Java: <MergeCodeStringJAVA />,
      Python: <MergeCodeStringPY />,
      C: <MergeCodeStringC />,
      CPP: <MergeCodeStringCPP />,
      CS: <MergeCodeStringCS />
    }
  };
  const algoMap = components[algo];
  const ComponentToRender = algoMap?.[language];

  if (!ComponentToRender) {
    return <></>;
  }

  return <pre>{ComponentToRender}</pre>;
};

export default SortCode;
