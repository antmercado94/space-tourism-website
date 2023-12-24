import type { CollectionEntry } from 'astro:content';
import { useSpring, animated } from 'react-spring';
import Line from '../../ui/Line';

type Props = {
	currentEntry: CollectionEntry<'destinations'>;
};

export default function DestinationContent({ currentEntry }: Props) {
	const FadeIn = ({ children, delay }: { children: React.ReactNode; delay: number }) => {
		const props = useSpring({
			opacity: 1,
			from: { opacity: 0 },
			config: {
				mass: 4.7,
				tension: 170,
				friction: 120,
				precision: 0.3,
				velocity: 0
			},
			delay
		});
		return <animated.div style={props}>{children}</animated.div>;
	};

	const InvisibleNumber = ({ value, unit }: { value: number; unit: string }) => {
		{
			/* renders non-visible html element for proper spacing */
		}
		return (
			<span
				data-unit={unit}
				className={`invisible inline-block after:visible after:absolute after:right-0 after:content-[attr(data-unit)]`}
			>
				<>
					{Number(value.toFixed(0)).toLocaleString('en-US')}
					&nbsp;
					{unit}
				</>
			</span>
		);
	};

	const AnimatedNumber = ({ n }: { n: number }) => {
		const { number } = useSpring({
			from: { number: 0 },
			number: n,
			config: { mass: 1, tension: 20, friction: 10 },
			delay: 800
		});
		return (
			<animated.span className={'absolute left-0 inline-block'}>
				{number.to((n) => Number(n.toFixed(0)).toLocaleString('en-US'))}
			</animated.span>
		);
	};

	return (
		<div className="flex flex-col items-center gap-8 md:max-w-[35.813rem] md:gap-[3.063rem] lg:max-w-[27.813rem] lg:gap-[3.375rem]">
			<div className="flex flex-col items-center gap-[0.063rem] md:gap-2 lg:items-start lg:gap-[0.875rem]">
				{/* name */}
				<h2
					id="dest-name"
					style={{ '--animate-order': 4 } as React.CSSProperties}
					className="stagger heading-2 text-primary-white"
				>
					{currentEntry.data.name}
				</h2>
				{/* desc */}
				<p
					id="dest-description"
					style={{ '--animate-order': 5 } as React.CSSProperties}
					className="stagger body-text text-center text-primary-light-blue lg:text-left"
				>
					{currentEntry.data.description}
				</p>
			</div>
			<div className="flex w-full flex-col gap-8 md:gap-7">
				<Line animate={true} delay={850} />
				<FadeIn delay={600}>
					<div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-[6.188rem] lg:justify-start lg:gap-[4.938rem]">
						{/* distance */}
						<div className="flex flex-col items-center gap-3 lg:items-start">
							<h3 className="subheading-2 text-primary-light-blue">avg. distance</h3>
							<p id="dist-counter" className="subheading-1 relative text-primary-white">
								<InvisibleNumber
									value={currentEntry.data.distance.value}
									unit={currentEntry.data.distance.unit}
								/>
								<AnimatedNumber n={currentEntry.data.distance.value} />
							</p>
						</div>
						{/* travel time */}
						<div className="flex flex-col items-center gap-3 lg:items-start">
							<h3 className="subheading-2 text-primary-light-blue">est. travel time</h3>
							<p id="travel-counter" className="subheading-1 relative text-primary-white">
								{/* non-visible content used for proper spacing */}
								<InvisibleNumber
									value={currentEntry.data.travel.value}
									unit={currentEntry.data.travel.unit}
								/>
								<AnimatedNumber n={currentEntry.data.travel.value} />
							</p>
						</div>
					</div>
				</FadeIn>
			</div>
		</div>
	);
}
