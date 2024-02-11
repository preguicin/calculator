import { Actions } from "../data/buttons";
import { calculationData } from "../types/types_global";

export function evaluateCalculus(arr: calculationData[]): boolean{~
	console.log(arr)
	const arrCopy: calculationData[]  = [...arr];
	const operationArr: number[] = [];

	while (arrCopy.length > 0){
		const data = arrCopy.pop();
		if(data?.action === Actions.NONE){
			return false
		}
		if(data?.action === Actions.NUMBER){
			const true_statement: boolean = true;
			let isFloat = false;
			let numberConcat: string = "";
			numberConcat = data?.text;


			while(true_statement){
				const result = arrCopy.pop();
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
			const temp = data.text.trim();
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


export function replaceLast(text: string, replaceThis:string, replacedBy:string): string{
	let pos: number = 0;
	const charArr: string[] = [...text];
	let expression: string = "";

	for(let i = 0; i < charArr.length-1; i++){
		if(charArr[i] === replaceThis){
			pos = i;
		}
	}

	charArr[pos] = replacedBy;

	for(const char of charArr){
		expression += char;
	}

	return expression;
}