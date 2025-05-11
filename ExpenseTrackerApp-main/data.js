function getExpenses() {
  return JSON.parse(localStorage.getItem("expenses")) || [];
}

function saveExpenses(data) {
  localStorage.setItem("expenses", JSON.stringify(data));
}
