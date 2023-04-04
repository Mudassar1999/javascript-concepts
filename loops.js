// While Loop

let i = 1;
while (i <= 10) {
  document.write(i + " Hello " + "<br>");
  i++;
}

//Do While Loop

let b = 1;
do {
  document.write(b + " Hello " + "<br>");
  b++;
} while (b <= 10);

// For Loop

for (let c = 1; c <= 10; c++) {
  document.write(c + " Hello " + "<br>");
}

// For Loop with Array Example 1

let ary = [12, 16, 23, 34];
let s = 0;

for (let d = 0; d <= 3; d++) {
  document.write(ary[d] + "<br>");
  s += ary[d];
}

document.write("Sum is: " + s + "<br>");

// For loop

let ar = new Array(3);

for (let d = 0; d < 3; d++) {
  ar[d] = prompt("Enter the Value:");
  document.write(ar[d] + "<br>");
}

let ary1 = [12, 16, 23, 34];

ary1.forEach(function (value) {
  document.write(value + "<br>");
});

document.write("Sum is: " + s + "<br>");
