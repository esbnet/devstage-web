import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";

import Card from "@/components/card";

export default function Stats() {
	return (
		<div className="gap-3 grid md:grid-cols-3">
			<Card amount={"1042"} text="Acessos ao link" Icon={MousePointerClick} />
			<Card amount={"985"} text="Inscrições feitas" Icon={BadgeCheck} />
			<Card amount={"3º"} text="Posição no ranking" Icon={Medal} />
		</div>
	);
}
