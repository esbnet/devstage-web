import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";
import {
	getSubscriberInviteClicks,
	getSubscriberInviteCount,
	getSubscriberRankingPosition,
} from "@/http/api";

import Card from "@/components/card";

export default async function Stats({
	subscriberId,
}: { subscriberId: string }) {
	const { count: accessCount } = await getSubscriberInviteClicks(subscriberId);

	const { count: inviteCount } = await getSubscriberInviteCount(subscriberId);

	const { position: rankingPosition } =
		await getSubscriberRankingPosition(subscriberId);

	return (
		<div className="gap-3 grid md:grid-cols-3">
			<Card
				amount={accessCount}
				text="Acessos ao link"
				Icon={MousePointerClick}
			/>
			<Card amount={inviteCount} text="Inscrições feitas" Icon={BadgeCheck} />
			<Card
				amount={rankingPosition ? rankingPosition : 0}
				text="Posição no ranking"
				Icon={Medal}
			/>
		</div>
	);
}
