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

let calculateLoyaltyDiscount = (amount, years) => { // Function to calculate loyalty discount
    discount = years >= 5 ? .15 : years >= 3 ? .10 : 0.05; // Used a ternary operator as an alternative to if..else statement
    let discountedPrice = amount - (amount * discount); // Calculating discounted price
    return "Discounted Price: $" + discountedPrice.toFixed(2); // Returns value to two decimal points
}

console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"

// Task 4 Parameters and Arguments 

function calculateShippingCost(weight, location, expedited = false) { // Declare function
    if (location === "USA") { // If location is USA, the intital cost is $5 and weight cost is $.05 per lbs
        initialCost = 5;
        lbsCost = 0.5;
    } else if (location === "Canada") { // If location is Canada, inital cost is 10 and weight cost is 7
        initialCost = 10;
        lbsCost = 0.7
    }

    let totalCost = initialCost+ (weight * lbsCost); // Calculate total cost 
    if (expedited) { // If expeditied is true, add $10
        totalCost += 10;
    }
    return `Shipping Cost: $${totalCost.toFixed(2)}`; // Return valute
}

console.log(calculateShippingCost(10, "USA", true)); // Expected output: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping Cost: $13.50"

// Task 5 Returning Values

function calculateLoanInterest(principal, rate, years) { // Creating a function to calculate total interest 
    interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
}

console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected output: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected output: "Total Intrerest: $1750.00"

// Task 6 Higher Order Functions 

let transactions = [500, 1200, 3000, 800, 2200]; // Declare an array
function filterHigherValueTransactions(transactions, filterFunction) { // Create function to filter
    return transactions.filter(filterFunction); // Return value 
}

console.log(filterHigherValueTransactions(transactions, amount => amount > 1000)); // Expected output: 1200, 3000, 22000

// Task 7 Closures

function createBudgetTracker() {
    let balance = 0; // Balance equal to 0

    return function(expense) { // Create functon to adjust balance  
        balance -= expense; 
        console.log(`Current Balance: ${balance}`); // Log to console 
    };
}

let budget = createBudgetTracker(); // Declare budget equal to function

budget(300); // Expected Output "Current Balance: -$300"
budget(200); // Expected output: "Current Balance: -$500"

// Task 8 Recursion in Javascript
function calculateGrowth(years, revenue) { // Create function to calculate growth 
    if (years >= 10) { // Checks years, if greater than 10 return the current valaue 
        console.log(`Projected Revenue: $${revenue.toFixed(2)}`)
    return;
    } 
    return calculateGrowth(years + 1, revenue *1.05); // If years are not greater than 10, function will calculate growth
}

calculateGrowth(8, 1000); // Expected output: "Projected Revenue: $1102.50"
calculateGrowth(5, 5000); // Expected output: "Projected Revenue: $6381.41"
