const toggleSwitch = document.getElementById('toggleSwitch');
const price = document.getElementById('price');

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    price.innerHTML = '100<span>/year</span>';
  } else {
    price.innerHTML = '10<span>/month</span>';
  }
});
