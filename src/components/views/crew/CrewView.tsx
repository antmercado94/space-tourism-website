import type { CollectionEntry } from 'astro:content';
import { useState } from 'react';
import CrewContent from './CrewContent';
import CrewPagination from './CrewPagination';

type Props = {
	allCrew: CollectionEntry<'crew'>[];
};

export default function CrewView({ allCrew }: Props) {
	const [currentEntry, setCurrentEntry] = useState<CollectionEntry<'crew'>>(allCrew[0]);
	const crew = allCrew.map((member) => member.id);

	const handleCurrentEntry = (pos: number) => {
		const selectedEntry = allCrew[pos];

		if (currentEntry.id === selectedEntry.id) return;

		const img = document.querySelector('#crew-image'),
			role = document.querySelector('#crew-role'),
			name = document.querySelector('#crew-name'),
			content = document.querySelector('#crew-content');
		const selectedImg = selectedEntry.data.image.src;
		const selectedName = selectedEntry.data.name;

		setCurrentEntry(selectedEntry);

		// replace image on the dom
		img?.setAttribute('src', selectedImg);
		img?.setAttribute('alt', `Image of ${selectedName}`);
		// reset animations for new entry
		img?.classList.toggle('fadeIn--alt');
		role?.classList.toggle('stagger--alt');
		name?.classList.toggle('stagger--alt');
		content?.classList.toggle('stagger--alt');

		// alternate padding-top class
		let imgClassNames = Array.from(img?.classList as Iterable<string>);
		const hasPtClass = imgClassNames.some((cn) => /crew-pt--/.test(cn));
		const selectedPtClass = `crew-pt--${selectedEntry.id}`;
		const currentPtClass = `crew-pt--${currentEntry.id}`;

		if (!hasPtClass) {
			// append class
			imgClassNames = [...imgClassNames, selectedPtClass];
		} else {
			// replace class
			imgClassNames[imgClassNames.indexOf(currentPtClass)] = selectedPtClass;
		}

		img?.setAttribute('class', imgClassNames.join(' '));
	};

	return (
		<div className="flex flex-col-reverse items-center gap-8 md:flex-col md:gap-10 lg:items-start lg:gap-[5.5rem]">
			<div className={`flex flex-col gap-4 lg:min-w-[38.375rem] lg:gap-[1.688rem]`}>
				<CrewContent currentEntry={currentEntry} />
			</div>
			<div style={{ '--animate-order': 7 } as React.CSSProperties} className="fadeIn">
				<CrewPagination
					crew={crew}
					currentEntryId={currentEntry.id}
					handleClick={handleCurrentEntry}
				/>
			</div>
		</div>
	);
}
