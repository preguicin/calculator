import { Actions } from "../data/buttons";
import { calculationData } from "../types/types_global";

export function evaluateCalculus(arr: calculationData[]): boolean{~
	console.log(arr)
	let arrCopy: calculationData[]  = [...arr];
	let operationArr: number[] = [];

	while (arrCopy.length > 0){
		let data = arrCopy.pop();
		if(data?.action === Actions.NONE){
			return false
		}
		if(data?.action === Actions.NUMBER){
			let isFloat = false;
			let numberConcat: string = "";
			numberConcat = data?.text;


			while(true){
				let result = arrCopy.pop();
				if(result?.action !== Actions.NUMBER && result?.action !== Actions.DOT){
					break;
				}
				if(result?.action === Actions.DOT){
					isFloat = true;
				}
				numberConcat += result?.text;
			}
			console.log(numberConcat)
			if(!isFloat){
				operationArr.push(parseInt(numberConcat));
			}else{
				operationArr.push(parseFloat(numberConcat));

			}
		}
		if(data?.action === Actions.OP){
			let temp = data.text.trim();
			switch(temp){
				case "*": {
					break;		
				}
				case "+": {
					break;		
				}
				case "/": {
					break;		
				}
				case "%": {
					break;		
				}
				case "-": {
					break;		
				}
			}
		}

	}
	return false;
}