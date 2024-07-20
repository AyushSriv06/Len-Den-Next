"use client"

import { useState } from "react";
import { Center } from "@repo/ui/Center";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/TextInput";
import { Button } from "@repo/ui/button";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";

export function SendCard() {
    const [number,setNumber] = useState("")
    const [amount,setAmount] = useState("")

    return <div className="h-[98vh]">
            <Card title="Send">
                <div className="min-w-72 pt-2 pb-1"> 
                    <TextInput placeholder={"Number"} label="Number" onChange={(value) => {
                        setNumber(value)
                    }}></TextInput>
                    <TextInput placeholder={"Amount"} label="Amount" onChange={(value) => {
                        setAmount(value)
                    }}></TextInput>
                    <div className="pt-4 flex justify-center">
                        <Button onClick={async() => {
                            await p2pTransfer(number, Number(amount) * 100)
                        }}>Send</Button>
                    </div>
               </div>
            </Card>
    </div>
}