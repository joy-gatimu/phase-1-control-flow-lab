function scuberGreetingForFeet(distance) {
 
  if (distance <= 400) {
    return 'This one is on me!'; 
  } else if (distance > 400 && distance <= 2000) {
    return 'That will be twenty bucks.'; // Charge for distances between 401 and 2000 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.'; // Still $20 for 2001 to 2500 feet
  } else {
    return 'No can do.'; // Not allowed for distances over 2500 feet
  }
}

function ternaryCheckCity(destination) {
  // Use a ternary operator to check the destination
  return destination === "NYC" ? "Ok, sounds good." : "No go."; // Return based on the destination
}

function switchOnCharmFromTip(tip) {
  // Use a switch statement to respond to the tip
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'; 
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.'; 
  }
}


console.log(scuberGreetingForFeet(199)); 
console.log(scuberGreetingForFeet(1000)); 
console.log(scuberGreetingForFeet(2500)); 
console.log(scuberGreetingForFeet(3000)); 

console.log(ternaryCheckCity("NYC")); 
console.log(ternaryCheckCity("Los Angeles")); 

console.log(switchOnCharmFromTip('generous')); 
console.log(switchOnCharmFromTip('not as generous')); 
console.log(switchOnCharmFromTip('cheap')); 