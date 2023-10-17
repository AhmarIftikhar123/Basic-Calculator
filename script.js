let display = document.getElementById("display");
const clear_btn = document.getElementById("clear");
const delete_btn = document.getElementById("delete");
const calculate_btn = document.getElementById("calculate");
const buttons = document.querySelectorAll("button");

let string = "";

let array = Array.from(buttons);

array.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.textContent === "AC") {
      string = "";
      display.value = string;
    } else if (e.target.textContent === "DE") {
      string = display.value.slice(0, display.value.length - 1);
      display.value = string;
    } else if (e.target.textContent === "=") {
      if (display.value === "") {
        console.warn("Input is Empty");
        return;
      }
      string = eval(string);
      display.value = string;
    } else {
      string += e.target.textContent;
      display.value = string;
    }
  });
});
