"use strict";

{
  let btn = document.getElementById("btn");
  btn.addEventListener("click", ()=> {
    // let results = ["大吉", "中吉", "凶"]
    // btn.textContent = results[Math.floor(Math.random()* results.length)];
    let omikuji = Math.random();
    if (omikuji < 0.5) {
      btn.textContent = "大吉";
    } else if(omikuji < 0.2) {
      btn.textContent = "中吉";
    } else {
      btn.textContent = "小吉";
    }
  });
}
