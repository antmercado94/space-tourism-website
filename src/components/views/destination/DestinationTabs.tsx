type Props = {
	destinations: string[];
	currentEntryId: string;
	handleClick: (i: number) => void;
};

export default function DestinationTabs({ destinations, currentEntryId, handleClick }: Props) {
	return (
		<ul className="flex justify-center gap-[1.625rem] font-sans text-sm uppercase leading-[1.063rem] tracking-[0.169em] text-primary-light-blue md:gap-9 md:text-base md:leading-[1.188rem] md:tracking-[0.169em] lg:justify-start">
			{destinations.map((name, i) => (
				<li
					key={i}
					onClick={() => handleClick(i)}
					// 50% opacity on hover for pseudo element animations
					onMouseEnter={(e) =>
						(e.target as HTMLLIElement).classList.replace('after:opacity-0', 'after:opacity-50')
					}
					className={`relative flex justify-center transition-colors after:absolute after:-bottom-[.786em] after:h-[0.188rem] after:w-0 after:bg-primary-white after:opacity-0 after:transition-opacity after:content-[""] hover:after:opacity-50 md:after:-bottom-[0.938em] ${
						currentEntryId !== name
							? 'grow-line cursor-pointer'
							: 'grow-line--active cursor-default text-primary-white after:transition-colors hover:after:bg-primary-white/100'
					}`}
				>
					{name}
				</li>
			))}
		</ul>
	);
}
