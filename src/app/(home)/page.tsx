import logo from "@/assets/logo.svg";
import { Radio } from "lucide-react";
import Image from "next/image";
import { default as SubscriptionForm } from "./subscription-form";

export default function Home() {
	return (
		<div className="flex flex-col justify-center gap-16 min-h-dvh">
			<div className="flex flex-col items-center md:items-start gap-8">
				<Image src={logo} alt="Logo" width={108.5} height={30} />

				<h1 className="flex flex-col font-heading font-medium text-4xl md:text-7xl md:text-left text-center leading-none">
					<span className="text-blue">CodeCraft</span>
					Summit 2025
				</h1>
			</div>

			<div className="flex md:flex-row flex-col items-stretch gap-5">
				<div className="flex-1 space-y-6 bg-gray-700 p-8 border border-gray-800 rounded-2xl">
					<div className="flex justify-between items-center">
						<h2 className="font-heading font-semibold text-gray-200 text-xl">
							Sobre o evento
						</h2>
						<span className="flex items-center gap-2 text-purple">
							<Radio className="size-5" /> AO VIVO
						</span>
					</div>
					<p className="text-gray-300 text-sm md:text-base leading-relaxed">
						Um evento feito por e para pessoas desenvolvedoras apaixonadas por
						criar soluções inovadoras e compartilhar conhecimento. Vamos
						mergulhar nas tendências mais recentes em desenvolvimento de
						software, arquitetura de sistemas e tecnologias emergentes, com
						palestras, workshops e hackathons.
						<br />
						<br />
						Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
					</p>
				</div>
				<SubscriptionForm />
			</div>
		</div>
	);
}
