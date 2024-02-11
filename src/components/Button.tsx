import { Dispatch, SetStateAction } from "react";
import { Actions, ButtonData } from "../data/buttons";
import { stacks } from "../types/types_global";
import { evaluateCalculus, replaceLast } from "../utils/utils";



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

		const action = props.action;
		const id = props.id;
		let displayText = props.displayText;
		const setDisplay = props.setDisplay;
		const stacks = props.stacks;

		if(action === Actions.NUMBER){
			console.log("entered stack")
			if(stacks.calculationStack.length === 1){
				const res = stacks.calculationStack.pop();
				console.log(res)
				if(res?.text !== "0" && res !== undefined){
					stacks.calculationStack.push(res);
				}else{
					displayText = "";
				}
			}
			setDisplay(displayText + id);
			stacks.calculationStack.push({action, text: id})
			stacks.setCallStack(stacks.calculationStack);
		}
		else if(action === Actions.OP){
			const res = stacks.calculationStack.pop();
			let shouldReplace = true;
			if(res?.action !== Actions.OP && res?.action !== Actions.DOT || 
				res?.action === Actions.OP && id.trim() === "-" && res.text.trim() !== "+" ||
				res?.action === Actions.OP && id.trim() === "+" && res.text.trim() !== "-"){
				if(res !== undefined){
					shouldReplace = false;
					stacks.calculationStack.push(res); 
				} 
			}

			if(res !== undefined &&  shouldReplace){
				console.log(replaceLast(displayText, res.text, id));
				displayText = replaceLast(displayText, res.text, id);
			}else{
				displayText += id;
			}
			setDisplay(displayText);
			stacks.calculationStack.push({action,text:id})
		}
		else if(action === Actions.EQ){
			evaluateCalculus(stacks.calculationStack)
			console.log("calc")
		}
		else if(action === Actions.CLEAN){
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