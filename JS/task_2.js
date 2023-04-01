const elements = document.querySelectorAll('.element');
let item = 0;

while (item < elements.length) {
  if (item < 3) {
    elements[item].style.color = 'red';
  }
  else {
    elements[item].style.color = 'green';
  }
  item++;
}
