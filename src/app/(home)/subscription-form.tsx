import { InputField, InputIcon, InputRoot } from "@/components/input";
import { ArrowRight, Mail, User } from "lucide-react";

import { Button } from "@/components/button";

export default function SubscriptionForm() {
	return (
		<form
			action=""
			className="space-y-6 bg-gray-700 p-8 border border-gray-600 rounded-2xl w-full md:max-w-[440px]"
		>
			<h2 className="font-heading font-semibold text-gray-200 text-xl">
				Inscrição
			</h2>
			<div className="space-y-3">
				<InputRoot>
					<InputIcon>
						<User />
					</InputIcon>
					<InputField type="text" placeholder="Nome completo" />
				</InputRoot>
				<InputRoot>
					<InputIcon>
						<Mail />
					</InputIcon>
					<InputField type="email" placeholder="Nome completo" />
				</InputRoot>
			</div>
			<Button type="submit">
				Confirmar
				<ArrowRight />
			</Button>
		</form>
	);
}
