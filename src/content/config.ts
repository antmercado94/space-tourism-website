import { defineCollection, z } from 'astro:content'
import { crewSchema, destinationSchema, technologySchema } from '../schemas'

const destinationsCollection = defineCollection({
	type: 'data',
	schema: ({ image }) => destinationSchema.merge(z.object({ image: image() }))
})

const crewCollection = defineCollection({
	type: 'data',
	schema: ({ image }) => crewSchema.merge(z.object({ image: image() }))
})

const technologyCollection = defineCollection({
	type: 'data',
	schema: ({ image }) =>
		technologySchema.merge(z.object({ imagePortrait: image(), imageLandscape: image() }))
})

export const collections = {
	destinations: destinationsCollection,
	crew: crewCollection,
	technology: technologyCollection
}
