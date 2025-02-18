import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface iconButtonProps extends ComponentProps<"button"> {}

export function IconButton({ className, ...props }: iconButtonProps) {
	return (
		<button
			className={twMerge(
				"bg-gray-500 hover:bg-blue p-1.5 rounded-md text-blue hover:text-gray-900 decoration-300 transition-colors cursor-pointer",
				className,
			)}
			{...props}
		/>
	);
}
