const nativeCheckbox = document.querySelector('#native-checkbox');
const customCheckbox = document.querySelector('.custom-checkbox');

let preventFocus = false;

function syncState() {
  const isChecked = nativeCheckbox.checked;
  customCheckbox.setAttribute('aria-checked', isChecked);
  if (isChecked) {
    customCheckbox.classList.add('checked');
  } else {
    customCheckbox.classList.remove('checked');
  }
}

customCheckbox.addEventListener('click', () => {
  nativeCheckbox.click();
});

nativeCheckbox.addEventListener('change', syncState);

syncState();
