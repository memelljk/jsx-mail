import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

export default function getPrisma(uri: string) {
	const prisma = new PrismaClient({
		datasourceUrl: uri,
	}).$extends(withAccelerate())

	return prisma
}