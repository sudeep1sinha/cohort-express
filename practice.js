function calculateTotalSpentByCategory(transactions) {
  
 
    // Use a plain object for category totals
    const categoryTotals = {};
  
    for (const transaction of transactions) {
      const category = transaction.category;
      const price = transaction.price;
  
      // Check if category exists
      if (!categoryTotals[category]) {
        categoryTotals[category] = 0; // Initialize total for new category
      }
  
      categoryTotals[category] += price; // Add price to category total
    }
  
    // Convert object to array of objects
    return Object.entries(categoryTotals).map(([category, totalSpent]) => ({
      category,
      totalSpent,
    }));
  }
 
const transactions = [
  { category: 'Food', price: 10 },
  { category: 'Entertainment', price: 20 },
  { category: 'Food', price: 5 },
];

const totalSpentByCategory = calculateTotalSpentByCategory(transactions);
console.log(totalSpentByCategory);