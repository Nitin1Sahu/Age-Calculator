let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let years = date.getFullYear();
let inputDay;
let inputMonth;
let inputYear;
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function getDate() {
  inputDay = document.querySelector("#day").value;
  inputMonth = document.querySelector("#month").value;
  inputYear = document.querySelector("#year").value;
}

getDate()
document.querySelector("button").addEventListener("click", function () {
  if (inputDay > day) {
    day = day + monthDays[month - 1];
    month = month - 1;
  }
  if (inputMonth > month) {
    month = month + 12;
    years = years - 1;
  }
  let d = day - inputDay;
  let m = month - inputMonth;
  let y = years - inputYear;



  document.getElementById("years").innerHTML = y;
  document.getElementById("months").innerHTML = m;
  document.getElementById("days").innerHTML = d;
});
