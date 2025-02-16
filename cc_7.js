// Task 1: Function Declaration 
function calculateInvoice(subtotal, taxRate, discount) { // Create function to calculate total amount of invoice 
   let = total = (subtotal + (subtotal * taxRate)) - discount;
   return "Total Invoice: $" + total;
}

console.log(calculateInvoice(100, 0.08, 5)); // Expected Output: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // Expected Output: "Total Invoice: $530.00"

// Task 2: Function Expression

let calculateHourlyWage = function(salary, hoursPerWeek) // Use a function expression
{
    let hourlyWage = salary / (hoursPerWeek * 52); // Create a function to calculate hourly wage 
    return "Hourly Wage: $" + hourlyWage.toFixed(2); // Returns value 
}

console.log(calculateHourlyWage(52000, 40)); // Expected output: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected output: "Hourly Wage: $41.21"