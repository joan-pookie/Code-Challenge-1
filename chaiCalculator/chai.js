
function calculateChaiIngredients(numberOfCups) {
  // Ingredient amounts per cup
  const waterPerCup = 200; // ml
  const milkPerCup = 50;   // ml
  const teaLeavesPerCup = 1; // tablespoon
  const sugarPerCup = 2;   // teaspoons

  // Total amounts based on number of cups
  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  // Display results
  console.log(To make ${numberOfCups} cups of Kenyan Chai, you will need:);
  console.log(Water: ${totalWater} ml);
  console.log(Milk: ${totalMilk} ml);
  console.log(Tea Leaves (Majani): ${totalTeaLeaves} tablespoons);
  console.log(Sugar (Sukari): ${totalSugar} teaspoons);
  console.log(\nEnjoy your Chai Bora!);
}

// Prompt the user
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(input);

// Run the function
calculateChaiIngredients(numberOfCups);
