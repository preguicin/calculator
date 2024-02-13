import { Dispatch, SetStateAction } from "react";
import { Actions, ButtonData } from "../data/buttons";
import { stacks } from "../types/types_global";
import { evaluateCalculus, replaceLast } from "../utils/utils";
import { isNumberAction } from "../utils/calculations";



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
	
		const prop_hnd = {
			action: props.action,
			id: props.id,	
			displayText: props.displayText,
			setDisplay: props.setDisplay,
			stacks: props.stacks
		} 

		if(props.action === Actions.NUMBER){
			isNumberAction(prop_hnd);
		}
		else if(props.action === Actions.OP){
			
		}
		else if(props.action === Actions.EQ){
			evaluateCalculus(props.stacks.calculationStack)
			console.log("calc")
		}
		else if(props.action === Actions.CLEAN){
			let curText: string = "";

			stacks.calculationStack.pop();
			if(stacks.calculationStack.length === 0){
				stacks.calculationStack.push({action: Actions.NUMBER, text: "0"})
			}
			
			stacks.setCallStack(stacks.calculationStack);

			for(const el of stacks.calculationStack){
				curText += el.text;
			}
			
			setDisplay(curText);
		}
		return undefined;
	}
}



export default Button;