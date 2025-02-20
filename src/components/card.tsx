import { Medal } from "lucide-react";

interface CardProps {
	amount: number;
	text: string;
	Icon: React.ElementType;
}

export default function Card({ amount, text, Icon }: CardProps) {
	return (
		<div className="relative flex flex-col justify-center items-center gap-1 bg-gray-700 px-4 py-7 border border-gray-600 rounded-xl">
			<span className="font-heading font-semibold text-gray-200 text-2xl leading-none">
				{Icon === Medal ? `${amount}º` : amount}
			</span>
			<span className="text-gray-300 text-sm text-center leading-none">
				{text}
			</span>
			<Icon className="top-2 left-2 absolute size-5 text-purple" />
		</div>
	);
}
