import Circle from '../../ui/Circle'

type Props = {
	crew: string[]
	currentEntryId: string
	handleClick: (i: number) => void
}

export default function CrewPagination({ crew, currentEntryId, handleClick }: Props) {
	return (
		<ul className="flex gap-4 lg:gap-6">
			{crew.map((name, i) => (
				<li key={i} onClick={() => handleClick(i)}>
					<Circle
						variant={currentEntryId !== name ? 'inactive' : 'default'}
						className="h-[0.625rem] w-[0.625rem] lg:h-[0.938rem] lg:w-[0.938rem]"
					/>
				</li>
			))}
		</ul>
	)
}
