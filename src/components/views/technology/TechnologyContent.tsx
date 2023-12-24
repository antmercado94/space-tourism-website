import type { CollectionEntry } from 'astro:content';

type Props = {
	currentEntry: CollectionEntry<'technology'>;
	isInitialAnimationOrder: boolean;
};

export default function TechnologyContent({ currentEntry, isInitialAnimationOrder }: Props) {
	return (
		<>
			<div className="flex flex-col items-center gap-[0.563rem] md:gap-4 lg:items-start lg:gap-[0.688rem]">
				{/* heading */}
				<h2
					style={{ '--animate-order': 4 } as React.CSSProperties}
					className="stagger font-sans text-sm uppercase leading-[1.063rem] tracking-[0.169em] text-primary-light-blue md:text-base md:leading-[1.188rem] md:tracking-[0.169em]"
				>
					the terminology…
				</h2>
				{/* name */}
				<h3
					id="tech-name"
					style={{ '--animate-order': isInitialAnimationOrder ? 5 : 3 } as React.CSSProperties}
					className="stagger heading-3 text-primary-white"
				>
					{currentEntry.data.name}
				</h3>
			</div>
			{/* desc */}
			<p
				id="tech-description"
				style={{ '--animate-order': isInitialAnimationOrder ? 6 : 4 } as React.CSSProperties}
				className="stagger body-text text-center text-primary-light-blue lg:max-w-[27.75rem] lg:text-left"
			>
				{currentEntry.data.description}
			</p>
		</>
	);
}
