const { Router } = require("express");
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

router.post("/", (req: any, res: any) => {
  // TODO: Create account
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

export default router;
