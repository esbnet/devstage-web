"use client";

import { Copy, Link } from "lucide-react";
import { InputField, InputIcon, InputRoot } from "@/components/input";

import { IconButton } from "@/components/icon-button";

interface InviteLinkInputProps {
	inviteLink: string;
}

export default function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
	function copyToClipboard() {
		navigator.clipboard.writeText(inviteLink);
	}

	return (
		<InputRoot>
			<InputIcon>
				<Link className="size-5" />
			</InputIcon>
			<InputField readOnly defaultValue={inviteLink} title={inviteLink} />
			<IconButton className="-mr-2" onClick={copyToClipboard}>
				<Copy className="size-5" />
			</IconButton>
		</InputRoot>
	);
}
