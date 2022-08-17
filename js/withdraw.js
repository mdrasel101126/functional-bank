document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawValue = getInputValueById("input-withdraw");
  getPrevTotalValueById("total-balance", -newWithdrawValue);
  getPrevTotalValueById("total-withdraw", newWithdrawValue);
});
