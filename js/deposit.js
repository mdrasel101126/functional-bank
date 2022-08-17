document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositValue = getInputValueById("input-deposit");
  getPrevTotalValueById("total-deposit", newDepositValue);
  getPrevTotalValueById("total-balance", newDepositValue);
});
