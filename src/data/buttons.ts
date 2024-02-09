export enum Actions {
	CLEAN = "",
	OP = "OPERATION",
	SEP = "SEPARATION",
	DOT = ".",
	EQ = "EQUALS",
	NONE = "NONE",
	NUMBER = "NUMBER",
}

export type ButtonData = {
	id: string,
	action: Actions 
}

export const buttonsValues: ButtonData[] = [
	{
		id: "(",
		action: Actions.SEP
	},
	{
		id: ")",
		action: Actions.SEP
	},
	{
		id: "%",
		action: Actions.OP
	},
	{
		id: "CE",
		action: Actions.CLEAN
	},
	{
		id: "7",
		action: Actions.NUMBER
	},
	{
		id: "8",
		action: Actions.NUMBER
	},
	{
		id: "9",
		action: Actions.NUMBER
	},
	{
		id: "/",
		action: Actions.OP
	},
	{
		id: "4",
		action: Actions.NUMBER
	},
	{
		id: "5",
		action: Actions.NUMBER
	},
	{
		id: "6",
		action: Actions.NUMBER
	},
	{
		id: "*",
		action: Actions.OP
	},
	{
		id: "1",
		action: Actions.NUMBER
	},
	{
		id: "2",
		action: Actions.NUMBER
	},
	{
		id: "3",
		action: Actions.NUMBER
	},
	{
		id: "-",
		action: Actions.OP
	},
	{
		id: Actions.DOT,
		action: Actions.DOT
	},
	{
		id: "0",
		action: Actions.NUMBER
	},
	{
		id: "=",
		action: Actions.EQ
	},
	{
		id: "+",
		action: Actions.OP
	}
];