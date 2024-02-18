import getPrisma from '../../src/utils/prisma';
import dataJson from './data';
const data: any = dataJson

//@ts-ignore
const prisma: any = getPrisma(process.env.DATABASE_URL);

async function main() {
	for (const d of data) {
		try {
			await prisma[d.modelName].upsert({
				where: {
					[d.uniqueField]: d.data[d.uniqueField],
				},
				create: d.data,
				update: d.data,
			});
			console.log(
				`Created/updated ${d.modelName} of key ${d.data[d.uniqueField]}`,
			);
		} catch (e) {
			console.log(`Failed to create/update ${d.modelName}`, e);
		}
	}
}

main().finally(async () => {
	await prisma.$disconnect();
})