import express from "express"
import db from "@repo/db/client"

const app = express();
app.use(express.json());

app.post("/hdfcWebhook", async (req, res) => {
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };
    try {
        await db.$transaction([
            db.balance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            db.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    status: "Success"
                }
            })
        ]);
        res.status(200).json({
            msg: "captured"
        })
    } catch(e) {
        console.error(e);
        res.json({
            msg: "Error performing Transaction"
        })
    }
})

app.listen(3003);