import DonutMaker from "./DonutMaker.js";
 
let donutMaker = new DonutMaker(0,0,0);
const donutCountEl = document.querySelector("#donutCount");

const autoClickersEl = document.querySelector("#autoClickers");
const donutMultiplierEl = document.querySelector("#donutMultiplierCount");
let button =  document.querySelector("#bakeDonut");
button.addEventListener("click",function(){
  donutMaker.addDonut();
  donutCountEl.innerText = donutMaker.donutCount;



})
let autoClickerButton = document.querySelector("#buyautoclickers");
autoClickerButton.addEventListener("click",function(){
  donutMaker.buyautoclickers();
  donutCountEl.innerText = donutMaker.donutCount;
  autoClickersEl.innerText = donutMaker.autoClickers;




})
let multiplierButton = document.querySelector("#buydonutMultipliers");
multiplierButton.addEventListener("click",function(){
  donutMaker.buydonutMultipliers();
  donutMultiplierEl.innerText = donutMaker.donutMultiplier;
  donutCountEl.innerText = donutMaker.donutCount;

})

