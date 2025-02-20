import type { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<"div"> {
	error?: boolean;
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
	return (
		<div
			data-error={error}
			className="group flex items-center gap-2 bg-gray-800 px-4 border border-gray-600 data-[error=true]:border-danger focus-within:border-gray-100 rounded-xl h-12"
			{...props}
		/>
	);
}

interface InputIconProps extends ComponentProps<"span"> {}

export function InputIcon(props: InputIconProps) {
	return (
		<span
			className="group-data-[error=true]:text-danger group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 text-gray-400"
			{...props}
		/>
	);
}

interface InputFieldProps extends ComponentProps<"input"> {}

export function InputField(props: InputFieldProps) {
	return (
		<input
			className="flex-1 bg-transparent outline-0 text-gray-100 decoration-300 transition-colors cursor-pointer placeholder-gray-400"
			{...props}
		/>
	);
}
