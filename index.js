// Import stylesheets
import './style.css';

// Write Javascript code!

const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

var button = document.querySelectorAll('.button');
var number = document.getElementById('counter');

var count = 0;

button[0].addEventListener('click', function () {
  count += 1;
  number.innerHTML = count;
});

button[1].addEventListener('click', function () {
  count -= 1;
  number.innerHTML = count;
});

