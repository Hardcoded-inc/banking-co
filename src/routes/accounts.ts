const { Router, Request, Response } = require("express");
import { StatusCodes } from "http-status-codes";

const router = Router();
import accounts from "../data/accounts";

router.get("/", (req: any, res: any) => {
  // TODO: Pokaz stan konta
  console.log(accounts);
  console.log("asdf");
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

router.post("/", (req: any, res: any) => {
  // TODO: Wpłac na konto
});

router.post("/create-account", (req: Request, res: Response) => {
  // TODO: OL Create account

  try {
    const { name } = req.body;

    const newAccountNo = (accounts.length + 1) * 111;

    accounts.push({
      name,
      accountNo: newAccountNo,
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
  const { accountNumber } = req.params

  accounts.forEach( (account, index) => {
    if (account.accountNo == accountNumber) accounts.splice(index,1);
  })

  res.status(200).json(accounts)
});

const handleError = (err: any, res: Response) => {
  const error = err as any;
  console.error(error.message);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
};

export default router;
