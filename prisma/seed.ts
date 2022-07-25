import { PrismaClient } from '@prisma/client'
import { navigationData } from '../data/navigation'

const prisma = new PrismaClient()

const main = async () => {
  await Promise.all(
    navigationData.map(async (navigation) => {
      return prisma.navigation.upsert({
        where: { name: navigation.name },
        update: {},
        create: {
          name: navigation.name,
          route: navigation.route,
          position: navigation.position,
          enabled: navigation.enabled,
        },
      })
    })
  )
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
