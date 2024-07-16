import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
require('dotenv').config();

async function main() {
    const alice = await prisma.user.upsert({
        where: {number: '99999999'},
        update: {},
        create: {
            name: "alice",
            number: '99999999',
            password: "alice",
            onRampTransactions: {
                create: {
                    startTime: new Date(),
                    status: "Success",
                    amount: 20000,
                    token: "122",
                    provider: "HDFC Bank"
                }
            }
        }
    })
    const bob = await prisma.user.upsert({
        where: { number: '9999999998' },
        update: {},
        create: {
          number: '9999999998',
          password: 'bob',
          name: 'bob',
          onRampTransactions: {
            create: {
              startTime: new Date(),
              status: "Failure",
              amount: 2000,
              token: "123",
              provider: "HDFC Bank",
            },
          },
        },
      })
    console.log({ alice, bob })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })