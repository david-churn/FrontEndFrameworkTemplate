'use strict';
// 3/2/2019 David Churn created
// Simple sentence generator

let pushMe = document.getElementById('push-me');
let sentence = document.getElementById('sentence');

const subArr = ["computers","mutants","survivors","drones","rockets","politicians","scientists","zombies","robots"];
const verArr = ["deleting","attacking","dropping","running","flying above","debating","studying","crawling to","escaping from","eating","laughing at","swimming in"];
const objArr = ["evidence","food vats","bombs","reactors","shelters","route","aliens","future","phenomenon","Disney Land","brains","surviors","saucer","moon"];
let clickQty = 0;

pushMe.addEventListener('click', makeSentence);

function makeSentence() {
  let subInt = 0;
  let verInt = 0;
  let objInt = 0;

  clickQty++;
  if (clickQty >= 6) {
    pushMe.removeEventListener('click', makeSentence);
    pushMe.innerHTML = "Stop It";
  }
  else {
    subInt = Math.floor(Math.random() * (subArr.length - 1) + 1);
    verInt = Math.floor(Math.random() * (verArr.length -1) + 1);
    objInt = Math.floor(Math.random() * (objArr.length - 1) + 1);
  }

  sentence.innerHTML = `The ${subArr[subInt]} are ${verArr[verInt]} the ${objArr[objInt]}.`;
  console.log(`${clickQty}=${subInt},${verInt},${objInt}`);
};
