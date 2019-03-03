'use strict';

// 3/2/2019 David Churn modified to test JSHint functions

let ball = document.getElementById('ball');
let xDir = -3;
let yDir = -3;

//run 60 frames / second
function animate() {
  let pos = {
    x: Number(ball.style.left.split('px')[0]),
    y: Number(ball.style.top.split('px')[0]),
  }
  if (pos.x >= 575 || pos.x <= 0) {
    xDir *= -1;
  }
  if (pos.y >= 275 || pos.y <=0) {
    yDir *= -1;
  }
  ball.style.left = (pos.x + xDir) + 'px';
  ball.style.top = (pos.y + yDir) + 'px';
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

/*  requires === and !== */
if (1 == 2) {
  console.log("stuff and nonsense");
}

let unusedNbr=42;
