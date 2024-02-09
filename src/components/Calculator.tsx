import Button from "./Button";
import { buttonsValues } from "../data/buttons";
import { useState } from "react";
import Display from "./Display";
import { calculationData, historyData, stacks } from "../types/types_global";



const Calculator: React.FC = function(){
	const [displayText, setDisplayText] = useState("0");
	const [callStack, setCallStack] = useState<calculationData[]>([]);
	const [historyStack, setHistoryStack] = useState<historyData[]>([]);

	const stacks: stacks = {
		calculationStack: callStack,
		historyStack: historyStack,
		setHistoryStack,
		setCallStack,
	}

	return(
		<div className="grid grid-cols-4 w-[30em] bg-slate-700 mt-5">
				<Display setDisplayText={setDisplayText} displayText={displayText}></Display>
				{
					buttonsValues.map((val, index) => {
						return <Button key={index} displayText={displayText} setDisplay={setDisplayText} stacks={stacks} action={val.action} id={val.id}/>
					})
				}
		</div>
	);
}

export default Calculator;