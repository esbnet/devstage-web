import Image from "next/image";
import InviteLinkInput from "./invite-link-input";
import Ranking from "./ranking";
import Stats from "./stats";
import logo from "@/assets/logo.svg";

interface InvitePageProps {
	params: Promise<{
		subscriberId: string;
	}>;
}

export default async function InvitePage(props: InvitePageProps) {
	const { subscriberId } = await props.params;

	const inviteLink = `${process.env.NEXT_PUBLIC_APP_URL}/invites/${subscriberId}`;

	return (
		<div className="flex md:flex-row flex-col justify-between items-center gap-16 min-h-dvh">
			<div className="flex flex-col gap-10 w-full max-w-[550px]">
				<Image src={logo} alt="Logo" width={108.5} height={30} />

				<div className="space-y-2">
					<h1 className="font-heading font-semibold text-gray-100 text-4xl leading-none">
						Inscrição confirmada!
					</h1>
					<p className="text-gray-300">
						Para entrar no evento, acesse o link enviando para seu e-mail.
					</p>
				</div>
				<div className="space-y-6">
					<div className="space-y-3">
						<h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
							Indique e Ganhe
						</h2>
						<p className="text-gray-300">
							Convide mais pessoas para o evento e concorra a prêmios
							exclusivos! É só compartilhar o link abaixo e acompanhar as
							inscrições:
						</p>
						<InviteLinkInput inviteLink={inviteLink} />
						<Stats subscriberId={subscriberId} />
					</div>
				</div>
			</div>
			<div className="space-y-7 w-full max-w-[550px] h-full">
				<Ranking />
			</div>
		</div>
	);
}
