import { useMemo, useState } from "react";

import sgaMembers from "@/assets/images/sga-members.png";
import { Badge } from "@/components/ui/badge";
// TODO: Should be from API / CMS
import membersData from "@/lib/data/members.json";
import DivisionSelectButton from "./partials/division-select-button";
import MemberCard from "./partials/member-card";

type Division = keyof typeof membersData;
const divisions = Object.keys(membersData) as Division[];

export default function DivisionSection() {
	const [selectedDivision, setSelectedDivision] =
		useState<Division>("Executive");

	const currentMembers = useMemo(
		() => membersData[selectedDivision],
		[selectedDivision],
	);

	return (
		<section
			id="division"
			className="container w-full h-full gap-10 px-10 py-32 mx-auto bg-white"
		>
			<div className="space-y-6">
				<Badge>Division</Badge>
				<h1 className="text-4xl font-semibold leading-tight">
					SGA terdiri dari berbagai divisi yang bekerja sama untuk menciptakan
					lingkungan kampus yang dinamis dan mendukung.
				</h1>
			</div>
			<div className="flex gap-20 mt-14">
				<div className="flex flex-col gap-4 w-80 shrink-0">
					{divisions.map((division) => (
						<DivisionSelectButton
							key={division}
							isActive={selectedDivision === division}
							onClick={() => setSelectedDivision(division)}
						>
							{division}
						</DivisionSelectButton>
					))}
				</div>
				<div className="grid items-start content-start justify-start gap-5 xl:grid-cols-4 lg:grid-cols-2 max-h-[1200px] overflow-y-auto">
					{currentMembers.map(({ name, role }, i) => (
						<MemberCard
							key={i}
							name={name}
							position={role}
							// TODO: This is still a placeholder image, the finished one should be unique per member
							image={sgaMembers}
							linkedinUrl="#"
						/>
					))}
				</div>
			</div>
		</section>
	);
}
