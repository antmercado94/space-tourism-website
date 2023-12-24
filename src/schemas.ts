import { z } from 'astro:content'

export const destinationSchema = z.object({
	name: z.string(),
	description: z.string(),
	distance: z.object({ value: z.number(), unit: z.string() }),
	travel: z.object({ value: z.number(), unit: z.string() }),
	order: z.number()
})

export const crewSchema = z.object({
	name: z.string(),
	role: z.string(),
	bio: z.string(),
	order: z.number()
})

export const technologySchema = z.object({
	name: z.string(),
	description: z.string(),
	order: z.number()
})
