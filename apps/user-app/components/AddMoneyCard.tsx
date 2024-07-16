"use client"

import { Button } from "@repo/ui/button"
import { Select } from "@repo/ui/Select"
import { Card } from "@repo/ui/card"
import { TextInput } from "@repo/ui/TextInput"
import { useState } from "react"

const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
}, {
    name: "SBI",
    redirectUrl: "https://www.onlinesbi.sbi/"
}];

export const AddMoney = () => {
    const [redirectUrl, setredirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    return <Card title="Add Money">
        <div className="w-full">
            <TextInput label="Amount" placeholder="Amount" onchange={() => { }}>
            </TextInput>
            <div className="py-4 text-left">
                Bank Name
            </div>
            <Select onSelect={(value) => {
                setredirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl)
            }} options={
                SUPPORTED_BANKS.map(x => ({
                    key: x.name,
                    value: x.name
                }))
            }></Select>
            <div className="flex justify-center pt-4">
                <Button onClick={() => {
                    window.location.href === redirectUrl || " "
                }}>
                    Add Money
                </Button>
            </div>
        </div> 
    </Card>
}