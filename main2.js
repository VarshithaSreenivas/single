// Get references to HTML elements
const form = document.getElementById("my-form");
const expenseInput = document.getElementById("expense");
const descriptionInput = document.getElementById("description");
const categoryInput = document.querySelector('input[name="browser"]');
const userList = document.getElementById("users");

// Event listener for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  const expense = expenseInput.value;
  const description = descriptionInput.value;
  const category = categoryInput.value;

  // Check if any field is empty
  if (expense === "" || description === "" || category === "") {
    alert("Please fill in all fields");
    return;
  }

  // Create a new expense object
  const expenseItem = {
    expense,
    description,
    category,
  };

  // Add the expense item to an array or retrieve an existing array from local storage
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Push the new expense item to the array
  expenses.push(expenseItem);

  // Save the updated array back to local storage
  localStorage.setItem("expenses", JSON.stringify(expenses));

  // Clear the form fields
  form.reset();

  // Display the expense on the screen
  displayExpense(expenseItem);

  // Add delete and edit buttons
  addButtons(expenseItem, expenses.length - 1);
});

// Function to display an expense on the screen
function displayExpense(expenseItem) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <span>Expense: ${expenseItem.expense}</span>
    <span>Description: ${expenseItem.description}</span>
    <span>Category: ${expenseItem.category}</span>
  `;
  userList.appendChild(listItem);
}

// Function to add delete and edit buttons
function addButtons(expenseItem, index) {
  const listItem = userList.lastChild;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function () {
    // Remove the expense item from the array
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    // Remove the list item from the screen
    userList.removeChild(listItem);
  });

  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.addEventListener("click", function () {
    // Implement your edit functionality here if needed
    // You can populate the form fields with the expenseItem data for editing
    // Then, save the edited data back to the local storage
    expenseInput.value = expenseItem.expense;
    descriptionInput.value = expenseItem.description;
    categoryInput.value = expenseItem.category;

    // Remove the original item
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    // Remove the list item from the screen
    userList.removeChild(listItem);
  });

  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);
}

// Load existing expenses from local storage on page load
window.addEventListener("load", function () {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.forEach((expenseItem, index) => {
    displayExpense(expenseItem);
    addButtons(expenseItem, index);
  });
});