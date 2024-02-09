import { Actions } from "../data/buttons";

export type calculationData = {
	text: string,
	action: Actions
}

export type historyData = {
	sentence: string,
	result: number
};

export type stacks = {
	calculationStack: calculationData[],
	historyStack: historyData[]
	setHistoryStack: React.Dispatch<React.SetStateAction<historyData[]>>
	setCallStack: React.Dispatch<React.SetStateAction<calculationData[]>>

}