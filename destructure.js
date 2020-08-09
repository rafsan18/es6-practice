const person = {
  name: "Jack William",
  age: 17,
  job: "facebook",
  gfName: "Ema Watson",
  address: "Kochu khet",
  phone: "01771112211",
  friends: ["Tom Hanks", "Tom Cruise", "Tom yarn"],
};

// const gfName = person.gfName;
// const phone = person.phone;
// const { address, phone, gfName, age, salary } = person;

// console.log(gfName, phone);
// console.log(gfName, phone, age, salary, address);

const friends = [
  "Sakib Khan",
  "Arman Khan",
  "Amir Khan",
  "Salman Khan",
  "Sharukh Khan",
];

const [chotoFriend, nextFriend, ...restFriends] = friends;
console.log(chotoFriend);
console.log(nextFriend);
console.log(restFriends);
