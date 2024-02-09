import { Dispatch, SetStateAction } from "react";
import { Actions, ButtonData } from "../data/buttons";
import { calculationData, stacks } from "../types/types_global";
import { evaluateCalculus } from "../utils/utils";



type ButtonProps = ButtonData & {
	stacks: stacks,
	displayText: string,
	setDisplay: Dispatch<SetStateAction<string>>;
}

const Button: React.FC<ButtonProps> = function (props: ButtonProps){
	return(
		<>
		{
			props.action === "EQUALS" ? 
			<button className="bg-blue-600 text-white rounded-2xl text-center w-20 m-3 hover:bg-blue-500 h-10" onClick={on_click}>
				{props.id}
			</button> 
			: 
			<button className="bg-slate-600 text-white rounded-2xl text-center w-20 m-3 hover:bg-slate-400 h-10" onClick={on_click}>
				{props.id}
			</button>
		}
		</>
	);
	function on_click(): undefined{

		let action = props.action;
		let id = props.id;
		let displayText = props.displayText;
		let setDisplay = props.setDisplay;
		let stacks = props.stacks;

		if(action !== Actions.CLEAN && action !== Actions.EQ){
			setDisplay(displayText + id);
			console.log("entered stack")
			stacks.calculationStack.push({action, text: id})
			stacks.setCallStack(stacks.calculationStack);
		}
		else if(action === Actions.EQ){
			evaluateCalculus(stacks.calculationStack)
			console.log("calc")
		}
		else if(action === Actions.CLEAN){
			console.log("clean stack")
			stacks.calculationStack = [];
			stacks.setCallStack(stacks.calculationStack);
			setDisplay("0");
		}
		return undefined;
	}
}



export default Button;