// Prvi zadatak
function newFunction() {
  number = Number(prompt("Molimo vas unesite broj", "el"));
  console.log("kvadrat broja je" + " " + `${Math.pow(number, 2)}`);
}
newFunction();

//drugi zadatak
const CART_DATA = [
  {
    id: 1,
    name: "Hawai Shirt",
    price: 30,
    amount: 2,
    categorty: "summer",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Adidas Slippers",
    price: 35,
    amount: 1,
    categorty: "summer",
    rating: 4.5,
  },
  {
    id: 6,
    name: "White T-Shirt",
    price: 15,
    amount: 4,
    categorty: "summer",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Summer hat",
    price: 7.5,
    amount: 3,
    categorty: "summer",
    rating: 40,
  },
];
const task = (array) => {
  const len = array.length;
  const shippingCost = 360;
  const namePrice = array.map((value) => {
    return {
      name: value.name,
      totalPrice: value.price * value.amount,
    };
  });
  let sum = namePrice
    .map((value) => value.totalPrice)
    .reduce((prevValue, currValue) => prevValue + currValue, 320);
  return `Imate ${len} artikla u kolicima, cena postanske usluge iznosi ${shippingCost}, vas racun iznosi ${sum}`;
};
console.log(task(CART_DATA));

// //TRECI
fetch("https://reqres.in/api/users.json")
  .then((response) => response.json())
  .then((data) => console.log(data.data));
