let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let billAmount = document.getElementById("bill-amount").value;
  let tipPercentage = document.getElementById("tip-percentage").value;
  let tipAmount = ((billAmount / 100) * tipPercentage).toFixed(2);
  document.getElementById("tip-amount").value = tipAmount;
  // let totalBill = document.getElementById("total-bill").value;
  let totalBill =
    Number(parseFloat(billAmount).toFixed(2)) + parseFloat(tipAmount);
  console.log(totalBill);
  document.getElementById("total-bill").value = totalBill;
});

let clicker = document.querySelector("#container");
clicker.addEventListener("click", function () {
  console.log("hello");
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  let randomColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = randomColor;
});
