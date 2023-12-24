import type { CollectionEntry } from 'astro:content';
import { useState } from 'react';
import TechnologyPagination from './TechnologyPagination';
import TechnologyContent from './TechnologyContent';

type Props = {
	allTechnology: CollectionEntry<'technology'>[];
};

export default function CrewCard({ allTechnology }: Props) {
	const [currentEntry, setCurrentEntry] = useState(allTechnology[0]);
	const [isInitialAnimationOrder, setIsInitialAnimationOrder] = useState(true);
	const technologies = allTechnology.map((tech) => tech.id);

	const handleCurrentEntry = (pos: number) => {
		const selectedEntry = allTechnology[pos];

		if (currentEntry.id === allTechnology[pos].id) return;

		setIsInitialAnimationOrder(false);

		const name = document.querySelector('#tech-name'),
			desc = document.querySelector('#tech-description'),
			imgMobile = document.querySelector('#tech-image-landscape'),
			imgDesktop = document.querySelector('#tech-image-portrait');
		const selectedImgMobile = selectedEntry.data.imageLandscape.src;
		const selectedImgDesktop = selectedEntry.data.imagePortrait.src;
		const selectedName = selectedEntry.data.name;

		setCurrentEntry(selectedEntry);

		// replace image on the dom
		imgMobile?.setAttribute('src', selectedImgMobile);
		imgMobile?.setAttribute('alt', `Image of ${selectedName}`);
		imgDesktop?.setAttribute('src', selectedImgDesktop);
		imgDesktop?.setAttribute('alt', `Image of ${selectedName}`);
		// reset animations for new entry
		imgMobile?.classList.toggle('fadeIn--alt');
		imgDesktop?.classList.toggle('fadeIn--alt');
		name?.classList.toggle('stagger--alt');
		desc?.classList.toggle('stagger--alt');
	};

	return (
		<div className="flex flex-col items-center gap-[1.625rem] md:gap-11 lg:flex-row lg:items-start lg:gap-[3vw] xl:gap-[min(5rem,5.6vw)]">
			<TechnologyPagination
				technologies={technologies}
				currentEntryId={currentEntry.id}
				handleClick={handleCurrentEntry}
			/>
			<div className="flex flex-col gap-4 md:max-w-[28.625rem] lg:min-h-[18.938rem] lg:min-w-[29.375rem] lg:max-w-none lg:gap-[1.063rem]">
				<TechnologyContent
					currentEntry={currentEntry}
					isInitialAnimationOrder={isInitialAnimationOrder}
				/>
			</div>
		</div>
	);
}
