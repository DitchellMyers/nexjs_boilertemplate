import { booleanArg, extendType, nonNull, objectType } from 'nexus'

export const Link = objectType({
  name: 'Link',
  definition(t) {
    t.int('id')
    t.string('name')
    t.string('route')
    t.boolean('enabled')
    t.int('position')
  },
})

export const LinksQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('links', {
      type: 'Link',
      resolve(_parent: any, args: any, ctx: any) {
        return ctx.prisma.navigation.findMany({
          where: {
            enabled: true,
          },
        })
      },
    })
  },
})
