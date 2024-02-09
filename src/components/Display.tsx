import { Dispatch, SetStateAction } from "react"
import history from "../assets/history_white.png";


type DisplayProps = {
	displayText: string,
	setDisplayText: Dispatch<SetStateAction<string>>
}


const Display: React.FC<DisplayProps> = function (props: DisplayProps){

	return (
		<div className="col-span-4 text-right">
			<div className="absolute pl-4 pt-2">
				<button className="w-6 h-6 hover:-translate-y-[0.15rem] pt-1">
					<img src={history} alt="history-icon" className="w-6 h-6" />
				</button>
			</div>
			<div className="bg-black bg-opacity-50 text-white h-16 pt-4 text-2xl pr-2 hover:bg-opacity-40">
				<div className="w-[26rem] overflow-hidden float-right text-nowrap">
					{
						props.displayText
					}
				</div>
			</div>
		</div>
		
	)
}


export default Display;