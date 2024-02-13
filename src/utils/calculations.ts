import { Actions } from "../data/buttons";
import { calculatorProps } from "../types/types_global";
import { replaceLast } from "./utils";

export function isNumberAction(prop_hnd: calculatorProps){
	if(prop_hnd.stacks.calculationStack.length === 1){
		const res = prop_hnd.stacks.calculationStack.pop();
		console.log(res)
		if(res?.text !== "0" && res !== undefined){
			prop_hnd.stacks.calculationStack.push(res);
		}else{
			prop_hnd.displayText = "";
		}
	}
	prop_hnd.setDisplay(prop_hnd.displayText + prop_hnd.id);
	prop_hnd.stacks.calculationStack.push({action: prop_hnd.action, text: prop_hnd.id})
	prop_hnd.stacks.setCallStack(prop_hnd.stacks.calculationStack);
}


export function isOperatorAction(prop_hnd: calculatorProps){
	const res = prop_hnd.stacks.calculationStack.pop();
	let shouldReplace = true;
	if(res?.action !== Actions.OP && res?.action !== Actions.DOT || 
		res?.action === Actions.OP && prop_hnd.id.trim() === "-" && res.text.trim() !== "+" ||
		res?.action === Actions.OP && prop_hnd.id.trim() === "+" && res.text.trim() !== "-"){
		if(res !== undefined){
			shouldReplace = false;
			prop_hnd.stacks.calculationStack.push(res); 
		} 
	}

	if(res !== undefined &&  shouldReplace){
		console.log(replaceLast(prop_hnd.displayText, res.text, prop_hnd.id));
		prop_hnd.displayText = replaceLast(prop_hnd.displayText, res.text, prop_hnd.id);
	}else{
		prop_hnd.displayText += prop_hnd.id;
	}
	prop_hnd.setDisplay(prop_hnd.displayText);
	prop_hnd.stacks.calculationStack.push({action: prop_hnd.action, text: prop_hnd.id})
}