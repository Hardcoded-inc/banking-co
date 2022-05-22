const { Router } = require("express");
const router = Router();

router.get("/", (req: any, res: any) => {
  // TODO: Pokaz stan konta
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

router.delete("/", (req: any, res: any) => {
  // TODO: Usun konto
});

export default router;
