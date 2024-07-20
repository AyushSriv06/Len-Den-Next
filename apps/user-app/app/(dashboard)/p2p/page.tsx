
import { SendCard } from "../../../components/SendCard";
import prisma from "@repo/db/client"
import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"
import { OnRampTransactions } from "../../../components/OnRampTransactiona"

async function getsentP2PTransactions() {
    const session = await getServerSession(authOptions)
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session?.user?.id),
        },
    })

    return txns.map((t) => ({
        time: t.timestamp,
        amount: t.amount,
        status: "Success",
        provider: t.toUserId,
    }))
}

async function getreceiveP2PTransactions() {
    const session = await getServerSession(authOptions)
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            toUserId: Number(session?.user?.id),
        },
    })

    return txns.map((t) => ({
        time: t.timestamp,
        amount: t.amount,
        status: "Success",
        provider: t.fromUserId,
    }))
}

export default async function () {
    const sentTransactions: any = await getsentP2PTransactions()
    const receivedTransactions: any = await getreceiveP2PTransactions()
    return (
        <div className="w-full">
            <div className="flex flex-col gap-5">
                <h1 className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
                    P2PTransfer
                </h1>
                <div className="flex flex-col lg:flex-row lg:gap- justify-between px-10">
                    <div className="flex flex-col gap-3 w-full lg:w-1/2">
                        <h1 className="text-2xl text-[#6a51a6] pt-2 font-bold">
                            P2P Transactions
                        </h1>
                        <div>
                            <OnRampTransactions title={"Sent transactions"} transactions={sentTransactions} />
                        </div>
                        <div>
                            <OnRampTransactions title={"Received transactions"} transactions={receivedTransactions} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 ml-20 lg:w-1/2">
                        <h1 className="text-2xl text-[#6a51a6] pt-2 font-bold">
                            Send Money
                        </h1>    
                        <SendCard />
                    </div>
                </div>
            </div>
        </div>
    )
}