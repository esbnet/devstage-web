import CardRanking from "@/components/card-ranking";
import { getRanking } from "@/http/api";
import medalCooper from "@/assets/medal-cooper.svg";
import medalGold from "@/assets/medal-gold.svg";
import medalSilver from "@/assets/medal-silver.svg";

export default async function Ranking() {
	const { ranking } = await getRanking();
	return (
		<section className="space-y-6">
			<h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
				Ranking de indicações
			</h2>
			<div className="space-y-4 grid grid-rows-3">
				<CardRanking
					position="1º"
					medal={medalGold}
					name={ranking.length > 0 ? ranking[0].name : "Não há inscritos"}
					amount={ranking.length > 0 ? ranking[0].score : 0}
				/>
				<CardRanking
					position="2º"
					medal={medalSilver}
					name={ranking.length > 1 ? ranking[1].name : "Não há rankiado"}
					amount={ranking.length > 1 ? ranking[1].score : 0}
				/>
				<CardRanking
					position="3º"
					medal={medalCooper}
					name={ranking.length > 2 ? ranking[2].name : "Não há rankiado"}
					amount={ranking.length > 2 ? ranking[2].score : 0}
				/>
			</div>
		</section>
	);
}
