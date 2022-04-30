const celsius = document.querySelector('#celsius');
const fahrenhit = document.querySelector('#fahrenhit');

celsius.oninput = () => {
  let output = (parseFloat(celsius.value) * 9) / 5 + 32;
  fahrenhit.value = parseFloat(output.toFixed(2));
};
fahrenhit.oninput = () => {
  let output = ((parseFloat(fahrenhit.value) - 32) * 5) / 9;
  celsius.value = parseFloat(output.toFixed(2));
};
