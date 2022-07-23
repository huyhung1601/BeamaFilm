names = ["annie", "annie", "bernard", "annie"];

const doNumber1 = (names) => {
  names.forEach((name, i) => {
    const index = names.indexOf(name);
    if (i !== index) {
      names.splice(index, 1);
    }
  });
  return names;
};

console.log(doNumber1(names));

names = [
  "zoe",
  "michael",
  "nero",
  "michael",
  "annie",
  "zoe",
  "annie",
  "bernard",
  "annie",
  "raymond",
];

console.log(doNumber1(names));
