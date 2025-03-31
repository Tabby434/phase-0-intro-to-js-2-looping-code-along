// Code your solutions in this file

// Employee Object
const employee = {
  name: "John Doe",
  streetAddress: "123 Main St"
};

// 1. Non-destructive update
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

// 2. Destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// 3. Non-destructive delete
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// 4. Destructive delete
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// 5. Write thank you cards
function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

// 6. Countdown function
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

// Example usage
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
countDown(10);

