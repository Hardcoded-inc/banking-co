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

router.post("/transfer", (req: any, res: any) => {
  try {
    const { sourceAccountNo, destAccountNo, amount} = req.body;

    const sourceAccount = accounts.find(
        ({ accountNo}) => accountNo === parseInt(sourceAccountNo)
    )
    const destAccount = accounts.find(
        ({ accountNo}) => accountNo === parseInt(destAccountNo)
    )


    if (sourceAccount && destAccount) {
      if (sourceAccount.money > parseInt(amount)) {
        sourceAccount.money -= parseInt(amount)
        destAccount.money += parseInt(amount)
      } else {
        res.status(StatusCodes.BAD_REQUEST).send();
      }
    } else {
      res.status(StatusCodes.NOT_FOUND).send();
    }
  } catch (err: any) {
    handleError(err, res);
  }
});

router.post("/rulette/:accountNo", (req: any, res: any) => {
  const { accountNo } = req.params
  const { money, risk_factor } = req.body
  const user = accounts.find((obj) => {
    return obj.accountNo === parseInt(accountNo);
  });

  if (user && parseInt(risk_factor) > 1 && parseInt(risk_factor) < 100 ) {
    if(user.money >= money){
      if (Math.random() < 0.5){
        user.money += Math.round(user.money*((parseInt(risk_factor) / 100) + 1))
        res.status(StatusCodes.OK).json(["You win", user]);
      }else{
        user.money -= Math.round(user.money*((parseInt(risk_factor)/100)))
        res.status(StatusCodes.OK).json(["You loose", user]);
      }
      
    }else{
      res.status(StatusCodes.CONFLICT).json(["Not enough money", user]).send();
    }
  } else {
    res.status(StatusCodes.NOT_FOUND).send();
  }

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

    if (!accounts.find(({ accountNo }) => accountNo === newAccountNo)) {
      accounts.push({
        accountNo: newAccountNo,
        name,
        money: 0,
      });

      res.status(StatusCodes.CREATED).send();
    } else {
      res.status(StatusCodes.CONFLICT).send();
    }
  } catch (err: any) {
    handleError(err, res);
  }
});

router.post("/pay-out/:accountNumber", (req: any, res: any) => {
  try {
    const { accountNumber } = req.params;
    const { amount } = req.body;

    const account = accounts.find(
      ({ accountNo }) => accountNo === parseInt(accountNumber)
    );

    if (account && account?.money >= amount) {
      account.money -= amount;
      res.status(StatusCodes.OK).send();
    } else {
      res.status(StatusCodes.NOT_FOUND).send();
    }
  } catch (err: any) {
    handleError(err, res);
  }
});

router.delete("/:accountNumber", (req: any, res: any) => {
  try {
    const { accountNumber } = req.params;

    accounts.forEach((account, index) => {
      if (account.accountNo == accountNumber) accounts.splice(index, 1);
    });

    res.status(StatusCodes.OK).json(accounts);
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
