import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button(props: ButtonProps) {
	return (
		<button
			className="flex justify-between items-center bg-gray-500 hover:bg-blue px-5 rounded-xl w-full h-12 font-semibold text-blue hover:text-gray-900 decoration-300 transition-colors cursor-pointer"
			{...props}
		/>
	);
}
