"use client";

import { ArrowRight, Mail, User } from "lucide-react";
import { InputField, InputIcon, InputRoot } from "@/components/input";

import { Button } from "@/components/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const subscriptionFormSchema = z.object({
	name: z.string().min(2, "Informe seu nome completo"),
	email: z.string().email("Informe um e-mail válido"),
});

type SubscriptionSchema = z.infer<typeof subscriptionFormSchema>;

export default function SubscriptionForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SubscriptionSchema>({
		resolver: zodResolver(subscriptionFormSchema),
	});

	function onSubscribe(data: SubscriptionSchema) {
		console.log(data);
	}

	return (
		<form
			onSubmit={handleSubmit(onSubscribe)}
			className="space-y-6 bg-gray-700 p-8 border border-gray-600 rounded-2xl w-full md:max-w-[440px]"
		>
			<h2 className="font-heading font-semibold text-gray-200 text-xl">
				Inscrição
			</h2>
			<div className="space-y-3">
				<div className="space-y-2">
					<InputRoot>
						<InputIcon>
							<User />
						</InputIcon>
						<InputField
							type="text"
							placeholder="Nome completo"
							{...register("name")}
						/>
					</InputRoot>
					{errors.name && (
						<span className="text-danger text-sm leading-none">
							{errors.name.message}
						</span>
					)}
				</div>
				<div className="space-y-2">
					<InputRoot>
						<InputIcon>
							<Mail />
						</InputIcon>
						<InputField
							type="email"
							placeholder="Nome completo"
							{...register("email")}
						/>
					</InputRoot>
					{errors.email && (
						<span className="text-danger text-sm leading-none">
							{errors.email.message}
						</span>
					)}
				</div>
			</div>
			<Button type="submit">
				Confirmar
				<ArrowRight />
			</Button>
		</form>
	);
}
