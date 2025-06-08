
function calculateChaiIngredients(numberOfCups) {
    const water = numberOfCups * 200; // in ml
    const milk = numberOfCups * 50;   // in ml
    const teaLeaves = numberOfCups;   // in tablespoons
    const sugar = numberOfCups * 2;   // in teaspoons

    console.log(To make ${numberOfCups} cups of Kenyan Chai, you will need:);
    console.log(Water: ${water} ml);
    console.log(Milk: ${milk} ml);
    console.log(Tea Leaves (Majani): ${teaLeaves} tablespoons);
    console.log(Sugar (Sukari): ${sugar} teaspoons\n);
    console.log("Enjoy your Chai Bora!");
}

// Prompt the user
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(input);

// Call the function
calculateChaiIngredients(numberOfCups);
