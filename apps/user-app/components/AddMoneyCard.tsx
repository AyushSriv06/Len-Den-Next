"use client"

import { Button } from "@repo/ui/button"
import { Select } from "@repo/ui/Select"
import { Card } from "@repo/ui/card"
import { Center } from "@repo/ui/Center"
import { TextInput } from "@repo/ui/TextInput"
import {useState} from "react"

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

