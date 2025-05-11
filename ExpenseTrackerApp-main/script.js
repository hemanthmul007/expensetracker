let expenses = [];
let editId = null;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

function fetchExpenses() {
  fetch('http://localhost:3000/api/expenses')
    .then(res => res.json())
    .then(data => {
      expenses = data;
      renderExpenses();
    });
}

function renderExpenses() {
  expensesTableBody.innerHTML = '';
  let total = 0;

  expenses.forEach(expense => {
    total += parseFloat(expense.amount);

    const row = expensesTableBody.insertRow();
    row.insertCell().textContent = expense.category;
    row.insertCell().textContent = `₹${expense.amount}`;
    row.insertCell().textContent = expense.date;

    const actionsCell = row.insertCell();
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteExpense(expense.id);
    actionsCell.appendChild(deleteBtn);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.style.marginLeft = '10px';
    editBtn.onclick = () => {
      categorySelect.value = expense.category;
      amountInput.value = expense.amount;
      dateInput.value = expense.date;
      editId = expense.id;
      addBtn.textContent = 'Update Expense';
    };
    actionsCell.appendChild(editBtn);
  });

  totalAmountCell.textContent = `₹${total}`;
}

addBtn.addEventListener('click', () => {
  const category = categorySelect.value;
  const amount = amountInput.value;
  const date = dateInput.value;

  if (!category || !amount || !date) {
    alert('All fields required');
    return;
  }

  const expenseData = { category, amount, date };

  if (editId) {
    fetch(`http://localhost:3000/api/expenses/${editId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(expenseData)
    }).then(() => {
      editId = null;
      addBtn.textContent = 'Add Expense';
      resetForm();
      fetchExpenses();
    });
  } else {
    fetch('http://localhost:3000/api/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(expenseData)
    }).then(() => {
      resetForm();
      fetchExpenses();
    });
  }
});

function deleteExpense(id) {
  fetch(`http://localhost:3000/api/expenses/${id}`, {
    method: 'DELETE'
  }).then(() => fetchExpenses());
}

function resetForm() {
  categorySelect.value = '';
  amountInput.value = '';
  dateInput.value = '';
}

// Initial fetch
fetchExpenses();
