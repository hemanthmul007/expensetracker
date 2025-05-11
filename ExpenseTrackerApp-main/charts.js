const expenses = getExpenses();

// Pie Chart: Expenses by Category
if (document.getElementById('categoryChart')) {
  const categoryTotals = {};
  expenses.forEach(e => {
    categoryTotals[e.category] = (categoryTotals[e.category] || 0) + e.amount;
  });

  new Chart(document.getElementById('categoryChart'), {
    type: 'pie',
    data: {
      labels: Object.keys(categoryTotals),
      datasets: [{
        data: Object.values(categoryTotals),
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff']
      }]
    }
  });
}

// Line Chart: Spending Over Time
if (document.getElementById('lineChart')) {
  const dateMap = {};
  expenses.forEach(e => {
    dateMap[e.date] = (dateMap[e.date] || 0) + e.amount;
  });

  const sortedDates = Object.keys(dateMap).sort();

  new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
      labels: sortedDates,
      datasets: [{
        label: 'Spending',
        data: sortedDates.map(d => dateMap[d]),
        fill: false,
        borderColor: '#4a90e2'
      }]
    }
  });
}

// Dashboard total
if (document.getElementById('total-spent')) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  document.getElementById('total-spent').textContent = `₹${total}`;
}
