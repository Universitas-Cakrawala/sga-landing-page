import { Badge } from "@/components/ui/badge";
import { PropsWithChildren } from "react";

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
					<Card key={i} title={title}>
						{description}
					</Card>
				))}
			</div>
		</section>
	);
}

interface CardProps extends PropsWithChildren {
	title: string;
}

function Card({ title, children }: CardProps) {
	return (
		<div className="flex flex-col w-full gap-3 p-5 border border-blue-500 bg-blue-50 rounded-xl">
			<div className="flex items-center gap-3">
				<svg
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="size-6"
				>
					<path
						d="M3.84995 8.6201C3.70399 7.96262 3.7264 7.27894 3.91511 6.63244C4.10381 5.98593 4.4527 5.39754 4.92942 4.92182C5.40614 4.4461 5.99526 4.09844 6.64216 3.91109C7.28905 3.72374 7.97278 3.70276 8.62995 3.8501C8.99166 3.2844 9.48995 2.81886 10.0789 2.49638C10.6678 2.17391 11.3285 2.00488 11.9999 2.00488C12.6714 2.00488 13.3321 2.17391 13.921 2.49638C14.5099 2.81886 15.0082 3.2844 15.3699 3.8501C16.0281 3.70212 16.713 3.72301 17.3609 3.91081C18.0089 4.09862 18.5988 4.44724 19.0758 4.92425C19.5528 5.40126 19.9014 5.99117 20.0892 6.6391C20.277 7.28703 20.2979 7.97193 20.1499 8.6301C20.7156 8.99181 21.1812 9.4901 21.5037 10.079C21.8261 10.668 21.9952 11.3286 21.9952 12.0001C21.9952 12.6715 21.8261 13.3322 21.5037 13.9211C21.1812 14.5101 20.7156 15.0084 20.1499 15.3701C20.2973 16.0273 20.2763 16.711 20.089 17.3579C19.9016 18.0048 19.554 18.5939 19.0782 19.0706C18.6025 19.5473 18.0141 19.8962 17.3676 20.0849C16.7211 20.2736 16.0374 20.2961 15.3799 20.1501C15.0187 20.718 14.52 21.1855 13.9301 21.5094C13.3401 21.8333 12.678 22.0032 12.0049 22.0032C11.3319 22.0032 10.6698 21.8333 10.0798 21.5094C9.48987 21.1855 8.99119 20.718 8.62995 20.1501C7.97278 20.2974 7.28905 20.2765 6.64216 20.0891C5.99526 19.9018 5.40614 19.5541 4.92942 19.0784C4.4527 18.6027 4.10381 18.0143 3.91511 17.3678C3.7264 16.7213 3.70399 16.0376 3.84995 15.3801C3.27991 15.0193 2.81036 14.5203 2.485 13.9293C2.15963 13.3384 1.98901 12.6747 1.98901 12.0001C1.98901 11.3255 2.15963 10.6618 2.485 10.0709C2.81036 9.47992 3.27991 8.98085 3.84995 8.6201Z"
						fill="#009FC4"
					/>
					<path d="M9 12L11 14L15 10" fill="#009FC4" />
					<path
						d="M9 12L11 14L15 10M3.84995 8.6201C3.70399 7.96262 3.7264 7.27894 3.91511 6.63244C4.10381 5.98593 4.4527 5.39754 4.92942 4.92182C5.40614 4.4461 5.99526 4.09844 6.64216 3.91109C7.28905 3.72374 7.97278 3.70276 8.62995 3.8501C8.99166 3.2844 9.48995 2.81886 10.0789 2.49638C10.6678 2.17391 11.3285 2.00488 11.9999 2.00488C12.6714 2.00488 13.332 2.17391 13.921 2.49638C14.5099 2.81886 15.0082 3.2844 15.3699 3.8501C16.0281 3.70212 16.713 3.72301 17.3609 3.91081C18.0089 4.09862 18.5988 4.44724 19.0758 4.92425C19.5528 5.40126 19.9014 5.99117 20.0892 6.6391C20.277 7.28703 20.2979 7.97193 20.1499 8.6301C20.7156 8.99181 21.1812 9.4901 21.5037 10.079C21.8261 10.668 21.9952 11.3286 21.9952 12.0001C21.9952 12.6715 21.8261 13.3322 21.5037 13.9211C21.1812 14.5101 20.7156 15.0084 20.1499 15.3701C20.2973 16.0273 20.2763 16.711 20.089 17.3579C19.9016 18.0048 19.554 18.5939 19.0782 19.0706C18.6025 19.5473 18.0141 19.8962 17.3676 20.0849C16.7211 20.2736 16.0374 20.2961 15.3799 20.1501C15.0187 20.718 14.52 21.1855 13.9301 21.5094C13.3401 21.8333 12.678 22.0032 12.0049 22.0032C11.3319 22.0032 10.6698 21.8333 10.0798 21.5094C9.48987 21.1855 8.99119 20.718 8.62995 20.1501C7.97278 20.2974 7.28905 20.2765 6.64216 20.0891C5.99526 19.9018 5.40614 19.5541 4.92942 19.0784C4.4527 18.6027 4.10381 18.0143 3.91511 17.3678C3.7264 16.7213 3.70399 16.0376 3.84995 15.3801C3.27991 15.0193 2.81036 14.5203 2.485 13.9293C2.15963 13.3384 1.98901 12.6747 1.98901 12.0001C1.98901 11.3255 2.15963 10.6618 2.485 10.0709C2.81036 9.47992 3.27991 8.98085 3.84995 8.6201Z"
						stroke="#F2F4F6"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>

				<h3 className="text-2xl font-semibold text-gray-500">{title}</h3>
			</div>
			<p className="text-xl font-normal text-gray-300">{children}</p>
		</div>
	);
}
