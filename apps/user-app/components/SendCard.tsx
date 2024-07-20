'use client'
import { useState } from "react";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/TextInput";
import { Button } from "@repo/ui/button";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    return (
        <div className="h-[98vh]">
            <Card title="Send">
                <div className="min-w-72 pt-2 pb-1">
                    <TextInput
                        placeholder={"Number"}
                        label="Number"
                        onChange={(value) => {
                            setNumber(value);
                        }}
                    />
                    <TextInput
                        placeholder={"Amount"}
                        label="Amount"
                        onChange={(value) => {
                            setAmount(value);
                        }}
                    />
                    {error && (
                        <div className="text-red-500 pt-2">
                            {error}
                        </div>
                    )}
                    <div className="pt-4 flex justify-center">
                        <Button
                            onClick={async () => {
                                setLoading(true);
                                setError("");
                                try {
                                    const res = await p2pTransfer(number, Number(amount) * 100);
                                    console.log(res);
                                    window.location.reload();
                                } catch (error) {
                                    setError("Transaction failed. Please try again.");
                                    console.error(error);
                                } finally {
                                    setLoading(false);
                                }
                            }}
                            //@ts-ignore
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send"}
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
