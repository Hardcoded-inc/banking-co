const { Router, Request, Response } = require("express");
import { StatusCodes } from "http-status-codes";

const router = Router();
import accounts from "../data/accounts";

router.get("/all-accounts", (req: any, res: any) => {
  res.status(StatusCodes.OK).json(accounts);
});

router.get("/:accountNo", (req: any, res: any) => {
  const { accountNo } = req.params;

  try {
    const data = accounts.find((obj) => {
      return obj.accountNo === parseInt(accountNo);
    });
    res.status(200).json(data);
  } catch (err: any) {
    handleError(err, res);
  }
});

router.post("/", (req: any, res: any) => {
  // TODO: Przelew z kont A do B, C, D, E
});

router.post("/", (req: any, res: any) => {
  // TODO: Przelew z konta A do B
});

router.post("/", (req: any, res: any) => {
  // TODO: Ruletka inwestycyjna (procent)
});

router.post("/deposit/:accountNumber", (req: any, res: any) => {
  try {
    const { accountNumber } = req.params;
    const { amount } = req.body;

    const account = accounts.find(
      ({ accountNo }) => accountNo === parseInt(accountNumber)
    );

    if (account) {
      account.money += amount;
      res.status(StatusCodes.OK).send();
    } else {
      res.status(StatusCodes.NOT_FOUND).send();
    }
  } catch (err: any) {
    handleError(err, res);
  }
});

router.post("/create-account", (req: any, res: any) => {
  try {
    const { name } = req.body;

    const newAccountNo = (accounts.length + 1) * 111;

    accounts.push({
      accountNo: newAccountNo,
      name,
      money: 0,
    });

    res.status(StatusCodes.OK).send();
  } catch (err: any) {
    handleError(err, res);
  }
});

router.post("/", (req: any, res: any) => {
  // TODO: Wyplac
});

router.delete("/:accountNumber", (req: any, res: any) => {
  try {
    const { accountNumber } = req.params;

    accounts.forEach((account, index) => {
      if (account.accountNo == accountNumber) accounts.splice(index, 1);
    });

    res.status(200).json(accounts);
  } catch (err: any) {
    handleError(err, res);
  }
});

const handleError = (err: any, res: any) => {
  const error = err as any;
  console.error(error.message);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
};

export default router;
