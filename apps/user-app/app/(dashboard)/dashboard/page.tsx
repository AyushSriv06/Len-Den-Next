import React from 'react';
import LineChart from '../../../components/linechart';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/auth';
import { BalanceCard } from '../../../components/BalanceCard';
import { OnRampTransactions } from '../../../components/OnRampTransactiona';
import prisma from '@repo/db/client'

async function getBalance() {
    const session = await getServerSession(authOptions)
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

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


async function getOnRampTransactions() {
    const session = await getServerSession(authOptions)
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id),
        },
    })
    return txns.map((t) => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider,
    }))
}

const getUser = async () => {
    try {
        const session = await getServerSession(authOptions);

        const user = await prisma.user.findUnique({
            where: {
                id: Number(session.user.id),
            },
            select: {
                name: true,
            },
        });

        return user?.name || 'No name found';
    } catch (error) {
        console.error('Error fetching user:', error);
        return 'Error fetching user';
    }
};
const App: React.FC = async () => {
    const balance = await getBalance();
    //@ts-ignore
    const transactions = await getOnRampTransactions();
    const sentp2p: any = await getsentP2PTransactions()
    const receivedp2p: any = await getreceiveP2PTransactions()

    const userName = await getUser();
    const data = [65, 40, 20, 81, 56, 55, 40];
    const labels = ['Thu Jul 18 2024', 'Sun Jul 21 2024', 'Sun Jul 21 2024', 'April', 'May', 'June', 'July'];
 
    
    return (
        <div>
            <h1 className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
                Hello {userName} 👋
            </h1>
            <div className=" flex justify-center items-start ml-40 w-full max-w-4xl">
                <LineChart data={data} labels={labels} />
            </div>
            <div className="ml-40 pt-16 pb-8">
                <BalanceCard amount={balance.amount} locked={balance.locked} />
                <div className="pt-4">
                    <OnRampTransactions transactions={transactions} />
                </div>
            </div>
            <div className="ml-40 pt-8 pb-8">
                <div>
                    <OnRampTransactions title={"Sent transactions"} transactions={sentp2p} />
                </div>
                <div className='pt-4'>
                    <OnRampTransactions title={"Received transactions"} transactions={receivedp2p} />
                </div>
            </div>
        </div>

    );
};

export default App;
