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

// Task 3 Arrow Function

function calculateLoyaltyDiscount(amount, years) { // Function to calculate loyalty discount
    let discount = 0;
    if (years >= 5) { // If years are greater than or equal to 5, discount is 15%
        discount = 0.15; 
    } else if (years >= 3) { // If years are greater than or equal to 3, discount is 10%
        discount = 0.10;
    } else { // If years are less than 3 discount is 5%
        discount = 0.05;
    }

    let discountedPrice = amount - (amount * discount); // Calculating discounted price
    return "Discounted Price: $" + discountedPrice.toFixed(2); // Returns value to two decimal points
}

console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"