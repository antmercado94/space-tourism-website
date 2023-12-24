import type { CollectionEntry } from 'astro:content';

type Props = {
	currentEntry: CollectionEntry<'crew'>;
};

export default function CrewContent({ currentEntry }: Props) {
	return (
		<>
			<div className="flex flex-col items-center gap-2 lg:items-start lg:gap-[0.938rem]">
				{/* role */}
				<h2
					id="crew-role"
					style={{ '--animate-order': 4 } as React.CSSProperties}
					className="stagger heading-4 text-primary-white/50"
				>
					{currentEntry.data.role}
				</h2>
				{/* name */}
				<h3
					id="crew-name"
					style={{ '--animate-order': 5 } as React.CSSProperties}
					className="stagger heading-3 text-center text-primary-white"
				>
					{currentEntry.data.name}
				</h3>
			</div>
			{/* bio */}
			<p
				style={{ '--animate-order': 6 } as React.CSSProperties}
				className="stagger body-text text-center text-primary-light-blue lg:min-h-[max(10rem,10.111vw)] lg:max-w-[27.75rem] lg:text-left"
				id="crew-content"
			>
				{currentEntry.data.bio}
			</p>
		</>
	);
}
