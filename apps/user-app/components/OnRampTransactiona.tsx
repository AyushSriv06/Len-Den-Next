import { Card } from "@repo/ui/card";

export const OnRampTransactions = ({transactions}: {
    transactions: {
        time: Date,
        status: string,
        amount: number,
        provider: string
    }[]
}) => {
    if(!OnRampTransactions.length) {
        return <Card title="Recent Transactions">
            <div className="flex justify-center pb-8 pt-8">
                No Recent Transactions
            </div>
        </Card>
    }
    return <Card title="Recent Transactions">
        <div className="pt-2">
            {transactions.map(t => <div className="flex justify-between">
                <div>
                    <div className="text-sm">
                        Received INR
                    </div>
                    <div className="text-xs text-slate-600">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    + {t.amount / 100}
                </div>
            </div>)}
        </div>
    </Card>
}