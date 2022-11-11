// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
);

// Iteration 1 - using callbacks
// ...

// ----------------------------------------------
// Iteration 2 - using promises .then()

const STEAK = "steak";
const steakArr = steak;
const steakOL = document.getElementById(STEAK);
const steakImg = document.getElementById("steakImg");

obtainInstruction(STEAK, 0)
  .then((step) => (steakOL.innerHTML += `<li>${step}</li>`))
  .then(() => obtainInstruction(STEAK, 1))
  .then((step) => (steakOL.innerHTML += `<li>${step}</li>`))
  .then(() => obtainInstruction(STEAK, 2))
  .then((step) => (steakOL.innerHTML += `<li>${step}</li>`))
  .then(() => obtainInstruction(STEAK, 3))
  .then((step) => (steakOL.innerHTML += `<li>${step}</li>`))
  .then(() => obtainInstruction(STEAK, 4))
  .then((step) => (steakOL.innerHTML += `<li>${step}</li>`))
  .then(() => obtainInstruction(STEAK, 5))
  .then((step) => (steakOL.innerHTML += `<li>${step}</li>`))
  .then(() => obtainInstruction(STEAK, 6))
  .then((step) => (steakOL.innerHTML += `<li>${step}</li>`))
  .then(() => obtainInstruction(STEAK, 7))
  .then((step) => (steakOL.innerHTML += `<li>${step}</li>`))
  .then(() => steakImg.removeAttribute("hidden"))
  .catch((err) => console.log(err));

// refactored above code with async await:

// async function printSteakRecipe() {
//   for (el of steakArr) {
//     const step = await obtainInstruction(STEAK, steakArr.indexOf(el));
//     steakOL.innerHTML += `<li>${step}</li>`;
//     if (steakArr.indexOf(el) === steakArr.length - 1) {
//       steakImg.removeAttribute("hidden");
//     }
//   }
// }

// printSteakRecipe();

// ----------------------------------------------
// Iteration 3 using async/await

const BROC = "broccoli";
const broccoliOL = document.getElementById(BROC);
const brocImg = document.getElementById("broccoliImg");

async function makeBroccoli() {
  for (let i = 0; i < broccoli.length; i++) {
    try {
      broccoliOL.innerHTML += `<li>${await obtainInstruction(BROC, i)}</li>`;
    } catch (error) {
      console.log(error);
    }
  }
  broccoliOL.innerHTML += `<li>Broccoli is ready!</li>`;
  brocImg.removeAttribute("hidden");
}

makeBroccoli();

// ----------------------------------------------

// Bonus 2 - Promise all - Brussels Sprouts

const BRUSSELS = "brusselsSprouts";
const arrOfSteps = brusselsSprouts;
let arrOfPromises = [];
const brusselsSproutsOL = document.getElementById(BRUSSELS);
const brussImg = document.getElementById("brusselsSproutsImg");

for (let i = 0; i < arrOfSteps.length; i++) {
  arrOfPromises.push(obtainInstruction(BRUSSELS, i));
}

Promise.all(arrOfPromises)
  .then((steps) =>
    steps.forEach((step) => (brusselsSproutsOL.innerHTML += `<li>${step}</li>`))
  )
  .then(
    () =>
      (brusselsSproutsOL.innerHTML += `<li>Brussels sprouts are ready!</li>`)
  )
  .then(() => brussImg.removeAttribute("hidden"));
