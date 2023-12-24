import { cn } from '../../utils/cn';
import { type VariantProps, cva } from 'class-variance-authority';
import { type HTMLAttributes, forwardRef } from 'react';
import { useSpring, animated } from 'react-spring';

export const lineVariants = cva('min-h-[0.063rem] w-full border-t-0 ', {
	variants: {
		variant: {
			default: 'bg-[#383B4B]'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});

function AnimatedLine({ delay, className }: { delay: number; className: string }) {
	const props = useSpring({
		from: { width: '0%' },
		to: { width: '100%' },
		config: {
			mass: 4.7,
			tension: 170,
			friction: 120,
			velocity: 0
		},
		delay
	});
	return <animated.hr style={props} className={className} {...props} />;
}

function StaticLine({ className }: { className: string }) {
	return <hr className={className} />;
}

interface LineProps extends HTMLAttributes<HTMLHRElement>, VariantProps<typeof lineVariants> {
	animate?: boolean;
	delay?: number;
}

const Line = forwardRef<HTMLHRElement, LineProps>(
	({ className, variant, animate, delay = 1000, ...props }) => {
		return animate ? (
			<AnimatedLine delay={delay} className={cn(lineVariants({ variant, className }))} {...props} />
		) : (
			<StaticLine className={cn(lineVariants({ variant, className }))} {...props} />
		);
	}
);
Line.displayName = 'Line';

export default Line;
