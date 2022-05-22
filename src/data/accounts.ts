export type Account = {
  name: string;
  accountNo: number;
  money: number;
};

const accounts: Account[] = [
  {
    accountNo: 111,
    name: "Krisitan Olszevsky",
    money: 421,
  },
  {
    accountNo: 222,
    name: "Adamn Apud",
    money: 643,
  },
  {
    accountNo: 333,
    name: "Bob Tanaw",
    money: 4234,
  },
  {
    accountNo: 444,
    name: "Bob Budowniczy",
    money: 97567,
  },
];

export default accounts;
