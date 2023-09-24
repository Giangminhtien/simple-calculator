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
    result = x + y;
  } else if (option === 2) {
    result = x - y;
  } else if (option === 3) {
    result = x * y;
  } else {
    result = x / y;
  }
  document.getElementById("result").value = result;
}
