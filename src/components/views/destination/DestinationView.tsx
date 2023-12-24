import { type CollectionEntry } from 'astro:content'
import { useState } from 'react'
import DestinationContent from './DestinationContent'
import DestinationTabs from './DestinationTabs'

type Props = {
	allDestinations: CollectionEntry<'destinations'>[]
}

export default function DestinationView({ allDestinations }: Props) {
	const [currentEntry, setCurrentEntry] = useState<CollectionEntry<'destinations'>>(
		allDestinations[0]
	)
	const destinations = allDestinations.map((dest) => dest.id)

	const handleCurrentEntry = (pos: number) => {
		const selectedEntry = allDestinations[pos]

		if (currentEntry.id === allDestinations[pos].id) return

		const imgContainer = document.querySelector('#dest-image-container'),
			img = document.querySelector('#dest-image'),
			name = document.querySelector('#dest-name'),
			desc = document.querySelector('#dest-description')
		const selectedImg = selectedEntry.data.image.src
		const selectedName = selectedEntry.data.name

		setCurrentEntry(selectedEntry)

		// replace image on the dom
		img?.setAttribute('src', selectedImg)
		img?.setAttribute('alt', `Image of ${selectedName}`)
		// reset animations for new entry
		imgContainer?.classList.toggle('fadeIn--alt')
		name?.classList.toggle('stagger--alt')
		desc?.classList.toggle('stagger--alt')
	}

	return (
		<div className="flex flex-col gap-[1.938rem] md:gap-[2.938rem] lg:gap-[3.25rem]">
			<DestinationTabs
				destinations={destinations}
				currentEntryId={currentEntry.id}
				handleClick={handleCurrentEntry}
			/>
			<article>
				<div className="flex flex-col items-center">
					<DestinationContent currentEntry={currentEntry} />
				</div>
			</article>
		</div>
	)
}
