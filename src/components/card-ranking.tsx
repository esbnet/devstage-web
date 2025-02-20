import Image from "next/image";

interface CardProps {
	amount: number;
	name: string;
	medal: string;
	position: string;
}

export default function CardRanking({
	amount,
	name,
	medal,
	position,
}: CardProps) {
	return (
		<div className="relative flex justify-between gap-1 bg-gray-700 p-6 border border-gray-600 rounded-xl">
			<div className="flex flex-col gap-4">
				<span className="text-gray-300 text-sm leading-none">
					{`${position} | ${name}`}
				</span>
				<span className="font-heading font-semibold text-gray-200 text-2xl leading-none">
					{amount}
				</span>
			</div>
			<div className="top-0 right-0 absolute flex flex-col w-[20%] h-full">
				<Image src={medal} alt="Medalha" width={58} height={58} />
			</div>
		</div>
	);
}
