x = 0.0;
y = 0.0;
option = 0;
result = 0;

function calculate() {
  x = document.getElementById("x").value;
  y = document.getElementById("y").value;
  option = document.getElementById("option").value;
  x = Number(x);
  y = Number(y);
  option = Number(option);
  if (option === 1) {
    alert(x + y);
  } else if (option === 2) {
    alert(x - y);
  } else if (option === 3) {
    alert(x * y);
  } else {
    alert(x / y);
  }
}
