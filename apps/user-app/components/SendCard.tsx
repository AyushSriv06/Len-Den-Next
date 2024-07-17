import { useState } from "react";
import { Center } from "@repo/ui/Center";
import { Card } from "@repo/ui/card";

export function SendCard() {
    const [number,setNumber] = useState("")
    const [amount,setAmount] = useState("")

    return <div className="h-[98vh]">
        <Center>
            <Card title="Send">
                <div className="min-w-72 pt-2"></div>
            </Card>
        </Center>
    </div>
}