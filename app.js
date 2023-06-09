// Cashier-problem- A program that helps a cashier give adequate change to customers
// A

const cashier = (price, cash) => {
  let change = parseFloat((cash - price).toFixed(2));
  console.log(`Price:${price} €`);
  console.log(`Amount:${cash} €`);
  console.log(`Change:${change} €`);

  let current = [
    "500",
    "200",
    "100",
    "50",
    "20",
    "10",
    "5",
    "2",
    "1",
    "0.50",
    "0.20",
    "0.10",
    "0.05",
    "0.02",
    "0.01",
  ];
  for (let i = 0; i < current.length; i++) {
    if (change >= current[i]) {
      amount = Math.floor(change / current[i]);
      change = parseFloat((change % current[i]).toFixed(2));
    }
  }
  if (price === cash) return console.log(`Payment done!You don't need to give out any change. Print the receipt?`);
  if (price > cash) return console.log(`! You don't have enough cash €€€ !`);
};
console.log(`---------A-----------`);
cashier(7.5, 500);
console.log("----with negative value----");
cashier(5, 3.71);
console.log("---with same value---");
cashier(2, 2);

// B
class Cashier1 {
  constructor(paidAmount, price) {
    this.paidAmount = paidAmount;
    this.price = price;
    this.returnAmount;
    this.notes = [
      [200, "Two Hundred Euro Notes"],
      [100, "One Hundred Euro Note"],
      [50, "Fifty Euro Notes"],
      [20, "Twenty Euro Notes"],
      [10, "Ten Euro Notes"],
      [5, "Five Euro Notes"],
      [2, "Two Euro"],
      [1, "One Euro"],
      [0.5, "Fifty Cents Coin"],
      [0.2, "Twenty Cents Coin"],
      [0.1, "Ten Cents Coin"],
      [0.05, "Five Cents Coin"],
      [0.02, "Two Cents Coin"],
      [0.01, "One Cent Coin"],
    ];
    this.findReturnAmount();
    this.resultWithNotes();
  }
  findReturnAmount() {
    this.returnAmount = (this.paidAmount - this.price).toFixed(2);
    console.log(`Return Amount:${this.returnAmount}€`);
    if (this.returnAmount < 0)
      console.log(
        `You need to pay ${Math.abs(this.returnAmount).toFixed(2)}€ more.`
      );
  }
  resultWithNotes() {
    let notesNumber;
    for (let i = 0; i < this.notes.length; i++) {
      if (this.paidAmount > this.price) {
        notesNumber = Math.floor(this.returnAmount / this.notes[i][0]);
        this.returnAmount = (this.returnAmount % this.notes[i][0]).toFixed(2);
        console.log(
          `${notesNumber} x ${this.notes[i][0]}€ || ${notesNumber} x ${this.notes[i][1]}`
        );
      }
    }

    if (this.paidAmount < this.price)
      return console.log(`!!! You don't have enough cash €€€ !!!`);
      if(this.paidAmount === this.price)
      return console.log(`Payment done!You don't need to give out any change. Print the receipt?`);
  }
}

console.log(`--------------B1-----------------`);
let buy = new Cashier1(20, 5.15);
console.log(`--------------B2-----------------`);
buy = new Cashier1(100, 25);
console.log(`--------------B3-----------------`);
buy = new Cashier1(7.5, 10);
console.log(`--------------B4-----------------`);
buy = new Cashier1(10, 10);
