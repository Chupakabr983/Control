const mass = [8, 125, 14, 2, 24, 197];
function vverx(mass) {
  for (let i = 0; i < mass.length; i++) {
    for (let q = 0; q < mass.length; q++) {
      if (mass[q] > mass[q + 1]) {
        let attempt = mass[q];
        mass[q] = mass[q + 1];
        mass[q + 1] = attempt;

        let i = mass.length;
        i > 0;
        i--;
        q = 0;
        q < i;
        q++;
        if ((mass[q] > i, i++));
      }
    }
  }
  return mass;
}

console.log(vverx(mass));

let age = prompt(
  "Cuántos años tiene - в переводе с испанского - сколько тебе лет?"
);
if (age < 18) {
  alert("Нас посадят, если тебя пропустим");
} else if (18 <= age) {
  alert("С кайфом - проходи Big boy");
}

// let more = document.querySelector(".more");
// more.addEventListener("click", () => {
//   console.log(more);
// });

let button = document.querySelector(".more");
function new_box() {
  let elem = document.createElement("div");
  elem.classList.add("more_1");
  elem.innerText = "Супер-мега-крутые кеды. 100% крокодил. Беги **** беги";

  return elem;
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  const da = new_box();
  const container = document.querySelector(".pic");
  container.append(da);
});
