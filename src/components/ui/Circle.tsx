import { cn } from '../../utils/cn'
import { type VariantProps, cva } from 'class-variance-authority'
import { type HTMLAttributes, forwardRef } from 'react'

export const circleVariants = cva(
	'relative flex items-center justify-center rounded-full transition-colors font-serif',
	{
		variants: {
			variant: {
				default: 'bg-primary-white text-primary-black cursor-default',
				outline:
					'border border-primary-white/25 text-primary-white hover:border-primary-white/100 cursor-pointer',
				inactive: 'bg-primary-white bg-opacity-[17.44%] hover:bg-opacity-50 cursor-pointer'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	}
)

interface CircleProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof circleVariants> {}

const Circle = forwardRef<HTMLDivElement, CircleProps>(
	({ className, children, variant, ...props }, ref) => {
		return (
			<div className={cn(circleVariants({ variant, className }))} ref={ref} {...props}>
				{children}
			</div>
		)
	}
)
Circle.displayName = 'Circle'

export default Circle
