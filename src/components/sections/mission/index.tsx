import MissionCard from "./partials/mission-card";
import { Badge } from "@/components/ui/badge";

export default function MissionSection() {
	// TODO: Should be fetched from the CMS in the future
	const missionCards = [
		{
			title: "Meningkatkan Komunikasi",
			description:
				"Memfasilitasi komunikasi yang efektif antara mahasiswa dan pihak universitas untuk memastikan aspirasi mahasiswa didengar dan ditindaklanjuti.",
		},
		{
			title: "Mendukung Inovasi",
			description:
				"Mendukung kegiatan mahasiswa yang inovatif dan kreatif untuk menciptakan lingkungan belajar yang dinamis dan inspiratif.",
		},
		{
			title: "Menjamin Kesejahteraan",
			description:
				"Memastikan kesejahteraan mahasiswa melalui kebijakan yang adil, program dukungan, dan lingkungan yang inklusif.",
		},
	];

	return (
		<section className="flex flex-col w-full h-full max-w-screen-xl gap-10 px-10 py-32 mx-auto bg-white lg:flex-row">
			<div className="flex-1 space-y-6">
				<Badge>Mission</Badge>
				<h2 className="text-4xl font-semibold">
					Kami bertujuan untuk memfasilitasi komunikasi yang{" "}
					<span className="text-yellow-500">
						efektif antara mahasiswa dan pihak universitas
					</span>
				</h2>
			</div>
			<div className="grid flex-1 gap-5">
				{missionCards.map(({ title, description }, i) => (
					<MissionCard key={i} title={title}>
						{description}
					</MissionCard>
				))}
			</div>
		</section>
	);
}
