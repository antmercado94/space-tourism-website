import Circle from '../../ui/Circle';

type Props = {
	technologies: string[];
	currentEntryId: string;
	handleClick: (i: number) => void;
};

export default function TechnologyPagination({ technologies, currentEntryId, handleClick }: Props) {
	return (
		<ul className="flex gap-4 lg:flex-col lg:gap-8">
			{technologies.map((name, i) => (
				<li key={i} onClick={() => handleClick(i)}>
					<Circle
						variant={currentEntryId !== name ? 'outline' : 'default'}
						className="h-[2.5rem] w-[2.5rem] md:h-[3.75rem] md:w-[3.75rem] lg:mx-auto lg:h-[min(5rem,7vw)] lg:w-[min(5rem,7vw)]"
					>
						<span className={`text-base md:text-[1.5rem] lg:text-[2rem]`}>{i + 1}</span>
					</Circle>
				</li>
			))}
		</ul>
	);
}
