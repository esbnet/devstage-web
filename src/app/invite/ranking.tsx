import medalCooper from "@/assets/medal-cooper.svg";
import medalGold from "@/assets/medal-gold.svg";
import medalSilver from "@/assets/medal-silver.svg";
import CardRanking from "@/components/card-ranking";

export default function Ranking() {
	return (
		<div className="space-y-5 w-full max-w-[550px]">
			<h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
				Ranking de indicações
			</h2>
			<div className="space-y-4">
				<CardRanking
					position="1º"
					medal={medalGold}
					name="Rodrigo Gonçalves"
					amount={"1.128"}
				/>
				<CardRanking
					position="2º"
					medal={medalSilver}
					name="Maria da Silva"
					amount={"928"}
				/>
				<CardRanking
					position="3º"
					medal={medalCooper}
					name="João da Silva"
					amount={"975"}
				/>
			</div>
		</div>
	);
}
