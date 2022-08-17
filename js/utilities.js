function getInputValueById(id) {
  const inputField = document.getElementById(id);
  const inputValueString = inputField.value;
  const inputValue = parseFloat(inputValueString);
  inputField.value = "";
  if (isNaN(inputValue) || inputValue <= 0) {
    alert("Please Insert Valid Input!!");
    return;
  }

  return inputValue;
}

function getPrevTotalValueById(id, newValue) {
  const prevTotalField = document.getElementById(id);
  const prevTotalString = prevTotalField.innerText;
  const prevTotalValue = parseFloat(prevTotalString);
  const total = prevTotalValue + newValue;
  if (isNaN(total) || total < 0) {
    return;
  }
  prevTotalField.innerText = total;
}
